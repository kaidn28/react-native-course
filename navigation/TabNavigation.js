import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'
import AssignmentsStackNavInit from './AssignmentsStackNav'
import StudentsStackNavInit from './StudentsStackNav'
const TabNav = createBottomTabNavigator();

function TabNavInit({route, navigation}){
    //console.log(route.params)
    //console.log(props.route.params.id)
    return (
        <TabNav.Navigator
            initialRouteName="Assignments"
        >
            <TabNav.Screen 
                name="AssignmentsStackNav" 
                options= {{
                    title: "Assignments",
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
            >
                {()=> 
                <AssignmentsStackNavInit 
                    {...route.params}
                />}
            </TabNav.Screen>
            <TabNav.Screen 
                name="Students" 
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
            >
                {() =><StudentsStackNavInit 
                    {...route.params}
                />}
            </TabNav.Screen>
            
        </TabNav.Navigator>
    )
}

export default TabNavInit