import colors from '@/shared/colors'
import AppText from '@/shared/components/AppText'
import CloseIcon from '@/shared/icons/close-icon'
import { Modal, StyleSheet, TouchableOpacity, View } from 'react-native'

export default function Filters() {
  return (
    <Modal transparent animationType='slide' visible={false}>
      <View style={styles.wrapper}>
        <View style={styles.container}>
          <View style={styles.header}>
            <AppText style={{ fontSize: 16 }}>Filtros</AppText>
            <TouchableOpacity>
              <View style={styles.wrapperIcon}>
                <CloseIcon />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  header: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  wrapperIcon: {
    borderRadius: 80,
    padding: 10,
    backgroundColor: colors.neutralLight
  },
  container: {
    marginTop: '100%',
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20
  }
})
