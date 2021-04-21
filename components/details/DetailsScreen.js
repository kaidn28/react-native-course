import React from 'react'
import { ScrollView, Image, Text, View} from 'react-native'
import styles from '../../assets/detailsStyles';

function DetailsScreen(props){
    console.log(props)
    const details = props.route.params;
    const listScore= details.scores.map((number, index)=><Text key={index}>     Assignment {index+1}: {number}</Text>)
    return (
        <ScrollView style={styles.container}>
            <View style={styles.smallerContainer}>
                <View style={styles.nameContainer}>
                    <Text style={styles.name}> {details.name.first + ' ' + details.name.last} </Text>
                </View>
                <View style={styles.image}>
                    <Image source={{uri: details.picture.large}} style={{width: 300, height:300}}/>
                </View>
                <View style={styles.info}>
                    <Text style={{fontSize: 15, fontStyle: 'italic'}}> Information: </Text>
                    <View style={{flex:1, flexDirection: 'row'}}>
                        <View style={{flex: 1}}>
                            <Text style={{marginTop: 5}}>ID: {details.id.name + details.id.value}</Text>
                            <Text style={{marginBottom: 5}}>Phone: {details.phone}</Text>
                        </View>
                        <View>
                            <Text style={{marginTop: 5}}>Gender: {details.gender}</Text>
                            <Text style={{marginBottom: 5}}>DOB: {details.dob.date.substring(0,10)}</Text>
                        </View>
                    </View>
                    
                    
                    <View> 
                        <Text>Score: </Text>
                        <View>
                            {listScore}
                        </View>
                    </View>
                    <Text style={{marginTop: 5}}>Average Score: {details.mean_score} </Text>
                </View>
            </View>
            
        </ScrollView>
    )
}

export default DetailsScreen