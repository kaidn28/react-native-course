import React from 'react'
import {Text, View, Button, TextInput} from 'react-native'
import axios from 'axios'

class MoviesSearch extends React.Component {
    state ={
        name: null,
        url: "http://www.omdbapi.com/",
        apikey: "40deacca",
        number_of_result: 10

    }
    changeText = (text)=> {
        this.setState({ name: text})
    }

    search = () =>{
        if(this.state.name === null){
            alert("insert movie name you would like to search for")
        }
        else{
            for(let i = 0; i < this.state.number_of_result%10; i++){

            }
            const name_query = this.state.name.replace(" ", "+")
            axios.get(this.state.url + "?s="+ name_query + "&apikey=" + this.state.apikey)
            .then(res =>{
                this.props.navigation.push('Main', { movies: res.data.Search }) 
                
                //console.log("res data")
                //console.log(res.data.Search)
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
                onPress={this.search}></Button>
            </View>
        )
    } 
}
export default MoviesSearch