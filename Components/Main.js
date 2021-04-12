import React from 'react'
import { StyleSheet, Text, Button, ScrollView, View} from 'react-native'
import MoviesList from './MoviesList'
import Row from './Row'
class Main extends React.Component {
    state = {
        movies: []
    }
    resetSearch = ()=> {
        this.setState({movies: []})
    }
    componentDidMount() {
        if(typeof this.props.route.params.movies !== "undefined"){
            this.setState({movies: this.props.route.params.movies})
        }
        //console.log(typeof this.props.route.params.movies !== "undefined")
        //console.log(this.props.route.params.movies)
        //console.log(this.state.movies)

    }
    render(){
        //console.log(this.state.movies.length)
        
        return (
            <View style={styles.main}>    
                <View style={{flexDirection: "row", margin: 5}}>
                    <Button title="Search" onPress={()=> this.props.navigation.navigate("MoviesSearch")} />
                    <Button title="Reset" onPress={this.resetSearch} />
                </View>   
                
                <MoviesList movies={this.state.movies}/>
            </View>
        )
    } 
}
const styles = StyleSheet.create({
    main: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 5
    },
  });
export default Main