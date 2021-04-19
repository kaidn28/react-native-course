import React from 'react'
import {Text, Image, View, StyleSheet, TouchableOpacity} from 'react-native'

const Row = (props) => {
    fullname = props.name.first + ' ' + props.name.last 
    //console.log(props.picture.thumbnail)
    return (
        <TouchableOpacity style={styles.row}>
            <Image source={{uri:props.picture.medium}} 
            style={{width: 60, height: 60}}
            />
            <View>
                <Text> Name: {fullname} </Text>
                <Text> Gender: {props.gender}</Text>
                <Text> DOB: {props.dob.date.substring(0,10)}</Text>
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