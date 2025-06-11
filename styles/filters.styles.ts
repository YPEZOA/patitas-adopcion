import colors from '@/shared/colors'
import { StyleSheet } from 'react-native'

export const filterStyles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  header: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  wrapperIcon: {
    borderRadius: 80,
    padding: 10,
    backgroundColor: colors.neutralLight
  },
  container: {
    marginTop: 'auto',
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20
  },
  wrapperStates: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  stateBtn: {
    position: 'relative',
    overflow: 'hidden',
    paddingHorizontal: 20,
    paddingBlock: 6,
    borderRadius: 80,
    backgroundColor: colors.primaryLight,
    shadowColor: colors.primary,
    shadowOffset: {
      width: 0,
      height: -1
    },
    shadowOpacity: 0.25,
    shadowRadius: 3,
    elevation: 2,
    borderWidth: 2,
    borderColor: 'hsla(0,0%,100%,.9)',
    boxShadow: `
    0 0 0 1px ${colors.primary},
    0  1px 2px 0 rgba(234,74,106,0.32),
    0 6px 16px 0 rgba(234,74,106,0.32)`
  },
  wrapperPicker: {
    gap: 20,
    paddingHorizontal: 20,
    marginTop: 20,
    paddingBottom: 60
  }
})
