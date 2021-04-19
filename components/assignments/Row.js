import React from 'react'
import {Text, StyleSheet, View} from 'react-native'

const Row = (props) => {
    //console.log(props.picture.thumbnail)
    return (
        <View style={styles.row}>
            <Text> {props.title} </Text>
            <Text> Description: {props.description}</Text>
        </View>
    )
    
    
}
const styles = StyleSheet.create({
    row: {
        marginTop: 5,
        marginLeft: 5
    },
})


export default Row