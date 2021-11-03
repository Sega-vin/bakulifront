import * as React from "react"
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
      width={27}
      height={31}
      viewBox="0 0 27 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        clipRule="evenodd"
        d="M25.072 24.602c0-.592-.288-1.146-.772-1.486a18.781 18.781 0 00-11.004-3 18.781 18.781 0 00-11.003 3c-.485.34-.773.894-.772 1.486v4.572h23.55v-4.572z"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Circle
        cx={13.296}
        cy={8.341}
        r={6.341}
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default SvgComponent
