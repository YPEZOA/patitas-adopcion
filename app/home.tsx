import colors from '@/UI/colors'
import { Stack, useNavigation } from 'expo-router'
import { View, Text, Pressable } from 'react-native'

const Home = () => {
  const navigation = useNavigation()

  return (
    <View style={{ flex: 1 }}>
      <Stack.Screen
        options={{
          statusBarStyle: 'light',
          statusBarBackgroundColor: colors.primary
        }}
      />
      <Pressable onPress={() => navigation.goBack()}>
        <Text>Volver</Text>
      </Pressable>
    </View>
  )
}

export default Home
