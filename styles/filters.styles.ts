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
    padding: 5,
    paddingHorizontal: 20,
    borderRadius: 80,
    backgroundColor: colors.primaryLight
  },
  wrapperPicker: {
    gap: 20,
    paddingHorizontal: 20,
    marginTop: 20,
    paddingBottom: 60
  }
})
