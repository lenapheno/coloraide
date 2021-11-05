"""HSV class."""
from ..spaces import OptionalPercent, Space, RE_DEFAULT_MATCH, Angle, GamutBound, Cylindrical
from .srgb.base import SRGB
from .hsl.base import HSL
from .. import util
import re
from ..util import Vector, MutableVector
from typing import Tuple, TYPE_CHECKING

if TYPE_CHECKING:
    from ..color import Color


def hsv_to_hsl(hsv: Vector) -> MutableVector:
    """
    HSV to HSL.

    https://en.wikipedia.org/wiki/HSL_and_HSV#Interconversion
    """

    h, s, v = hsv
    l = v * (1.0 - s / 2.0)
    s = 0.0 if (l == 0.0 or l == 1.0) else (v - l) / min(l, 1.0 - l)

    if s == 0:
        h = util.NaN

    return [util.constrain_hue(h), s, l]


def hsl_to_hsv(hsl: Vector) -> MutableVector:
    """
    HSL to HSV.

    https://en.wikipedia.org/wiki/HSL_and_HSV#Interconversion
    """

    h, s, l = hsl

    v = l + s * min(l, 1.0 - l)
    s = 0.0 if (v == 0.0) else 2 * (1.0 - l / v)

    if s == 0:
        h = util.NaN

    return [util.constrain_hue(h), s, v]


class HSV(Cylindrical, Space):
    """HSL class."""

    SPACE = "hsv"
    SERIALIZE = ("--hsv",)
    CHANNEL_NAMES = ("h", "s", "v", "alpha")
    CHANNEL_ALIASES = {
        "hue": "h",
        "saturation": "s",
        "value": "v"
    }
    DEFAULT_MATCH = re.compile(RE_DEFAULT_MATCH.format(color_space='|'.join(SERIALIZE), channels=3))
    GAMUT_CHECK = "srgb"
    WHITE = "D65"

    RANGE = (
        GamutBound([Angle(0.0), Angle(360.0)]),
        GamutBound([OptionalPercent(0.0), OptionalPercent(1.0)]),
        GamutBound([OptionalPercent(0.0), OptionalPercent(1.0)])
    )

    @property
    def h(self) -> float:
        """Hue channel."""

        return self._coords[0]

    @h.setter
    def h(self, value: float) -> None:
        """Shift the hue."""

        self._coords[0] = self._handle_input(value)

    @property
    def s(self) -> float:
        """Saturation channel."""

        return self._coords[1]

    @s.setter
    def s(self, value: float) -> None:
        """Saturate or unsaturate the color by the given factor."""

        self._coords[1] = self._handle_input(value)

    @property
    def v(self) -> float:
        """Value channel."""

        return self._coords[2]

    @v.setter
    def v(self, value: float) -> None:
        """Set value channel."""

        self._coords[2] = self._handle_input(value)

    @classmethod
    def null_adjust(cls, coords: MutableVector, alpha: float) -> Tuple[MutableVector, float]:
        """On color update."""

        if coords[1] == 0:
            coords[0] = util.NaN

        return coords, alpha

    @classmethod
    def _to_xyz(cls, parent: 'Color', hsv: Vector) -> MutableVector:
        """To XYZ."""

        return SRGB._to_xyz(parent, cls._to_srgb(parent, hsv))

    @classmethod
    def _from_xyz(cls, parent: 'Color', xyz: Vector) -> MutableVector:
        """From XYZ."""

        return cls._from_srgb(parent, SRGB._from_xyz(parent, xyz))

    @classmethod
    def _to_hsl(cls, parent: 'Color', hsv: Vector) -> MutableVector:
        """To HSL."""

        return hsv_to_hsl(hsv)

    @classmethod
    def _from_hsl(cls, parent: 'Color', hsl: Vector) -> MutableVector:
        """From HSL."""

        return hsl_to_hsv(hsl)

    @classmethod
    def _to_srgb(cls, parent: 'Color', hsv: Vector) -> MutableVector:
        """To sRGB."""

        return HSL._to_srgb(parent, cls._to_hsl(parent, hsv))

    @classmethod
    def _from_srgb(cls, parent: 'Color', rgb: Vector) -> MutableVector:
        """From sRGB."""

        return cls._from_hsl(parent, HSL._from_srgb(parent, rgb))
