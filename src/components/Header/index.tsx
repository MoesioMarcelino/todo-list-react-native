import { Image, StatusBar, Text, View } from "react-native";
import { styles } from "./styles";

export function Header() {
  return (
    <View style={styles.container}>
      <StatusBar translucent />
      <Image source={require("./logo.png")} />
    </View>
  );
}
