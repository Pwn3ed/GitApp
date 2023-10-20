import { View, Text } from 'react-native'
import React from 'react'

type Props = {
    bio:string
}

const Bio = ({bio}: Props) => {
  return (
    <View className="flex mx-auto">
      <Text className="text-gray-200">{bio}</Text>
    </View>
  )
}

export default Bio