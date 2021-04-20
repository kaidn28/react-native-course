import React from 'react'
import { createStackNavigator, HeaderBackButton, Button } from '@react-navigation/stack';
import AddScreen from '../components/add/AddScreen';
import AssignmentsScreen from '../components/assignments/AssignmentsScreen'
import ClassesListScreen from '../components/classes/ClassesListScreen'
import {TouchableOpacity} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
const AssignmentsStackNav = createStackNavigator();

function AssignmentsStackNavInit(){

    return (
        <AssignmentsStackNav.Navigator
            initialRouteName="Assigments"
        >
            <AssignmentsStackNav.Screen
                name="Assignments"
                component={AssignmentsScreen}
                options={({navigation,route})=>({
                    title: route.params.headerName,
                    headerRight: () => (
                        <TouchableOpacity onPress={()=>
                            {
                                //console.log(route.params.classKey)
                                navigation.navigate('Add', {classKey:route.params.classKey})}
                            }>
                            <Ionicons
                                name='add-outline'
                                size={30}
                                style={{paddingRight: 10}}
                            />
                        </TouchableOpacity>),
                    headerLeft: ()=> (<HeaderBackButton onPress={()=> navigation.navigate('Classes')}/>)
                })}
            />
            <AssignmentsStackNav.Screen
                name="Add"
                component={AddScreen}
                options={{title:"Add Assignment"}}
            />
        </AssignmentsStackNav.Navigator>
    )
}

export default AssignmentsStackNavInit