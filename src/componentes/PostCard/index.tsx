import { View, Image, Text } from 'react-native';

interface PostCardProps {
    name: string;
    city: string;
    estado: string;
    dataPost: string;
    label: string;
    perfilImage: string;
    image: string;
    likes: number;
    comments: number;
    shares: number;
}

export default function PostCard(props: PostCardProps) {
 return (
   <View>
        <View>
            <Image source={{uri: props.perfilImage}}/>
            <View>
                <Text>{props.name}</Text>
                <Text>{props.city}, {props.estado} • {props.dataPost}</Text>
            </View>
        </View>
        <View></View>
        <View></View>
   </View>
  );
}