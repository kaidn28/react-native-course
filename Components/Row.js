import axios from 'axios'
import React from 'react'
import {Text, View, TouchableOpacity, Image } from 'react-native'
const Row = (props) => {
    //console.log(props.Poster)

    return (
        <TouchableOpacity onPress={() => {
            props.seeDetails(props)}} style={{margin: 10, padding: 10}}>
        <Text> Movie: {props.Title} </Text>
        <Text> Year: {props.Year} </Text>
        <Image style={{width: 300, height: 300}}
        source={{uri:props.Poster}} />
        </TouchableOpacity>
    )
}



export default Row