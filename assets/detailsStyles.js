import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    smallerContainer: {
        padding: 20,
        marginTop: 10,
        marginLeft: 70,
        marginRight: 70,
        alignItems: 'center',
    },
    name: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 10,
        borderBottomColor: 'gray',
        borderBottomWidth: 1
    },
    info:{
        borderTopColor: 'gray',
        borderTopWidth: 1,
        width: 300,
        marginTop: 10,
        paddingTop: 10,
    }

})

export default styles