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
import { AppTextBold } from "../../src/components/ui/AppTextBold";

function Icon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="35"
      fill="none"
      viewBox="0 0 28 35"
      style={{...props.style}}
      onPress={props.onPress}
    >
      <Path
        fill="#E9515D"
        d="M24 25.805v-4.792h-2.967l-7.025-6.49A2.133 2.133 0 0012 11.682a2.133 2.133 0 00-2.008 2.841l-7.025 6.49H0v4.792h.839l2.915 8.513h16.492l2.915-8.513H24zm-8.097 2.549h-3.062v-2.526h3.311l-.249 2.526zm-4.744 4.282h-2.64l-.256-2.6h2.896v2.6zm-3.062-4.282l-.25-2.526h3.312v2.526H8.097zm4.351-14.541a.446.446 0 01-.448.448.446.446 0 11.304-.777.446.446 0 01.144.329zm-1.314 1.945a2.116 2.116 0 001.732 0l5.688 5.255H5.447l5.687-5.255zm-9.452 6.938h20.636v1.427H1.682v-1.427zm4.475 3.132l.25 2.526H3.49l-.865-2.526h3.532zm-1.2 6.808l-.891-2.6h2.506l.257 2.6H4.956zm7.884-2.6h2.896l-.257 2.6h-2.639v-2.6zm6.203 2.6h-1.873l.256-2.6h2.507l-.89 2.6zm1.466-4.282h-2.916l.249-2.526h3.532l-.865 2.526z"
      ></Path>
      <Circle cx="20" cy="14" r="7.5" fill="#E9515D" stroke="#fff"></Circle>
      <Text
        xmlns="http://www.w3.org/2000/svg"
        x="17"
        y="17"
        fontWeight="bold"
        fill="#fff"
        style={{...props.text}}
        fontSize="10"
      >
        {props.count}
      </Text>
    </Svg>
  );
}

export default Icon;
