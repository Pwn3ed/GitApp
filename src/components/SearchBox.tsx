import { View, Text, TextInput, Pressable } from 'react-native'
import React, { useState } from 'react'

type Props = {
  onSearch: Function
}

const SearchBox = ({ onSearch }: Props) => {

    const [username, setUsername] = useState<string>("")

  return (
    <View className="flex flex-row items-center space-x-4 mx-auto mt-5">
        
        <TextInput className='border rounded border-gray-100 p-2 w-2/3 text-gray-100 focus:border-2 focus:border-purple-400'
        placeholder='Github username'
        onChangeText={ (text: string) => setUsername(text)}
        placeholderTextColor='#ffffff'
        />

        <Pressable className="bg-purple-700 px-4 py-2 rounded" onPress={ () => onSearch(username) }>
          <Text className="text-gray-50">Search</Text>
        </Pressable>

    </View>
  )
}

export default SearchBox