import axios from 'axios'
import React from 'react'
import { FlatList, Text, View} from 'react-native'
import Row from './Row'
import styles from '../../assets/styles'
class AssignmentsScreen extends React.Component{
    state = {
        assignments: null,
        classKey: null
    }
    componentDidMount(){
        if(typeof this.props.classKey !== 'undefined'){
            classKey = this.props.classKey
            axios.get('https://react-native-course-35244-default-rtdb.firebaseio.com/classes/' + classKey + '/assignments.json')
            .then(res =>{
                var data = res.data
                var assignments = []
                for(let d in data){
                    data[d].assignmentKey = d;
                    assignments.push(data[d])
                }
                this.setState({assignments, classKey})
        })
        }
    }
    componentWillUnmount(){

    }
    onDelete = ({index, assignmentKey}) => {
        //console.log(index, assignmentKey)
        this.setState(({assignments}) => {
            //console.log(assignments)
            var ass = assignments
            ass.splice(index,1)
            //console.log(ass)
            return {assignments: ass}
        })
        axios.delete('https://react-native-course-35244-default-rtdb.firebaseio.com/classes/' + this.state.classKey + '/assignments/' + assignmentKey+'.json')    
    }
    render(){
        //console.log(this.state.classKey)
        //console.log(this.props.route.params)
        return (
            <View style = {styles.container}>

                {this.state.assignments !== null? 
                <FlatList style={styles.list}
                    data={this.state.assignments}
                    renderItem={({item,index}) => <Row {...item} index={index} onDelete={this.onDelete}/>}
                    keyExtractor={(item, index) => (index + item.title)}
                />
                : (
                <View style={styles.loadingContainer}>
                    <Text style={styles.loadingText}> Loading...</Text>
                </View>)
                }
            </View>            
            )
    }
}
export default AssignmentsScreen