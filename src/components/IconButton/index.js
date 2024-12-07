import { StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

const IconButton = ({onPress, icon_name}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Ionicons name={icon_name} size={32} />
    </TouchableOpacity>
  )
}

export default IconButton

const styles = StyleSheet.create({})