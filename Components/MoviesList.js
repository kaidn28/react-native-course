import React from 'react'
import {Text, Button, View} from 'react-native'
import Row from './Row'

class MoviesList extends React.Component {
    state = {
        name: null,
        id: null,
        show_result: false
    }
    componentDidMount(){
        if (this.state.name === null){
            this.setState({show_result: false})
        }
        else {
            this.setState({show_result: true})
        }
    }



    render(){
        if (!this.state.show_result) {
            return (
                <View>
                    <Text> Press Search to search for movies</Text>
                    <Button title="Search" onPress={(props)=> this.props.navigation.navigate("MoviesSearch")} />
                </View>
            )
        }
        const row = {name: "name", year: "year", rated:"rated"}
        
        return (
            <View>       
                <Row {...row}/>       
            </View>
        )
    } 
}

export default MoviesList