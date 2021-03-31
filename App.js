import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {Vibration} from 'react-native'
export default class App extends React.Component {
  state = {
    minutes: 25,
    seconds: 0,
    work_time: 25, 
    rest_time: 5,
    status: 'working',
    counter: 0,
    big_rest_time: 30,
    stopping: true,
  };

  timePassed(){
    if (this.state.stopping) return

    if(this.state.minutes ===0 && this.state.seconds === 0){

      this.changeStatus()
    }
    else {
      if (this.state.seconds === 0){
        this.setState({
          minutes: this.state.minutes -1,
          seconds: 59
        })
      }
      else{
        this.setState({
          seconds: this.state.seconds -1,
        })
      }
    }
    
  };
  changeStatus(){
    Vibration.vibrate(500,500,500)
    this.setState({
      counter: this.state.counter +1,
    })
    if (this.state.status === 'working' && this.state.counter === 3){
      this.setState({
        status: 'resting',
        minutes: this.state.big_rest_time,
        counter: -1
      })
    }
    else if (this.state.status ==='working'){
      this.setState({
        status: 'resting',
        minutes: this.state.rest_time
      })
    }
    else {
      this.setState({
        status: 'working',
        minutes: this.state.work_time
      })
    }
  }

  stopTimer(){
    this.setState({
      stopping: !this.state.stopping
    })
    //this.state.stopping = !this.state.stopping
  }

  resetTimer(){
    this.setState({
      stopping: false,
      status: 'working',
      minutes: this.state.work_time,
      seconds: 0 

    })
  }

  componentDidMount(){
    this.interval = setInterval(()=> this.timePassed(), 1000)
    //this.timePassed()
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render(){
    return (
    <View style={styles.container}>
      <Text>{this.state.minutes} : {this.state.seconds}</Text>
      <Text> {"\n" }</Text>
      <Text> { this.state.stopping } </Text>
      <Button  title="Start/Stop Timer" onPress={this.stopTimer.bind(this)}></Button>
      <Text> {"\n" }</Text>
      <Button title="Reset Timer" onPress={this.resetTimer.bind(this)}></Button>
      <StatusBar style="auto" />
    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
