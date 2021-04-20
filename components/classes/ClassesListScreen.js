import React from 'react'
import { Text, View} from 'react-native'
import store from '../../store/store'
import ClassesList from './ClassesList'


function ClassesListScreen(props){

    const getClassDetails = obj => {
        //console.log('id')
        //console.log(obj);
        props.navigation.navigate('TabNav', {screen: 'AssignmentsStackNav', params:{screen: 'Assignments', params: {classKey: obj.keyID, headerName: obj.title}}})
    }
    return (
    <View>
        <ClassesList getClassDetails={getClassDetails}/>
    </View>)

}

export default ClassesListScreen