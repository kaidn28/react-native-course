import React from 'react'
import {Text, View } from 'react-native'

const Row = (props) => 
    <View>
        <Text> {props.title}        {props.year}        {props.rated}</Text>

    </View>


export default Row