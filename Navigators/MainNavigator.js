import React from 'react'
import {createStackNavigator} from '@react-navigation/stack';
import MovieDetails from '../Components/MovieDetails'
import MoviesList from '../Components/MoviesList'
import MoviesSearch from '../Components/MoviesSearch'

const StackNav = createStackNavigator();

function StackNavInit(){
    return (
        <StackNav.Navigator
            initialRouteName="MoviesList"
        >
            <StackNav.Screen 
              name="MoviesList" 
              component= {MoviesList} 
              options= {{title: "Movies"}}
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