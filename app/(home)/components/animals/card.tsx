import { Dimensions, Image, StyleSheet, View } from 'react-native'
import { Animal } from '@/types/models'
import Animated, { FadeInDown } from 'react-native-reanimated'
import AppText from '@/shared/components/AppText'
import colors from '@/shared/colors'
import Ionicons from '@expo/vector-icons/Ionicons'

const { width } = Dimensions.get('screen')

export default function Card({ details }: { details: Animal }) {
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
          {genero === 'Macho' ? (
            <Ionicons color='skyblue' size={30} name='male' />
          ) : (
            <Ionicons
              name='female'
              size={30}
              color={colors.primary}
              style={{ transform: [{ rotate: '40deg' }] }}
            />
          )}
        </View>
        <View style={styles.footerWrapper}>
          <Ionicons name='location-outline' size={25} color={colors.primary} />
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
    borderBottomRightRadius: 50
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  headerText: {
    fontSize: 18,
    color: colors.neutralDark,
    fontWeight: 'bold'
  },
  footerWrapper: {
    display: 'flex',
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: 2
  },
  footerText: { color: colors.neutral }
})
