import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import TabNavInit from './TabNavigation';
import LoginScreen from '../components/login/LoginScreen';
import DetailsScreen from '../components/details/DetailsScreen';
import AddScreen from '../components/add/AddScreen';
import ClassesListScreen from '../components/classes/ClassesListScreen';
import { useSelector } from 'react-redux'
const StackNav = createStackNavigator();

function StackNavInit(){
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
                    options={{
                        title: "Your Classes",
                        headerTitleAlign: 'center'
                    }}
                />
                <StackNav.Screen 
                    name="TabNav" 
                    component={TabNavInit}
                    options={{headerShown: false}}
                />
                <StackNav.Screen 
                    name="Details" 
                    component={DetailsScreen} 
                    options={{ 
                        title: "Details",
                        headerTitleAlign: 'center' 
                    }}
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