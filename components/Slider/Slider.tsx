import React, { useRef, useState } from 'react'
import { FlatList, ViewToken } from 'react-native'
import SliderItem from './SliderItem'
import Paginator from './Pagination'
import { OnboardingItem } from '@/types/models'

interface SliderProps {
  items: OnboardingItem[]
}
const Slider = ({ items }: SliderProps) => {
  const [paginationIndex, setPaginationIndex] = useState(0)

  const onViewableItemsChanged = ({ viewableItems }: { viewableItems: ViewToken[] }) => {
    const viewableIndex = viewableItems[0].index
    if (viewableIndex != null) {
      setPaginationIndex(viewableIndex)
    }
  }

  const viewabilityConfig = {
    itemVisiblePercentThreshold: 50
  }

  const viewabilityConfigCallbackPairs = useRef([{ viewabilityConfig, onViewableItemsChanged }])

  return (
    <>
      <FlatList
        style={{ backgroundColor: 'white' }}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        data={items}
        renderItem={({ item, index }) => <SliderItem item={item} index={index} />}
        viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
      />
      <Paginator items={items} paginationIndex={paginationIndex} />
    </>
  )
}

export default Slider
