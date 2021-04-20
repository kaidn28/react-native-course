import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import DetailsScreen from '../components/details/DetailsScreen';
import ListScreen from '../components/list/ListScreen'

const StudentsStackNav = createStackNavigator();

function StudentsStackNavInit(){
    return (
        <StudentsStackNav.Navigator
            initialRouteName="Students"
        >
            <StudentsStackNav.Screen
                name="Students"
                component={ListScreen}
                options={{title:"Students"}}
            />
            <StudentsStackNav.Screen
                name="Details"
                component={DetailsScreen}
                options={{title:"Student Details"}}
            />
        </StudentsStackNav.Navigator>
    )
}

export default StudentsStackNavInit