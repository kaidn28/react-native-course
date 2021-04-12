import React from 'react'
import {StyleSheet, View} from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import Row from './Row'
import PropTypes from 'prop-types'



const MoviesList = props => {
    renderItem = obj => <Row {...obj.item}/>
    return (
        <FlatList 
            data ={props.movies}
            renderItem={this.renderItem}
            keyExtractor={item => item.imdbID}
        
        /> 
    )
}
         
MoviesList.propTypes ={
    movies: PropTypes.array
}
export default MoviesList