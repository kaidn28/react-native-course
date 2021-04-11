import React from 'react'
import {Text, Button, View} from 'react-native'
import MoviesList from './MoviesList'
import Row from './Row'
class Main extends React.Component {
    state = {
        movies: [{title: "brr brr", year: "2021", rated:"brr brr " }, {title: "brr brr 2", year: "2021", rated:"brr brr" }],
    }
    resetSearch = ()=> {
        this.setState({movies: []})
    }

    render(){
        return (
            <View>       
                <Button title="Search" onPress={(props)=> this.props.navigation.navigate("MoviesSearch")} />
                <Button title="Reset" onPress={this.resetSearch} />
                <MoviesList movies ={this.state.movies}/>
            </View>
        )
    } 
}

export default Main