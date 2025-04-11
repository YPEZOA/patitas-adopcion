import colors from '@/shared/colors'
import { StyleSheet } from 'react-native'

export const categoryStyles = StyleSheet.create({
  headerCategories: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  title: {
    fontSize: 18,
    color: colors.neutralDark
  },
  filterBtn: {
    fontSize: 14,
    color: colors.primary,
    letterSpacing: 0.5
  },
  wrapperBtn: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    borderRadius: 100,
    padding: 6,
    paddingRight: 15
  },
  wrapperIcon: {
    borderRadius: 100,
    padding: 10
  }
})
