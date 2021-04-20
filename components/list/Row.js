import { useNavigation } from '@react-navigation/core'
import React from 'react'
import {Text, Image, View, StyleSheet, TouchableOpacity} from 'react-native'

const Row = (props) => {
    const fullname = props.name.first + ' ' + props.name.last 
    //console.log(props.picture.thumbnail)
    const navigation = useNavigation();
    const getStudentDetails = ()=> {
        navigation.navigate('Details', {...props})
    }
    return (
        <TouchableOpacity style={styles.row} onPress={getStudentDetails}>
            <Image source={{uri:props.picture.medium}} 
            style={{width: 60, height: 60}}
            />
            <View>
                <Text> Name: {fullname} </Text>
                <Text> ID: {props.id.name + props.id.value}</Text>
                <Text> Average Score: {props.mean_score}</Text>
            </View>

            
        </TouchableOpacity>
    )
    
    
}
const styles = StyleSheet.create({
    row: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 5,
        marginLeft: 5
    },
    image: {
    }
})


export default Row