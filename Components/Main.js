import React from 'react'
import { StyleSheet, Text, Button, ScrollView, View} from 'react-native'
import MoviesList from './MoviesList'
import Row from './Row'
import axios from 'axios'
class Main extends React.Component {
    state = {
        movies: [],
        url: "http://www.omdbapi.com/",
        apikey: "40deacca",
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
    seeDetails = (movie) => {
        console.log(movie);
        let id = movie.imdbID
        axios.get(this.state.url + "?i="+ id + "&apikey=" + this.state.apikey)
            .then(res =>{
                //console.log(res.data)
                this.props.navigation.push('MovieDetails', { movie: res.data }) 
                
                //console.log("res data")
                //console.log(res.data.Search)
            })
            .catch(err => { console.log(err)})

    }
    render(){ 
        //console.log(this.state.movies.length)
    
        return (
            <View style={styles.main}>    
                <View style={{flexDirection: 'row', justifyContent: 'space-between', margin: 10}}>
                    <Button title="Search" onPress={()=> this.props.navigation.navigate("MoviesSearch")} />
                    <Button title="Reset" onPress={this.resetSearch} />
                </View>   
                
                <MoviesList movies={this.state.movies} 
                seeDetails={this.seeDetails}/>
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
    },
  });
export default Main