import React from 'react'
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
const Row = (props) => {
    //console.log(props)
    const onDelete =() => {
        props.onDelete(props)
    }
    return (
        <View style={styles.row} >
            <View>
                <Text> Assignment {props.index+1} : {props.title} </Text>
                <Text> Description: {props.description}</Text>
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
const styles = StyleSheet.create({
    row: {
        flex:1,
        flexDirection: 'row',
        marginTop: 5,
        marginLeft: 5
    },
    trash: {
        marginRight: 10,
        marginLeft: 'auto',
        marginTop: 10
    }
})


export default Row