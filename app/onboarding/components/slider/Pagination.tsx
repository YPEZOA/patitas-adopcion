import { View, StyleSheet } from 'react-native'
import { OnboardingItem } from '@/types/models'
import colors from '@/shared/colors'

interface PaginatorProps {
  items: OnboardingItem[]
  paginationIndex: number
}
const Paginator = ({ items, paginationIndex }: PaginatorProps) => {
  return (
    <View style={styles.container}>
      {items.map((_, index) => {
        return (
          <View
            key={index}
            style={[
              styles.dot,
              {
                backgroundColor:
                  paginationIndex === index
                    ? colors.primary
                    : colors.primaryLight,
                width: paginationIndex === index ? 25 : 12
              }
            ]}
          />
        )
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flexDirection: 'row',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center'
  },
  dot: {
    height: 12,
    // width: 9,
    marginHorizontal: 4,
    borderRadius: 10
  }
})

export default Paginator
