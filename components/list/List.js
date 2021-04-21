import React from 'react'
import { FlatList, Text } from 'react-native'
import axios from 'axios'
import store from '../../store/store'
import Row from './Row'
import styles from '../../assets/styles'
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
        .then(res1 => {
            var elist = res1.data.results;
            //console.log(elist)
            elist.sort(compare);
            //console.log(elist)
            nass = this.props.nass
            //console.log(nass)
            for(var e =0; e < elist.length;e++){
                var scores = [];
                var sum = 0;
                for(let i =0; i< nass; i++) {
                    
                    var score = (Math.floor(Math.random()*12)+8)/2;
                    sum += score
                    scores.push(score);
                }
                var mean_score = Math.round(10*sum/(scores.length))/10;
                elist[e].scores = scores;
                elist[e].mean_score = mean_score
            }
            //console.log(elist)
            this.setState({students: elist})

        })
        .catch(err => console.log(err));    
    }
    componentDidMount(){
        this.getData();
    }
    render(){
        //console.log(this.state.students)
        return (
            this.state.students !== null?
            <FlatList style={styles.list}
            data={this.state.students}
            renderItem={obj => <Row {...obj.item}/>}
            keyExtractor={(item, index) => item.id + index}
        />
        : <Text> Loading...</Text>
        )
        
    }
}

export default List