"""
Render 3D plots of sRGB in other color spaces.

In order to render things fast and allow for reasonable
performance, we render the outer shell of the space.
"""
import itertools
import matplotlib.pyplot as plt
import sys
import os
import math
import argparse

sys.path.insert(0, os.getcwd())

from coloraide import Color  # noqa: E402
from coloraide.spaces import Cylindrical  # noqa: E402
from coloraide.util import is_nan  # noqa: E402

axis_map = {
    # Lab like spaces
    "lab": [1, 2, 0],
    "lab-d65": [1, 2, 0],
    "oklab": [1, 2, 0],
    "jzazbz": [1, 2, 0],
    "ictcp": [1, 2, 0],
    "din99o": [1, 2, 0],
    "luv": [1, 2, 0],

    # Lch like spaces
    "lch": [2, 1, 0],
    "lch-d65": [2, 1, 0],
    "oklch": [2, 1, 0],
    "jzczhz": [2, 1, 0],
    "din99o-lch": [2, 1, 0],
    "lchuv": [2, 1, 0]
}


def add_color(space, color, x, y, z, c):
    """Add color to the provided arrays."""

    coords = color.convert(space).coords()
    x.append(coords[0])
    y.append(coords[1])
    z.append(coords[2])
    s = color.to_string(hex=True)
    c.append(s)


def add_cyl_color(space, color, x, y, z, c):
    """
    Add color to the provided arrays.

    Handles cylindrical spaces. Returns x (hue), y (chroma/saturation), z (value/lightness).
    """

    cyl = color.convert(space)

    chroma = cyl.chroma
    lightness = cyl.lightness
    hue = cyl.hue

    if is_nan(hue):
        hue = 0

    z.append(chroma * math.sin(math.radians(hue)))
    y.append(chroma * math.cos(math.radians(hue)))
    x.append(lightness)

    s = color.convert('srgb').to_string(hex=True)
    c.append(s)


def render_space(space, add, resolution, factor, data, c, offset=0):
    """Render the space with the given resolution and factor."""

    x, y, z = data

    # We are rendering the spaces using sRGB, so just do a shell by picking
    # all the colors on the outside of the sRGB space. Render will be hollow.
    for c1, c2 in itertools.product(
        (((x / resolution) * factor) + offset for x in range(0, resolution + 1)),
        (((x / resolution) * factor) + offset for x in range(0, resolution + 1))
    ):

        add(space, Color('srgb', [0, c1, c2]), x, y, z, c)
        add(space, Color('srgb', [1, c1, c2]), x, y, z, c)

        add(space, Color('srgb', [c1, 0, c2]), x, y, z, c)
        add(space, Color('srgb', [c1, 1, c2]), x, y, z, c)

        add(space, Color('srgb', [c1, c2, 0]), x, y, z, c)
        add(space, Color('srgb', [c1, c2, 1]), x, y, z, c)


def render_cyl_space(space, resolution, data, c):
    """Render the space with the given resolution and factor."""

    x, y, z = data

    res = int(resolution * 2)

    # We are rendering the spaces using sRGB, so just do a shell by picking
    # all the colors on the outside of the sRGB space. Render will be hollow.
    for c1, t in itertools.product(
        ((x / res) * 360 for x in range(0, res + 1)),
        (((x / resolution) * 100, i) for i, x in enumerate(range(0, resolution + 1), 0))
    ):

        # Offset the plot on every other iteration blend the rows into a mesh
        # Better looking when low resolution zoomed into higher resolution
        c2, count = t
        if count % 2 and c1 < 360:
            c1 += (360 / res) * 0.5

        # Top disc
        x.append(c2 * math.sin(math.radians(c1)))
        y.append(c2 * math.cos(math.radians(c1)))
        z.append(100)
        c.append(Color(space, [c1, c2, 100]).convert('srgb').to_string(hex=True))

        # Bottom disc
        x.append(c2 * math.sin(math.radians(c1)))
        y.append(c2 * math.cos(math.radians(c1)))
        z.append(0)
        c.append(Color(space, [c1, c2, 0]).convert('srgb').to_string(hex=True))

    for c1, t in itertools.product(
        ((x / res) * 360 for x in range(0, res + 1)),
        (((x / resolution) * 100, i) for i, x in enumerate(range(0, resolution + 1), 0))
    ):
        # Offset the plot on every other iteration blend the rows into a mesh
        # Better looking when low resolution zoomed into higher resolution
        c2, count = t
        if count % 2 and c1 < 360:
            c1 += (360 / res) * 0.5

        # Cylinder portion
        x.append(100 * math.sin(math.radians(c1)))
        y.append(100 * math.cos(math.radians(c1)))
        z.append(c2)
        c.append(Color(space, [c1, 100, c2]).convert('srgb').to_string(hex=True))


def plot_space_in_srgb(space, title="", dark=False, resolution=70):
    """Plot the given space in sRGB."""

    data = [[], [], []]
    c = []

    # Get names for
    names = Color.CS_MAP[space].CHANNEL_NAMES
    is_cyl = issubclass(Color.CS_MAP[space], Cylindrical)

    # Some spaces need us to rearrange the order of the data
    axm = axis_map.get(space, [0, 1, 2])

    # Select the right theme
    if dark:
        plt.style.use('dark_background')
    else:
        plt.style.use('seaborn-whitegrid')

    # Setup figure and axis
    figure = plt.figure()
    plt.tight_layout()
    ax = plt.axes(
        projection='3d',
        xlabel=names[axm[0]] if not is_cyl else "{} (0˚ - 360˚)".format(names[axm[0]]),
        ylabel=names[axm[1]],
        zlabel=names[axm[2]]
    )
    # Turn off ticks for cylindrical hue
    if is_cyl:
        ax.xaxis.set_ticks([])
    figure.add_axes(ax)

    # Add title
    plt.title(title if title else 'srgb rendered in {}'.format(space), pad=20)

    # Render the space
    if is_cyl and space in ('hsl', 'hsv', 'hwb'):
        render_cyl_space(space, resolution, data, c)
    else:
        # Select the right color handler for the space
        add = add_cyl_color if is_cyl else add_color
        render_space(space, add, resolution, 1, data, c)

        # Oklab needs higher resolution near black
        if space in ('oklab', 'oklch'):
            render_space(space, add, resolution, 0.3, data, c)
            render_space(space, add, resolution, 0.01, data, c)
        # ICtCp needs an absurd amount of resolution near black,
        # do multiple, increasingly higher resolution passes
        elif space == 'ictcp':
            render_space(space, add, resolution // 2, 0.3, data, c)
            render_space(space, add, resolution // 2, 0.2, data, c)
            render_space(space, add, resolution, 0.1, data, c)
            render_space(space, add, resolution, 0.01, data, c)

    # Setup the aspect ratio
    ax.set_box_aspect((1, 1, 1))

    # Plot the data
    ax.scatter3D(data[axm[0]], data[axm[1]], data[axm[2]], c=c, s=20 * 4)


def main():
    """Main."""

    parser = argparse.ArgumentParser(prog='3d_diagrams', description='Plot 3D sRGB in different color spaces.')
    parser.add_argument('--space', '-s', help='Desired space.')
    parser.add_argument(
        '--resolution', '-r',
        default="70",
        help=(
            "How densely to render the figure. Some spaces need higher resolution to flesh out certain areas, "
            "but it comes at the cost of speed."
        )
    )
    parser.add_argument('--title', '-t', default='', help="Provide a title for the diagram.")
    parser.add_argument('--dark', action="store_true", help="Use dark theme.")
    parser.add_argument('--output', '-o', default='', help='Output file.')
    args = parser.parse_args()

    plot_space_in_srgb(
        args.space,
        title=args.title,
        dark=args.dark,
        resolution=int(args.resolution)
    )

    if args.output:
        plt.savefig(args.output)
    else:
        plt.show()


if __name__ == "__main__":
    sys.exit(main())