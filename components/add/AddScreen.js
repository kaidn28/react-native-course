import axios from 'axios';
import React from 'react'
import { Text, View, TextInput, Button} from 'react-native'

function AddScreen(props){
    //console.log(props.route)
    const [title, setTitle] = React.useState('');
    const [description, setDescription] = React.useState('')
    classKey = props.classKey
    //console.log('add')
    //console.log(classKey)
    //console.log(classKey)
    const submit =()=>{
        axios.post('https://react-native-course-35244-default-rtdb.firebaseio.com/classes/' + classKey + '/assignments/.json', {title, description})
        .then(res => props.navigation.push('Assignments'))
        .catch(err => console.log(err))
    }
    return (
        
        <View>
            <Text>Title: </Text>
            <TextInput
                placeholder="add title"
                onChangeText={title => {setTitle(title)}}
            />
            <Text>Description: </Text>
            <TextInput
                placeholder="add description"
                onChangeText={description => {setDescription(description)}}
            />
            <Button 
                title='submit' 
                onPress={submit}
                disabled= {title === '' || description === ''}/>
        </View>
    )
}

export default AddScreen