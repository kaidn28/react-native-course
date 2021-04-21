import React from 'react'
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import styles from '../../assets/styles'
const Row = (props) => {
    //console.log(props)
    const onDelete =() => {
        props.onDelete(props)
    }
    return (
        <View style={{...styles.row,flexDirection: 'row'}} >
            <View>
                <View style={styles.rowHeader}>
                    <Text style={styles.rowHeaderText}> Assignment {props.index+1} : {props.title} </Text>
                </View>
                <View style={styles.rowContent}>
                    <Text style={styles.rowContentText}> Description: {props.description}</Text>
                </View>

            </View>
            <TouchableOpacity onPress={onDelete} style={styles.trash}>
                <Ionicons 
                    name='trash-outline'
                    size={30}
                />
            </TouchableOpacity>
            
        </View>
    )
    
    
}
  


export default Row