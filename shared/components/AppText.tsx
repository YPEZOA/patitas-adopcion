import React from 'react'
import { Text, TextProps, TextStyle } from 'react-native'
import { Poppins_500Medium, useFonts } from '@expo-google-fonts/poppins'

interface Props extends TextProps {
  style?: TextStyle | TextStyle[]
  children: React.ReactNode
}

const AppText = ({ style, children, ...rest }: Props) => {
  const [fontLoaded] = useFonts({
    Poppins_500Medium
  })

  if (!fontLoaded) {
    return null
  }

  return (
    <Text style={[{ fontFamily: 'Poppins_500Medium' }, style]} {...rest}>
      {children}
    </Text>
  )
}

export default AppText
