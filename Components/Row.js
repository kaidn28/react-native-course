import React from 'react'
import {Text, View } from 'react-native'

const row = (props)=>{
    return <Text> {props.name}      {props.year}       {props.rated} </Text>
}

export default row