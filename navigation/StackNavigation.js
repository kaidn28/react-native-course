import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import TabNavInit from './TabNavigation';
import LoginScreen from '../components/login/LoginScreen';
import DetailsScreen from '../components/details/DetailsScreen';
import AddScreen from '../components/add/AddScreen';
import ClassesListScreen from '../components/classes/ClassesListScreen';
import { useSelector } from 'react-redux'



const StackNav = createStackNavigator();

function StackNavInit(props){
    const isLoggedIn = useSelector(state => state.isLoggedIn)
    return (
        <StackNav.Navigator
            initialRouteName="Login"
        >
            {isLoggedIn? (
                <> 
                <StackNav.Screen
                    name="Classes"
                    component={ClassesListScreen}
                    options={{title: "Your Classes"}}
                />
                <StackNav.Screen 
                    name="TabNav" 
                    component={TabNavInit}
                    options={{title: "Class Details"}} 
                />
                <StackNav.Screen 
                    name="Details" 
                    component={DetailsScreen} 
                    options={{ title: "Details" }}
                />
                <StackNav.Screen
                    name="Add"
                    component={AddScreen}
                    options={{title: "Add Course"}}
                />
                </>
            ) : (
                <>
                <StackNav.Screen 
                    name="Login"
                    component={LoginScreen} 
                    options={{headerShown: false}}
                />
                </>
            )
        }
            
        </StackNav.Navigator>
    )
}

export default StackNavInit 