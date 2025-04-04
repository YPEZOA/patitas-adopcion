import React from 'react'
import { View } from 'react-native'
import { Stack } from 'expo-router'
import colors from '@/UI/colors'
import Slider from '@/components/Slider/Slider'
import { dataSlider } from '@/assets/constants/dataSlider'

const Onboarding = () => {
  return (
    <>
      <Stack.Screen
        options={{
          headerShown: false,
          statusBarStyle: 'dark'
        }}
      />
      <View style={{ flex: 1 }}>
        <Slider items={dataSlider} />
      </View>
    </>
  )
}

export default Onboarding
