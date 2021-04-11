import React from 'react'
import {Text, View, Button, TextInput} from 'react-native'
import axios from 'axios'

class MoviesSearch extends React.Component {
    state ={
        name: null,
        movies: [],
        url: "http://www.omdbapi.com/",
        apikey: "40deacca"

    }
    changeText = (text)=> {
        this.setState({ name: text})
    }

    search = (navigation) =>{
        if(this.state.name === null){
            alert("insert movie name you would like to search for")
        }
        else{
            const name_query = this.state.name.replace(" ", "+")
            axios.get(this.state.url + "?s="+ name_query + "&apikey=" + this.state.apikey)
            .then(res =>{
                this.setState({movies: res.data})
                navigation.navigate('MoviesList', { params: {movies} })
                
            })
            .catch(err => { console.log(err)})

        }

    }
    render(){
        return (
            <View>
                <Text> Movies Search </Text>
                <TextInput placeholder="movie name"
                onChangeText={text => this.changeText(text)}></TextInput>
                <Button title="Search Movie"
                onPress={() => this.search()}></Button>
            </View>
        )
    } 
}

export default MoviesSearch