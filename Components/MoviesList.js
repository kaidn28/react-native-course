import React from 'react'
import {Text, Button, View} from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import {ScrollView} from 'react-native'
import Row from './Row'
import PropTypes from 'prop-types'
import { render } from 'react-dom'

const renderItem = obj => <Row {...obj.item} />

const MoviesList = props => {
    //console.log(props.movies)
    return(
        <View>
            <FlatList 
                data ={props.movies}
                renderItem={renderItem}
                    keyExtractor={item => item.title}
            />
        </View>
    )
}
    
     
        
    

MoviesList.propTypes ={
    movies: PropTypes.array
}

export default MoviesList