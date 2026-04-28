//Componentes
import { View } from "react-native";
import Cabecalho from "./../componentes/cabecalho";
import Sidebar from "../componentes/Sidebar";
import FeedSocial from "./FeedSocial";
import Noticias from "./Noticias";

//Configurações
import { useState } from "react";
import { Secoes } from "../consts/Secoes";

export default function Index() {

  const [secaoAtiva, setSecaoAtiva] = useState<string>(Secoes[0]?.label);

  const renderizarConteudo = () => {
    switch (secaoAtiva){
      case "Notícias":
        return <Noticias />
      default:
        return <FeedSocial />
    }
  }

  return (
    <View className="flex-1">
      <Cabecalho 
        label="00BROTHERS" 
        icon="home" 
        onPress={() => (console.log("Home"))} 
      />
      <View className="flex-1 flex-row">
        
        <Sidebar 
          secaoAtiva={secaoAtiva} 
          onSelecionarSecao={setSecaoAtiva} 
        />

        <View className="flex-1 bg-slate-50">
          {renderizarConteudo()}
        </View>

      </View>
    </View>
  );
}
