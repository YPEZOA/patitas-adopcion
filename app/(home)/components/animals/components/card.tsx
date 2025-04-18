import { Dimensions, Image, StyleSheet, View } from 'react-native'
import { Animal } from '@/types/models'
import Animated, { FadeInDown } from 'react-native-reanimated'
import AppText from '@/shared/components/AppText'
import FemaleIcon from '@/shared/icons/female'
import LocationIcon from '@/shared/icons/location'
import MaleIcon from '@/shared/icons/male'
import colors from '@/shared/colors'

const { width } = Dimensions.get('screen')

export default function Card({ details }: { details: Readonly<Animal> }) {
  const { nombre, genero, region, comuna, imagen } = details

  return (
    <Animated.View
      entering={FadeInDown.springify().delay(200).damping(15)}
      style={styles.container}
    >
      <Image source={{ uri: imagen }} style={styles.image} resizeMode='cover' />
      <View style={{ padding: 20 }}>
        <View style={styles.header}>
          <AppText style={styles.headerText}>{nombre}</AppText>
          {genero === 'Macho' ? <MaleIcon /> : <FemaleIcon />}
        </View>
        <View style={styles.footerWrapper}>
          <LocationIcon />
          <AppText style={styles.footerText}>
            {comuna}, {region}
          </AppText>
        </View>
      </View>
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  container: {
    boxShadow: '0 3px 10px rgba(0, 0, 0, 0.1)',
    width: width / 1.2,
    marginRight: 15,
    borderRadius: 10,
    overflow: 'hidden'
  },
  image: {
    width: '100%',
    height: '70%',
    borderRadius: 10,
    borderBottomRightRadius: 80
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  headerText: {
    fontSize: 18,
    color: colors.neutralDark,
    fontWeight: 'bold',
    letterSpacing: 0.5
  },
  footerWrapper: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10
  },
  footerText: { color: '#ABA9A9', fontSize: 13 }
})
