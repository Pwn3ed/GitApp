import { View, Text, Image} from "react-native"

type Props = {
    src: string
    username: string
    bio: string
}

const User = ( { src, username, bio }: Props) => {
    return (
        <View className="flex flex-row item-center space-x-3 mt-5 mx-auto w-11/12">
            <Image className="w-20 h-20 rounded-full" source={{ uri:src }}/>
            <View>
                <Text className="text-lg text-gray-200 font-semibold">{ username }</Text>
                <Text className="text-gray-200">{bio}</Text>
            </View>
        </View>
    )
}

export default User