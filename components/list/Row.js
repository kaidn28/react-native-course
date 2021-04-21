import { useNavigation } from '@react-navigation/core'
import React from 'react'
import {Text, Image, View, TouchableOpacity} from 'react-native'
import styles from '../../assets/styles'
const Row = (props) => {
    const fullname = props.name.first + ' ' + props.name.last 
    //console.log(props.picture.thumbnail)
    const navigation = useNavigation();
    const getStudentDetails = ()=> {
        navigation.navigate('Details', {...props})
    }
    return (
        <TouchableOpacity style={styles.studentRow} onPress={getStudentDetails}>
            <Image source={{uri:props.picture.medium}} 
            style={styles.image}
            />
            <View style={styles.rowContent}>
                <View style={styles.rowHeader}>
                    <Text> Information:</Text>
                </View>

                <Text> Name: {fullname} </Text>
                <Text> ID: {props.id.name + props.id.value}</Text>
                <Text> Average Score: {props.mean_score}</Text>
            </View>

            
        </TouchableOpacity>
    )
    
    
}

export default Row