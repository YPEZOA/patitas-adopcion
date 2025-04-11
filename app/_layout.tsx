import { Stack } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'

const Layout = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack
        screenOptions={{
          headerShown: false,
          statusBarStyle: 'dark'
        }}
      />
    </SafeAreaView>
  )
}

export default Layout
