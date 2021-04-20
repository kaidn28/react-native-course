import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity} from 'react-native'
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
            <View style={styles.container}>
                <View style={styles.main}>
                    <Text style={{fontSize: 20}}> Welcome to Classes Managing Application</Text>
                    <View style={styles.text}>
                        <Text> Press Start </Text>
                    </View>

                    <TouchableOpacity 
                        onPress={this.logIn}
                        style={styles.button}
                    > 
                        <Text> Start </Text> 
                    </TouchableOpacity>
                    
                </View>
                <View style={styles.textbottom}>
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
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },  
    main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',   
    },
    button: {
        backgroundColor: "#f194ff",
        paddingRight: 50,
        paddingLeft: 50,
        paddingTop: 20,
        paddingBottom: 20
    },
    text: {
        width: 400,
        alignItems: 'center',
        paddingBottom: 20,
        paddingTop: 20,
        margin: 'auto'
    },
    textbottom: {
        margin: 30,
        
    }
})
export default LoginScreen