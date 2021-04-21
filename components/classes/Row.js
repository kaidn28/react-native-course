import React from 'react'
import {Text, StyleSheet, TouchableOpacity, View} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import styles from '../../assets/styles'
const Row = (props) => {
    //console.log(props.picture.thumbnail)
    const navigation = useNavigation();
    const getClassDetails = () => {
        navigation.navigate('TabNav', {classKey:props.keyID, headerName: props.title, nass:props.nass})
    }
    //console.log(props)
    return (
        <TouchableOpacity style={styles.row} onPress={getClassDetails}>
            <View style={styles.rowHeader}>
                <Text style={styles.rowHeaderText}> {props.title} </Text>
            </View>
            <Text> ID: {props.id}</Text>
            <Text> Schedule: {props.schedule.weekday + ' tiết' + props.schedule.time}</Text>
        </TouchableOpacity>
    )    
}



export default Row