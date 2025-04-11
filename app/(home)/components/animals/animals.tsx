import AppText from '@/shared/components/AppText'
import { FlatList, View } from 'react-native'
import { animalsStyles as St } from '@/styles/animals.styles'
import Card from './components/card'

const animals = [
  {
    nombre: 'Elvis',
    edad: 4,
    genero: 'Hembra',
    estado: 'adopcion',
    desc_fisica: 'Lorem ipsum dolor etc...',
    desc_adicional: 'Lorem ipsum dolor etc...',
    desc_comportamiento: 'Lorem ipsum dolor etc...',
    esterilizado: 1,
    vacunas: 1,
    imagen:
      'https://huachitos.cl/storage/animal-images/cristopher-cristopher-1718989744.png',
    region: 'Valparaiso',
    comuna: 'Valparaiso',
    url: 'https://huachitos.cl'
  },
  {
    nombre: 'Elvis',
    edad: 4,
    genero: 'Macho',
    estado: 'adopcion',
    desc_fisica: 'Lorem ipsum dolor etc...',
    desc_adicional: 'Lorem ipsum dolor etc...',
    desc_comportamiento: 'Lorem ipsum dolor etc...',
    esterilizado: 1,
    vacunas: 1,
    imagen:
      'https://huachitos.cl/storage/animal-images/cristopher-cristopher-1718989744.png',
    region: 'Valparaiso',
    comuna: 'Valparaiso',
    url: 'https://huachitos.cl'
  },
  {
    nombre: 'Elvis',
    edad: 4,
    genero: 'Hembra',
    estado: 'adopcion',
    desc_fisica: 'Lorem ipsum dolor etc...',
    desc_adicional: 'Lorem ipsum dolor etc...',
    desc_comportamiento: 'Lorem ipsum dolor etc...',
    esterilizado: 1,
    vacunas: 1,
    imagen:
      'https://huachitos.cl/storage/animal-images/cristopher-cristopher-1718989744.png',
    region: 'Valparaiso',
    comuna: 'Valparaiso',
    url: 'https://huachitos.cl'
  },
  {
    nombre: 'Elvis',
    edad: 4,
    genero: 'Macho',
    estado: 'adopcion',
    desc_fisica: 'Lorem ipsum dolor etc...',
    desc_adicional: 'Lorem ipsum dolor etc...',
    desc_comportamiento: 'Lorem ipsum dolor etc...',
    esterilizado: 1,
    vacunas: 1,
    imagen:
      'https://huachitos.cl/storage/animal-images/cristopher-cristopher-1718989744.png',
    region: 'Valparaiso',
    comuna: 'Valparaiso',
    url: 'https://huachitos.cl'
  }
]

export default function Animals() {
  return (
    <View style={St.container}>
      <AppText style={St.title}>Adoptar</AppText>
      <FlatList
        style={{ marginTop: 15, paddingBottom: 10, paddingHorizontal: 5 }}
        data={animals}
        showsHorizontalScrollIndicator={false}
        horizontal
        renderItem={({ item }) => <Card details={item} />}
      />
    </View>
  )
}
