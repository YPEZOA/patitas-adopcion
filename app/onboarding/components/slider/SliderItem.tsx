import {
  TouchableOpacity,
  View,
  Image,
  Dimensions,
  StyleSheet
} from 'react-native'
import { Link } from 'expo-router'
import { OnboardingItem } from '@/types/models'
import colors from '@/shared/colors'
import AppText from '@/shared/components/AppText'

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
      {title ? <AppText style={styles.title}>{title}</AppText> : null}
      <AppText style={styles.description}>{description}</AppText>

      {action !== '' ? (
        <Link href='/(home)' asChild>
          <TouchableOpacity style={styles.actionButton}>
            <AppText style={styles.actionButtonText}>{action}</AppText>
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
    fontSize: 32,
    fontWeight: 900,
    textAlign: 'center',
    lineHeight: 40
  },
  description: {
    color: colors.neutral,
    fontSize: 16,
    textAlign: 'center'
  },
  actionButton: {
    width: '100%',
    marginTop: 20,
    backgroundColor: colors.primary,
    paddingVertical: 15,
    borderRadius: 100
  },
  actionButtonText: {
    fontSize: 16,
    textAlign: 'center',
    textTransform: 'uppercase',
    color: colors.white
  }
})

export default SliderItem
