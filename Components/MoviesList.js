import React from 'react'
import {Text, Button, View} from 'react-native'


const MoviesList  = ({navigation}) => {
    return (
    <View>
        <Text> Movies List</Text>
        <Button title="Search Movie" onPress={() => navigation.navigate("MoviesSearch")}/>
    </View>

    )
}

export default MoviesList