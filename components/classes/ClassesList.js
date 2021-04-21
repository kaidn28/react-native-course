import axios from 'axios'
import React from 'react'
import { FlatList, Text, View } from 'react-native'
import store from '../../store/store'
import Row from './Row'
import styles from '../../assets/styles'
class ClassesList extends React.Component {
    state = {
        classes: null
    }
    componentDidMount(){
        axios.get('https://react-native-course-35244-default-rtdb.firebaseio.com/classes.json')
        .then(res => {
            var data = res.data
            this.setState({classes: []})
            var classes = []
            for(let i in data){
                data[i].keyID= i
                data[i].nass= Object.keys(data[i].assignments).length
                classes.push(data[i])
            }
            this.setState({classes})
            //console.log(this.state.classes)
        }).catch(err => console.log(err))
    }
    componentWillUnmount(){

    }
    render(){
        //console.log(this.state.classes)
        return (
            this.state.classes !== null ?
            <FlatList style={styles.list}
            data={this.state.classes}
            renderItem={obj => <Row {...obj.item} />}
            keyExtractor={(item, index) => item.id + index}
        />
        : (
            <View style={styles.loadingContainer}>
                <Text style={styles.loadingText}> Loading...</Text>
            </View>
            )
        )
        
    }
}

export default ClassesList