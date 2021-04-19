import React from 'react'
import { render } from 'react-dom'
import { Text, View, Button} from 'react-native'
import store from '../../store/store'
import {login} from '../../store/actions'
class LoginScreen extends React.Component{
    constructor(props){
        super(props)
    }
    logIn = ()=> {
        //console.log(store.getState().isLoggedIn)
        store.dispatch(login());
        //this.props.navigation.navigate("Classes")
    };
    render(){
        return (
            <View>
                <Text> Welcome to Courses Managing Application</Text>
                <Text> Press Start </Text>
                <Button title="Start" onPress={this.logIn}></Button>
                <Text> {store.getState().isLoggedIn} </Text>
            </View>
        )
    }
}

export default LoginScreen