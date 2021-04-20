import React from 'react'
import {Text, StyleSheet, TouchableOpacity, View} from 'react-native'
import {useNavigation} from '@react-navigation/native'
const Row = (props) => {
    //console.log(props.picture.thumbnail)
    const navigation = useNavigation();
    const getClassDetails = () => {
        navigation.navigate('TabNav', {classKey:props.keyID, headerName: props.title, nass:props.nass})
    }
    //console.log(props)
    return (
        <TouchableOpacity style={styles.row} onPress={getClassDetails}>
            <View style={styles.header}>
                <Text style={{fontSize: 17, fontStyle: 'italic'}}> Subject: {props.title} </Text>
            </View>
            <Text> ID: {props.id}</Text>
            <Text> Schedule: {props.schedule.weekday + ' tiết' + props.schedule.time}</Text>
        </TouchableOpacity>
    )
    
    
}
const styles = StyleSheet.create({
    row: {
        margin: 10,
        marginTop: 5,
        borderWidth: 1,
        padding:10,
    },
    header:{
        borderBottomWidth: 1,
        borderBottomColor: 'grey'
    }
})


export default Row