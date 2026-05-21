import { View, Text, ScrollView, FlatList } from 'react-native';
import BotaoAcao from '../componentes/botao/acao';
import PostCard from '../componentes/PostCard';

export default function FeedSocial() {
  return (
    <FlatList className='flex-1 py-4 px-16'
      data={[
        {id: '1', name: 'João Silva', city: 'São Paulo', estado: 'SP', dataPost: '2h atrás', label: 'Adorei esse lugar!', perfilImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQSfq738ST00YoDjwk65X2hiKGBW4UUVc9pw&s', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQSfq738ST00YoDjwk65X2hiKGBW4UUVc9pw&s', likes: 120, comments: 30, shares: 10},
      ]}
      keyExtractor={(item) => item.toString()}
      ListHeaderComponent={() => (
        <>
        <View className='flex-row'>
          <View className='h-32 flex-1 bg-zinc-100 m-2 rounded-2xl border border-slate-300'></View>
          <View className='h-32 flex-1 bg-zinc-100 m-2 rounded-2xl border border-slate-300'></View>
          <View className='h-32 flex-1 bg-zinc-100 m-2 rounded-2xl border border-slate-300'></View>
        </View>
          <View className='w-full bg-zinc-100 my-2 rounded-2xl border border-slate-300'>
            <BotaoAcao label="No que você está pensando?" />
          </View>
        </>
      )}
      renderItem={({ item }) => (<PostCard {...item} />)}
    />
  );
}