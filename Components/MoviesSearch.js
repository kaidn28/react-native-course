import React from 'react'
import {Text, View, Button, TextInput} from 'react-native'
import axios from 'axios'

class MoviesSearch extends React.Component {
    state ={
        name: ' ',
        url: "http://www.omdbapi.com/",
        respond: null

    }
    changeText = (text)=> {
        this.setState({ name: text})
    }

    search = () =>{
        if(this.state.name === null){
            1;
        }
        else{
            console.log(this.state.name)
            const name_split = this.state.name.replace(" ", "+")
            console.log(name_split)
            axios.get(this.state.url + "?t="+ name_split)
            .then(res =>{this.setState({respond: res.json()}); console.log(res)})
            .catch(err => { console.log(err)})
        }

    }
    render(){
        return (
            <View>
                <Text> Movies Search </Text>
                <TextInput placeholder="movie name"
                onChangeText={text => this.changeText(text)}></TextInput>
                <Text> {this.state.name} </Text>
                <Text> {this.state.name.replace(" ", "+")}</Text>
                <Button title="Search Movie"
                onPress={() => this.search()}></Button>
                <Text> {this.state.respond} </Text>
            </View>
        )
    } 
}

export default MoviesSearch