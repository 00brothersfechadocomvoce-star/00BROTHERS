import { View } from "react-native";
import Cabecalho from "./../componentes/Cabecalho/index";
import Sidebar from "../componentes/Sidebar";

export default function Index() {
  return (
    <View className="flex-1">
      <Cabecalho label="00BROTHERS" icon="home" onPress={() => (
        console.log("Home")
      )} />
      <Sidebar />
    </View>
  );
}
