import { AntDesign } from '@expo/vector-icons'

import React from 'react'

export default function ArrowLeft({ style, onPress }) {
  return (
    <AntDesign
      name="arrowleft" 
      style={style} 
      size={24}
      onPress={onPress}
    />
  )
}
