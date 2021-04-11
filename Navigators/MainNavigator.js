import React from 'react'
import {createStackNavigator} from '@react-navigation/stack';
import MovieDetails from '../Components/MovieDetails'
import Main from '../Components/Main'
import MoviesSearch from '../Components/MoviesSearch'

const StackNav = createStackNavigator();

function StackNavInit(){
    return (
        <StackNav.Navigator
            initialRouteName="Main"
        >
            <StackNav.Screen 
              name="Main" 
              component={Main} 
              options= {{title: "Movies List"}}
            />
            <StackNav.Screen 
              name="MoviesSearch" 
              component={MoviesSearch} 
              options={{ title : "Search"}}
            />
            <StackNav.Screen 
              name="MovieDetails" 
              component={MovieDetails} 
              options={{ title: "Details" }}/>
        </StackNav.Navigator>
    )
}
export default StackNavInit