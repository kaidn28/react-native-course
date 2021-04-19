import React from 'react'
import {Text, StyleSheet, TouchableOpacity} from 'react-native'

const Row = (props) => {
    //console.log(props.picture.thumbnail)
    const getClassDetails = () => {
        props.getClassDetails(props);
    }
    return (
        <TouchableOpacity style={styles.row} onPress={getClassDetails}>
            <Text> Subject: {props.title} </Text>
            <Text> ID: {props.id}</Text>
            <Text> Schedule: {props.schedule.weekday + ' tiết' + props.schedule.time}</Text>
        </TouchableOpacity>
    )
    
    
}
const styles = StyleSheet.create({
    row: {
        marginTop: 5,
        marginLeft: 5
    },
})


export default Row