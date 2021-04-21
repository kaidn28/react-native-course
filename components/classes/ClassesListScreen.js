import React from 'react'
import { Text, View} from 'react-native'
import styles from '../../assets/styles'
import store from '../../store/store'
import ClassesList from './ClassesList'


function ClassesListScreen(){

    return (
    <View style={styles.container}>
        <ClassesList/>
    </View>)

}

export default ClassesListScreen