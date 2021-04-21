import axios from 'axios';
import React from 'react'
import { Text, View, TextInput, Button} from 'react-native'
import addStyles from '../../assets/addStyles';

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
        
        <View style={addStyles.container}>
            <View style={addStyles.smallContainer}>
                <View style={addStyles.input}>
                    <Text>Title: </Text>
                    <TextInput style={addStyles.titleInput}
                        placeholder="add title"
                        onChangeText={title => {setTitle(title)}}
                    />
                    <Text>Description: </Text>
                    <TextInput multiline numberOfLines={4} style={addStyles.descriptionInput}
                        placeholder="add description"
                        onChangeText={description => {setDescription(description)}}
                    />
                </View>
                <View style={addStyles.button}>
                    <Button
                        title='submit' 
                        onPress={submit}
                        disabled= {title === '' || description === ''}/>
                </View>
                
            </View>
            
        </View>
    )
}

export default AddScreen