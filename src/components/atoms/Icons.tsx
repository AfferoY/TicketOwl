import {
  Feather,
  Ionicons,
  MaterialCommunityIcons,
  Entypo,
  MaterialIcons,
  FontAwesome,
} from "@expo/vector-icons";
import { Image, TouchableOpacity } from "react-native";
import responsiveSize from "../../utils/responsiveSize";

export type IconProps = {
  type:
    | "material"
    | "ionicons"
    | "feather"
    | "entypo"
    | "materialIcons"
    | "fontAwesome";
  name: string;
  size?: number;
  color?: string;
  onPress?: () => void;
  hitSlop?: {
    top?: number;
    bottom?: number;
    left?: number;
    right?: number;
  };
};

const Icons: React.FC<IconProps> = ({
  type = "material",
  name,
  size = responsiveSize(20),
  color = "black",
  onPress,
  hitSlop,
}) => {
  let IconComponent: any;
  if (type === "material") IconComponent = MaterialCommunityIcons;
  else if (type === "ionicons") IconComponent = Ionicons;
  else if (type === "feather") IconComponent = Feather;
  else if (type === "entypo") IconComponent = Entypo;
  else if (type === "materialIcons") IconComponent = MaterialIcons;
  else if (type === "fontAwesome") IconComponent = FontAwesome;
  else return null;

  return (
    <TouchableOpacity
      onPress={onPress ? onPress : undefined}
      disabled={!onPress}
      hitSlop={hitSlop}
    >
      <IconComponent name={name} size={responsiveSize(size)} color={color} />
    </TouchableOpacity>
  );
};

export default Icons;

export const IconsPic = ({
  source,
  size,
  onPress,
}: {
  source: any;
  size: number;
  onPress?: () => void;
}) => {
  return (
    <TouchableOpacity
      onPress={onPress ? onPress : undefined}
      disabled={!onPress}
    >
      <Image
        source={source}
        style={{
          width: responsiveSize(size),
          height: responsiveSize(size),
          resizeMode: "contain",
        }}
      />
    </TouchableOpacity>
  );
};
