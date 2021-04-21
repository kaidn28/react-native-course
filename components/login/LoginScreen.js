import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity} from 'react-native'
import store from '../../store/store'
import {login} from '../../store/actions'
import loginStyles from '../../assets/loginStyles'
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
            <View style={loginStyles.container}>
                <View style={loginStyles.main}>
                    <Text style={{fontSize: 20}}> Welcome to Classes Managing Application</Text>
                    <View style={loginStyles.text}>
                        <Text> Press Start </Text>
                    </View>

                    <TouchableOpacity 
                        onPress={this.logIn}
                        style={loginStyles.button}
                    > 
                        <Text style={{fontSize: 20, color: 'white'}}> Start </Text> 
                    </TouchableOpacity>
                    
                </View>
                <View style={loginStyles.textbottom}>
                    <Text style={{fontSize: 15, textAlign:'justify'}}> 
                        This application will help you manage your classes, 
                        including assignments and students.
                    </Text>
                    <Text>                                                 - Do Nam (18020941)</Text>
                </View>    
            </View>

        )
    }
}

export default LoginScreen