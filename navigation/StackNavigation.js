import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import TabNavInit from './TabNavigation'
import LoginScreen from '../components/login/LoginScreen'
const StackNav = createStackNavigator();

function StackNavInit(){
    const isLoggedIn = true;
    return (
        <StackNav.Navigator
            initialRouteName="List"
        >
            {isLoggedIn? (
                <> 
                <StackNav.Screen 
                    name="TabNav" 
                    component={TabNavInit} 
                    options ={{title: "Main"}}
                />
                </>
            ) : (
                <StackNav.Screen 
                    name="Login"
                    component={LoginScreen} />
            )
        }
            
        </StackNav.Navigator>
    )
}

export default StackNavInit