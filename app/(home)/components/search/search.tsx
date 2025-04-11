import { View, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import colors from '@/shared/colors'
import SearchIcon from '@/shared/icons/search-icon'

export default function Search() {
  return (
    <View>
      <TextInput style={styles.input} placeholder='Buscar...' />
      <View style={styles.iconWrapper}>
        <SearchIcon />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    position: 'relative',
    backgroundColor: colors.primaryLight,
    paddingVertical: 15,
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 18
  },
  iconWrapper: {
    height: '100%',
    position: 'absolute',
    right: 0,
    padding: 15,
    borderRadius: 10,
    backgroundColor: colors.primary
  }
})
