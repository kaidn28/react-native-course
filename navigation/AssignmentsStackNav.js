import React from 'react'
import { createStackNavigator, HeaderBackButton, Button } from '@react-navigation/stack';
import AddScreen from '../components/add/AddScreen';
import AssignmentsScreen from '../components/assignments/AssignmentsScreen'
import {TouchableOpacity} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
const AssignmentsStackNav = createStackNavigator();

function AssignmentsStackNavInit(props){
    //console.log(props)
    return (
        <AssignmentsStackNav.Navigator
            initialRouteName="Assignments"
        >
            <AssignmentsStackNav.Screen 
                name="Assignments"
                options={()=>({
                    title: props.headerName,
                    headerRight: () => (
                        <TouchableOpacity onPress={()=>
                            {
                                //console.log(route.params.classKey)
                                props.navigation.navigate('Add')}
                            }>
                            <Ionicons
                                name='add-outline'
                                size={30}
                                style={{paddingRight: 10}}
                            />
                        </TouchableOpacity>),
                    headerLeft: ()=> (<HeaderBackButton onPress={()=> props.navigation.navigate('Classes')}/>)
                })}
            >
                {() =>
                <AssignmentsScreen 
                    headerName={props.headerName} 
                    classKey={props.classKey}
                />}
            </AssignmentsStackNav.Screen>
            <AssignmentsStackNav.Screen
                name="Add"
                options={{title:"Add Assignment"}}
            >
            {
            ()=> <AddScreen 
                classKey={props.classKey}
                navigation={props.navigation}
                />}
            </AssignmentsStackNav.Screen>
        </AssignmentsStackNav.Navigator>
    )
}

export default AssignmentsStackNavInit