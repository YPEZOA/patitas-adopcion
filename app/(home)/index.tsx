import { Image, TouchableOpacity, View } from 'react-native'
import Search from './components/search/search'
import Categories from './components/categories/categories'
import { homeStyles as St } from '../../styles/home.styles'
import Animals from './components/animals/animals'
import AppText from '@/shared/components/AppText'
import BannerCircles from '@/shared/icons/banner-circles'
import colors from '@/shared/colors'
import Filters from './components/filters/filters'

export default function Home() {
  return (
    <View style={{ flex: 1, backgroundColor: colors.white }}>
      <Filters />
      <Search />
      <View style={St.bannerWrap}>
        <BannerCircles style={{ position: 'absolute', top: -25, left: 40 }} />
        <AppText style={St.bannerText}>
          Regístrate en la Comunidad y adopta de forma responsable
        </AppText>
        <TouchableOpacity style={St.bannerBtn}>
          <AppText style={St.btnText}>Únete ahora</AppText>
        </TouchableOpacity>
        <Image
          style={St.bannerImg}
          source={require('../../assets/images/banner-img.png')}
        />
      </View>
      <Categories />
      <Animals />
    </View>
  )
}
