"""Modify a picture with a given CVD."""
from functools import lru_cache
from PIL import Image
import time
import argparse
import sys
import os

sys.path.insert(0, os.getcwd())

try:
    from coloraide_extras import Color
except ImportError:
    from coloraide import Color


def printt(t):
    """Print time."""

    print('Completed in: ', end='')
    s = t // 1e+9
    m = t // 1e+6
    u = t // 1000
    if s:
        s = t / 1e+9
        h = m = 0
        m = s // 60
        if m:
            s -= m * 60
            h = m // 60
            if h:
                m -= h * 60
        if h:
            print('{} hours '.format(h), end='')
        if m:
            print('{} minutes '.format(m), end='')
        print('{} sec'.format(s))
    elif m:
        print('{} msec'.format(t / 1e+6))
    elif u:
        print('{} usec'.format(t / 1000))
    else:
        print('{} nsec'.format(t))


@lru_cache(maxsize=1024 * 1024)
def apply_filter(deficiency, method, severity, p):
    """Apply filter."""

    has_alpha = len(p) > 3
    color = Color(
        'srgb', [x / 255 for x in p[:3]],
        p[3] / 255 if has_alpha else 1
    ).cvd(
        deficiency, severity, in_place=True, method=method
    ).clip(
        in_place=True
    )
    return tuple([int(x * 255) for x in color.coords()]) + ((int(color[-1] * 255),) if has_alpha else tuple())


def process_image(img, output, deficiency, method, severity):
    """Process the image applying the requested deficiency."""

    with Image.open(img) as im:
        pixels = im.load()
        total = im.size[0]
        start = time.perf_counter_ns()
        total = im.size[0] * im.size[1]
        factor = 100 / total
        i = j = 0
        print('Pixels: {}'.format(total))
        print('> 0%', end='\r')
        for e, i in enumerate(range(im.size[0])):
            for j in range(im.size[1]):
                pixels[i, j] = apply_filter(deficiency, method, severity, pixels[i, j])
            print('> {}%'.format(int((e * j) * factor)), end="\r")
        print('> 100%')

        t = time.perf_counter_ns() - start
        printt(t)
        im.save(output)


def main():
    """Main."""

    parser = argparse.ArgumentParser(prog='diagrams', description='Apply CVD to an image.')
    parser.add_argument('--input', '-i', help='Input image.')
    parser.add_argument('--output', '-o', help='Output name and location.')
    parser.add_argument('--deficiency', '-d', help='The deficiency to apply.')
    parser.add_argument('--method', '-m', help='The method to use: vienot, brettel, machado.')
    parser.add_argument('--severity', '-s', default=1, type=float, help='The severity: 0 - 1')
    args = parser.parse_args()

    process_image(args.input, args.output, args.deficiency, args.method, args.severity)

    return 0


if __name__ == "__main__":
    sys.exit(main())
