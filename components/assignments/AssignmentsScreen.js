import axios from 'axios'
import React from 'react'
import { FlatList, Text, View} from 'react-native'
import Row from './Row'
class AssignmentsScreen extends React.Component{
    state = {
        assignments: null
    }
    componentDidMount(){
        //obj = {assignments: this.state.assignments}
        classKey = this.props.route.params.classKey
        axios.get('https://react-native-course-35244-default-rtdb.firebaseio.com/classes/' + classKey + '/assignments.json')
        .then(res =>{
            this.setState({assignments: res.data})
        })
        
    }
    render(){
        console.log(this.props.route.params)
        return this.state.assignments !== null? 
                <FlatList
                    data={this.state.assignments}
                    renderItem={obj => <Row {...obj.item}/>}
                    keyExtractor={(item) => item.title}
                />
                : <Text> Loading...</Text>
    }

}

export default AssignmentsScreen