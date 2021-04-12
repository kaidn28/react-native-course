import React from 'react'
import {Text, View, Image} from 'react-native'

const MovieDetails = props => {
    //console.log(props.route.params)
    var movie = props.route.params.movie 
    return (
        <View style={{flex: 1, width: 300, margin: 60}}>
            <Image source={{uri: movie.Poster}} style={{width: 300, height: 300 }} />
            <Text> Title: {movie.Title} </Text>
            <Text> Year: {movie.Year} </Text>
            <Text> Imdb ID: {movie.imdbID} </Text>
            <Text> Director: {movie.Director}</Text>
            <Text> Genre: {movie.Genre}</Text>
            <Text> Actor: {movie.Actor}</Text>
            <Text> Plot: {movie.Plot}</Text>
            <Text> Rated: {movie.Rated}</Text>
            <Text> Imdb Rating: {movie.imdbRating}</Text>
            <Text> Box Office: {movie.BoxOffice}</Text>
        </View>
    )
    
}

export default MovieDetails