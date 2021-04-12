import React from 'react'
import {StyleSheet, View} from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import Row from './Row'
import PropTypes from 'prop-types'



const MoviesList = props => {
    renderItem = obj => <Row {...obj.item} seeDetails={props.seeDetails}/>
    return (
        <FlatList 
            data ={props.movies}
            renderItem={this.renderItem}
            keyExtractor={(item, index) => (index + item.imdbID)}
        /> 
    )
}
         
MoviesList.propTypes ={
    movies: PropTypes.array
}
export default MoviesList