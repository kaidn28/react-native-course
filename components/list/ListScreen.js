import React from 'react'
import { Text, View} from 'react-native'
import styles from '../../assets/styles'
import store from '../../store/store'
import List from './List'
const ListScreen = (props) =>{
    //console.log(props)
    return (
    <View style={styles.container}>
        <List nass={props.nass}/>
    </View>)

}

export default ListScreen