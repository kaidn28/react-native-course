import React from 'react'
import { FlatList, Text } from 'react-native'
import axios from 'axios'
import store from '../../store/store'
import Row from './Row'
class List extends React.Component {
    state = {
        students: null
    }
    getData = ()=>{
        function compare(a,b){
            if (a.name.first < b.name.first ) return -1;
            if (a.name.first > b.name.first) return 1;
            return 0;
        }
        url = store.getState().url;
        results = store.getState().results;
        nat = store.getState().nat;
        inc = store.getState().list_inc;
        var queryString = url+ '?' + 'results=' + results + '&nat=' + nat + '&inc='+ inc;
    
        axios.get(queryString)
        .then(res => {
            var elist = res.data.results;
            //console.log(elist)
            elist.sort(compare);
            this.setState({students: elist})
        })
        .catch(err => console.log(err));    
    }
    componentDidMount(){
        this.getData();
    }
    render(){
        console.log(this.state.students)
        return (
            this.state.students !== null?
            <FlatList
            data={this.state.students}
            renderItem={obj => <Row {...obj.item}/>}
            keyExtractor={(item, index) => item.id + index}
        />
        : <Text> Loading...</Text>
        )
        
    }
}

export default List