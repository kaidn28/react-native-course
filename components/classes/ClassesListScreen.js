import React from 'react'
import { Text, View} from 'react-native'
import store from '../../store/store'
import ClassesList from './ClassesList'


function ClassesListScreen(props){
    const getClassDetails = obj => {
        console.log(obj.keyID);
        props.navigation.navigate('TabNav', {screen: 'Assignments', params:{classKey: obj.keyID} })
    }
    return (
    <View>
        <ClassesList getClassDetails={getClassDetails}/>
    </View>)

}

export default ClassesListScreen