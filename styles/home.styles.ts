import { StyleSheet } from 'react-native'
import colors from '../shared/colors'

export const homeStyles = StyleSheet.create({
  bannerWrap: {
    overflow: 'hidden',
    position: 'relative',
    height: 'auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    gap: 10,
    marginTop: 20,
    borderRadius: 8,
    padding: 20,
    backgroundColor: colors.primary
  },
  bannerText: {
    lineHeight: 20,
    letterSpacing: -0.2,
    zIndex: 20,
    width: '60%',
    color: colors.white,
    fontSize: 18
  },
  bannerBtn: {
    zIndex: 10,
    backgroundColor: colors.white,
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 10
  },
  btnText: {
    color: colors.primary,
    fontWeight: 600
  },
  bannerImg: {
    position: 'absolute',
    bottom: -1,
    height: 150,
    right: 0,
    objectFit: 'contain'
  }
})
