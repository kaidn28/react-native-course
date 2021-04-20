import React from 'react'
import { ScrollView, Image, Text, View, FlatList} from 'react-native'

function DetailsScreen(props){
    //console.log(props)
    const details = props.route.params;
    const listScore= details.scores.map((number, index)=><Text key={index}>Assignment {index+1}: {number}</Text>)
    return (
        <ScrollView>
            <Text> {details.name.first + ' ' + details.name.last} </Text>
            <Image source={{uri: details.picture.large}} style={{width: 350, height:350}}/>
            <View>
                <Text> ID: {details.id.name + details.id.value} </Text>
                <Text> DOB: {details.dob.date.substring(0,10)}</Text>
                <Text> Gender: {details.gender}</Text>
                <Text> Phone: {details.phone}</Text>
                <View> 
                    <Text> Score: </Text>
                    <View>
                        {listScore}
                    </View>
                </View>
                <Text> Average Score: {details.mean_score} </Text>
            </View>
        </ScrollView>
    )
}

export default DetailsScreen