import React from "react";
import Svg, { Circle,
  Ellipse,
  G,
  Text,
  TSpan,
  TextPath,
  Path,
  Polygon,
  Polyline,
  Line,
  Rect,
  Use,
  Image,
  Symbol,
  Defs,
  LinearGradient,
  RadialGradient,
  Stop,
  ClipPath,
  Pattern,
  Mask,
} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 19 19"
      {...props}
    >
      <Path
        stroke="#E9515D"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M13.273 2.7c2.454 1.39 4.09 4.09 4.09 7.118 0 4.5-3.681 8.182-8.181 8.182C4.682 18 1 14.318 1 9.818 1 6.791 2.636 4.173 5.09 2.7M9.182 0v5.727"
      ></Path>
    </Svg>
  );
}

export default SvgComponent;
