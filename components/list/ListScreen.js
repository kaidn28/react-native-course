import React from 'react'
import { Text, View} from 'react-native'
import store from '../../store/store'
import List from './List'
const ListScreen = (props) =>{
    //console.log(props)
    return (
    <View>
        <List nass={props.nass}/>
    </View>)

}

export default ListScreen