import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import DetailsScreen from '../components/details/DetailsScreen';
import ListScreen from '../components/list/ListScreen'

const StudentsStackNav = createStackNavigator();

function StudentsStackNavInit(props){
    console.log(props)
    return (
        <StudentsStackNav.Navigator
            initialRouteName="Students"
        >
            <StudentsStackNav.Screen
                name="Students"
                options={{
                    title: props.headerName,
                    headerTitleAlign: 'center'
                }}
            >
            {()=>
                <ListScreen nass={props.nass}/>        
            }
            </StudentsStackNav.Screen>
            <StudentsStackNav.Screen
                name="Details"
                component={DetailsScreen}
                options={({route})=> ({title: route.params.name.title +'. '+route.params.name.last})}
            />
        </StudentsStackNav.Navigator>
    )
}

export default StudentsStackNavInit