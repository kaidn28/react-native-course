import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ListScreen from '../components/list/ListScreen'
import AssignmentsScreen from '../components/assignments/AssignmentsScreen'
import Ionicons from 'react-native-vector-icons/Ionicons'
const TabNav = createBottomTabNavigator();

function TabNavInit(props){
    console.log(props.route.params.id)
    return (
        <TabNav.Navigator
            initialRouteName="Assignments"
        >
            <TabNav.Screen 
                name="Assignments" 
                component={AssignmentsScreen} 
                options= {{
                    title: "Assignments",
                    headerRight: "bla",
                    tabBarIcon: ({focused, tintColor}) => {
                        if(focused){
                            return <Ionicons 
                            name='book-outline'
                            size={20} 
                            color='blue'/>
                            
                        }
                        else {
                            return <Ionicons 
                            name='book-outline'
                            size={20} 
                            color='black'
                        />
                        }
                    }

                    
                }}
            />
            <TabNav.Screen 
                name="Students" 
                component={ListScreen} 
                options= {{
                    title: "Students",
                    tabBarIcon: ({focused, tintColor}) => {
                        if(focused){
                            return <Ionicons 
                            name='list-outline'
                            size={20} 
                            color='blue'/>
                            
                        }
                        else {
                            return <Ionicons 
                            name='list-outline'
                            size={20} 
                            color='black'
                        />
                        }
                    } 
                }}
            />
            
        </TabNav.Navigator>
    )
}

export default TabNavInit