import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ListScreen from '../components/list/ListScreen'
import SearchScreen from '../components/search/SearchScreen'
import AddScreen from '../components/add/AddScreen'
import DetailsScreen from '../components/details/DetailsScreen'
import LoginScreen from '../components/login/LoginScreen'
const TabNav = createBottomTabNavigator();

function TabNavInit(){
    const isLoggedIn = true;
    return (
        <TabNav.Navigator
            initialRouteName="List"
        >
            {isLoggedIn? (
                <> 
                <TabNav.Screen 
                    name="List" 
                    component={ListScreen} 
                    options= {{title: "List"}}
                />
                <TabNav.Screen 
                    name="Search" 
                    component={SearchScreen} 
                    options={{ title : "Search"}}
                />
                <TabNav.Screen 
                    name="Details" 
                    component={DetailsScreen} 
                    options={{ title: "Details" }}
                />
                <TabNav.Screen
                    name="Add"
                    component={AddScreen}
                    options={{title: "Add"}}
                />
                </>
            ) : (
                <TabNav.Screen 
                    name="Login"
                    component={LoginScreen} />
            )
        }
            
        </TabNav.Navigator>
    )
}

export default TabNavInit