import { useState } from 'react'
import { FlatList, TouchableOpacity, View } from 'react-native'
import { categoryStyles as St } from '@/styles/categories.styles'
import Animated, { FadeInDown } from 'react-native-reanimated'
import AppText from '@/shared/components/AppText'
import colors from '@/shared/colors'
import DogIcon from '@/shared/icons/dog'
import CatIcon from '@/shared/icons/cat'
import RabbitIcon from '@/shared/icons/rabbit'
import RodentIcon from '@/shared/icons/rodent'
import BirdIcon from '@/shared/icons/bird'
import ExoticIcon from '@/shared/icons/exotic'
import useFilterStore from '@/store/filter.store'

export const categories = [
  { backColor: '#74A6BE', name: 'Perro', icon: <DogIcon /> },
  { backColor: '#CC7361', name: 'Gato', icon: <CatIcon /> },
  { backColor: '#2A6D8D', name: 'Conejo', icon: <RabbitIcon /> },
  { backColor: '#E3A2A3', name: 'Roedor', icon: <RodentIcon /> },
  { backColor: '#A2E3B1', name: 'Ave', icon: <BirdIcon /> },
  { backColor: '#B0A2E3', name: 'Exótico', icon: <ExoticIcon /> }
]

const CategoryItem = ({ item, selectedItem, setSelectedItem }: any) => {
  const handleSelectedItem = (name: string) => {
    if (selectedItem === name) {
      return
    }
    setSelectedItem(name)
  }

  return (
    <Animated.View
      entering={FadeInDown.duration(400).springify().delay(100).damping(12)}
      style={{ paddingHorizontal: 5 }}
    >
      <TouchableOpacity
        style={[
          St.wrapperBtn,
          {
            backgroundColor:
              selectedItem === item.name ? colors.primary : colors.primaryLight
          }
        ]}
        onPress={() => handleSelectedItem(item.name)}
      >
        <View style={[St.wrapperIcon, { backgroundColor: item.backColor }]}>
          {item.icon}
        </View>
        <AppText
          style={{
            color:
              selectedItem === item.name ? colors.white : colors.neutralDark
          }}
        >
          {item.name}
        </AppText>
      </TouchableOpacity>
    </Animated.View>
  )
}

export default function Categories() {
  const openModal = useFilterStore(state => state.openModal)
  const [selectedItem, setSelectedItem] = useState('')

  return (
    <View style={{ marginTop: 20 }}>
      <View style={St.headerCategories}>
        <AppText style={St.title}>Categorías</AppText>
        <TouchableOpacity onPress={openModal}>
          <AppText style={St.filterBtn}>Más filtros</AppText>
        </TouchableOpacity>
      </View>
      <FlatList
        style={{ marginTop: 15, paddingBlock: 15 }}
        data={categories}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <CategoryItem
            item={item}
            selectedItem={selectedItem}
            setSelectedItem={setSelectedItem}
          />
        )}
      />
    </View>
  )
}
