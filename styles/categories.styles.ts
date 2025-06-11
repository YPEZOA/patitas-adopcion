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
    fontSize: 18,
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
    paddingRight: 15,
    borderWidth: 2,
    borderColor: 'hsla(0,0%,100%,.9)',
    boxShadow: `
    0 0 0 1px ${colors.primary},
    0  1px 2px 0 rgba(234,74,106,0.32),
    0 6px 8px 0 rgba(234,74,106,0.32)`
  },
  wrapperIcon: {
    borderRadius: 100,
    padding: 3
  }
})
