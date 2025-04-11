import { useState } from 'react'
import { FlatList, TouchableOpacity, View } from 'react-native'
import { categories } from '@/shared/constants'
import { categoryStyles as St } from '@/styles/categories.styles'
import AppText from '@/shared/components/AppText'
import colors from '@/shared/colors'

const CategoryItem = ({ item, selectedItem, setSelectedItem }: any) => {
  const handleSelectedItem = (name: string) => {
    if (selectedItem === name) {
      return
    }
    setSelectedItem(name)
  }

  return (
    <View style={{ marginRight: 10 }}>
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
    </View>
  )
}

export default function Categories() {
  const [selectedItem, setSelectedItem] = useState('')

  return (
    <View style={{ marginTop: 20 }}>
      <View style={St.headerCategories}>
        <AppText style={St.title}>Categorías</AppText>
        <TouchableOpacity>
          <AppText style={St.filterBtn}>Más filtros</AppText>
        </TouchableOpacity>
      </View>
      <FlatList
        style={{ marginTop: 15 }}
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
