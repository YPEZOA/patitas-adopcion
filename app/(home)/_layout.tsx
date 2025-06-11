import { View } from 'react-native'
import { Stack } from 'expo-router'
import colors from '@/shared/colors'

export default function HomeLayout() {
  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 15,
        backgroundColor: colors.white,
        paddingVertical: 20
      }}
    >
      <Stack
        screenOptions={{
          headerShown: false
        }}
      />
    </View>
  )
}
