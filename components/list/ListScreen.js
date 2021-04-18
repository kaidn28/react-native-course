import React from 'react'
import { Text, View} from 'react-native'
import Store from '../../store/store'

function ListScreen(){
    return <Text> {store.getState().value} </Text>
}

export default ListScreen