import axios from 'axios'
import React from 'react'
import {Text, View, TouchableOpacity, Image } from 'react-native'
const Row = (props) => {
    //console.log(props.Poster)
    seeDetails = () => {
        this.props.navigation.navigate('MovieDetails');
    }
    return (
        <TouchableOpacity onPress={() => props.onSelectMovie(props)}>
        <Text> Movie: {props.Title} </Text>
        <Text> Year: {props.Year} </Text>
        <Image style={{width: 300, height: 300}}
        source={{uri:props.Poster}} />
        </TouchableOpacity>
    )
}



export default Row