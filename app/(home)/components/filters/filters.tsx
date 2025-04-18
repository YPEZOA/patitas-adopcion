import AppText from '@/shared/components/AppText'
import CloseIcon from '@/shared/icons/close-icon'
import { AnimalState } from '@/types/models'
import { Modal, TouchableOpacity, View } from 'react-native'
import { filterStyles as St } from '@/styles/filters.styles'
import { Picker } from '@react-native-picker/picker'
import { comunas, regiones } from '@/shared/constants'
import useFilterStore from '@/store/filter.store'
import colors from '@/shared/colors'

export default function Filters() {
  const isOpenModal = useFilterStore(state => state.isOpenModal)
  const selectRegion = useFilterStore(state => state.selectRegion)
  const selectCommune = useFilterStore(state => state.selectCommune)
  const closeModal = useFilterStore(state => state.closeModal)
  const selectAnimalState = useFilterStore(state => state.selectAnimalState)

  const commune = useFilterStore(state => state.filters.commune)
  const region = useFilterStore(state => state.filters.region)

  const availableCommunes = comunas.filter(
    comuna => comuna.region_id === region
  )

  return (
    <Modal transparent animationType='fade' visible={isOpenModal}>
      <View style={St.wrapper}>
        <View style={St.container}>
          <View style={St.header}>
            <TouchableOpacity onPress={closeModal}>
              <View style={St.wrapperIcon}>
                <CloseIcon />
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ paddingHorizontal: 20 }}>
            <AppText style={{ color: colors.neutral }}>Estado</AppText>
            <View style={St.wrapperStates}>
              <TouchableOpacity
                style={St.stateBtn}
                onPress={() => selectAnimalState(AnimalState.ADOPCION)}
              >
                <AppText>{AnimalState.ADOPCION}</AppText>
              </TouchableOpacity>
              <TouchableOpacity
                style={St.stateBtn}
                onPress={() => selectAnimalState(AnimalState.ENCONTRADO)}
              >
                <AppText>{AnimalState.ENCONTRADO}</AppText>
              </TouchableOpacity>
              <TouchableOpacity
                style={St.stateBtn}
                onPress={() => selectAnimalState(AnimalState.PERDIDO)}
              >
                <AppText>{AnimalState.PERDIDO}</AppText>
              </TouchableOpacity>
            </View>
          </View>
          <View style={St.wrapperPicker}>
            <View>
              <AppText style={{ color: colors.neutral }}>Región</AppText>
              <View
                style={{
                  backgroundColor: colors.primaryLight,
                  borderRadius: 100,
                  paddingHorizontal: 10
                }}
              >
                <Picker
                  placeholder='Selecciona una región'
                  prompt='Selecciona una región'
                  dropdownIconColor={colors.primary}
                  dropdownIconRippleColor={colors.primary}
                  enabled={true}
                  selectedValue={region}
                  onValueChange={itemValue => selectRegion(Number(itemValue))}
                >
                  {regiones.map(region => (
                    <Picker.Item
                      label={region.name}
                      value={region.id}
                      key={region.id}
                    />
                  ))}
                </Picker>
              </View>
            </View>
            <View>
              <AppText style={{ color: colors.neutral }}>Comuna</AppText>
              <View
                style={{
                  backgroundColor: colors.primaryLight,
                  borderRadius: 100,
                  paddingHorizontal: 10
                }}
              >
                <Picker
                  placeholder='Selecciona una comuna'
                  prompt='Selecciona una comuna'
                  dropdownIconColor={colors.primary}
                  enabled={!!availableCommunes.length}
                  selectedValue={commune}
                  onValueChange={itemValue => selectCommune(itemValue)}
                >
                  {availableCommunes.map(comuna => (
                    <Picker.Item
                      label={comuna.name}
                      value={comuna.name}
                      key={comuna.id}
                    />
                  ))}
                </Picker>
              </View>
            </View>
          </View>
          <TouchableOpacity
            style={{
              paddingVertical: 10,
              width: '100%',
              marginTop: 'auto',
              backgroundColor: colors.primary
            }}
          >
            <AppText
              style={{ textAlign: 'center', color: colors.white, fontSize: 16 }}
            >
              Aplicar filtros
            </AppText>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  )
}
