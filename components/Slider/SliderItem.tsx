import { TouchableOpacity, View, Text, Image, Dimensions, StyleSheet } from 'react-native'
import { Link } from 'expo-router'
import { OnboardingItem } from '@/types/models'
import colors from '@/UI/colors'

interface Props {
  item: OnboardingItem
  index: number
}
const { width } = Dimensions.get('screen')

const SliderItem = ({ item, index }: Props) => {
  const { image, title, description, action } = item
  return (
    <View style={styles.itemContainer}>
      <Image source={image} style={styles.image} />
      {title ? <Text style={styles.title}>{title}</Text> : null}
      <Text style={styles.description}>{description}</Text>

      {action !== '' ? (
        <Link href='/home' asChild>
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.actionButtonText}>{action}</Text>
          </TouchableOpacity>
        </Link>
      ) : null}
    </View>
  )
}

const styles = StyleSheet.create({
  itemContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 12,
    width: width,
    paddingHorizontal: 30
  },
  image: {
    width: '100%',
    height: 350,
    resizeMode: 'contain'
  },
  title: {
    color: colors.primary,
    fontSize: 30,
    fontWeight: 700,
    textAlign: 'center'
  },
  description: {
    color: colors.neutral,
    fontSize: 20,
    textAlign: 'center'
  },

  actionButton: {
    width: '100%',
    marginTop: 20,
    backgroundColor: colors.primary,
    paddingBlock: 20,
    paddingHorizontal: 100,
    borderRadius: 100
  },
  actionButtonText: {
    textAlign: 'center',
    textTransform: 'uppercase',
    color: colors.white,
    fontWeight: 'bold'
  }
})

export default SliderItem
