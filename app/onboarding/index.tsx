import { View } from 'react-native'
import { Stack } from 'expo-router'
import { dataSlider } from '@/assets/constants/dataSlider'
import Slider from './components/slider/Slider'
import colors from '@/shared/colors'

const Onboarding = () => {
  return (
    <>
      <Stack.Screen
        options={{
          headerShown: false,
          statusBarStyle: 'light',
          statusBarBackgroundColor: colors.primary
        }}
      />
      <View style={{ flex: 1 }}>
        <Slider items={dataSlider} />
      </View>
    </>
  )
}

export default Onboarding
