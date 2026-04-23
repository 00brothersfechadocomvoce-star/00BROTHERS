import { View } from "react-native";
import Cabecalho from "./../componentes/Cabecalho/index";

export default function Index() {
  return (
    <View className="flex-1 bg-slate-50">
      <Cabecalho label="00BROTHERS" icon="arrow-back" onPress={() => (
        console.log("Home")
      )} />
    </View>
  );
}
