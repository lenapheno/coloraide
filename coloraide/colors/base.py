"""Color base."""
from .. import util
from ..util import parse
import re

MATCH = re.compile(
    r"(?xi)color\(\s*([-a-z0-9]+)\s+((?:{float}{sep}){{2}}{float}(?:{asep}(?:{percent}|{float}))?)\s*\)".format(
        **parse.COLOR_PARTS
    )
)


def split_channels(cls, color):
    """Split channels."""

    channels = []
    for i, c in enumerate(parse.RE_CHAN_SPLIT.split(color.strip()), 0):
        channels.append(float(c))
    if len(channels) == 3:
        channels.append(1.0)
    return channels


def gamut_clip(obj):
    """Gamut clipping."""

    coords = obj.coords()
    gamut = obj._gamut
    fit = []

    for i, value in enumerate(coords):
        a, b = gamut[i]

        # Normalize hue
        if isinstance(a, GamutHue) and isinstance(b, GamutHue):
            fit.append(value if 0.0 <= value <= 360.0 else value % 360.0)
            continue

        # These parameters are unbounded
        if isinstance(a, GamutUnbound):
            a = None
        if isinstance(b, GamutUnbound):
            b = None

        if a is not None or b is not None:
            fit.append(util.clamp(value, a, b))

    return fit


class GamutHue(float):
    """Gamut hue."""


class GamutBound(float):
    """Bounded gamut value."""


class GamutUnbound(float):
    """Unbounded gamut value."""


class _Color:
    """Base color object."""

    DEF_BG = ""
    SPACE = ""

    def __init__(self, color=None):
        """Initialize."""

        self._c0 = 0.0
        self._c1 = 0.0
        self._c2 = 0.0
        self._c3 = 0.0

    def coords(self):
        """Coordinates."""

        return [self._c1, self._c2, self._c3]

    def clone(self):
        """Clone."""

        return self.new(self)

    def convert(self, space):
        """Convert to color space."""

        obj = self.spaces.get(space.lower())
        if obj is None:
            raise ValueError("'{}' is not a valid color space".format(space))
        return obj(self)

    def new(self, value, space=None):
        """Create new color in color space."""

        if space is None:
            space = self.space()

        obj = self.spaces.get(space.lower())
        if obj is None:
            raise ValueError("'{}' is not a valid color space".format(space))
        return obj(value)

    def fit_gamut(self, method=gamut_clip):
        """Fit the gamut using the provided method."""

        fit = method(self)
        self._c1 = fit[0]
        self._c2 = fit[1]
        self._c3 = fit[2]

    @property
    def _alpha(self):
        """Alpha channel."""

        return self._c0

    @_alpha.setter
    def _alpha(self, value):
        """Set alpha channel."""

        self._c0 = util.clamp(value, 0.0, 1.0)

    @classmethod
    def space(cls):
        """Get the color space."""

        return cls.SPACE

    def mutate(self, obj):
        """Update from color."""

        if self is obj:
            return

        if not isinstance(obj, type(self)):
            obj = type(self)(obj)

        self._c1 = obj._c1
        self._c2 = obj._c2
        self._c3 = obj._c3
        self._alpha = obj._alpha

    @property
    def alpha(self):
        """Alpha channel."""

        return self._alpha

    @alpha.setter
    def alpha(self, value):
        """Adjust alpha."""

        self._alpha = self.tx_channel(-1, value) if isinstance(value, str) else float(value)

    def __str__(self):
        """String."""

        return self.to_string(alpha=True)

    def __repr__(self):
        """Representation."""

        return 'color({} {} / {})'.format(
            self.space(),
            ' '.join([util.fmt_float(c, util.DEF_PREC) for c in self.coords()]),
            util.fmt_float(self._alpha, util.DEF_PREC)
        )

    @classmethod
    def tx_channel(cls, channel, value):
        """Set a non-alpha color channel."""

        raise NotImplementedError("Base _Color class does not implement 'tx_channel' directly.")

    @classmethod
    def match(cls, string, start=0, fullmatch=True):
        """Match a color by string."""

        m = MATCH.match(string, start)
        if m is not None and m.group(1).lower() == cls.space() and (not fullmatch or m.end(0) == len(string)):
            return split_channels(cls, m.group(2)), m.end(0)
        return None, None

    def to_string(
        self, *, alpha=None, precision=util.DEF_PREC, **kwargs
    ):
        """Convert to CSS."""

        template = "color({} {} {} {} {})" if alpha else "color({} {} {} {})"
        values = [
            util.fmt_float(self._c1, precision),
            util.fmt_float(self._c2, precision),
            util.fmt_float(self._c3, precision)
        ]
        if alpha:
            values.append(util.fmt_float(self._alpha, max(precision, util.DEF_PREC)))

        return template.format(self.space(), *values)
