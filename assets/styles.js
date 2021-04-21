import {StyleSheet} from 'react-native'


const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'row',
    },
    listHeader: {

    },
    list: {
        width: 420
    },
    row: {
        margin: 10,
        marginTop: 5,
        borderWidth: 1,
        padding:10,
        borderRadius: 10
    },
    rowHeader:{
        borderBottomWidth: 1,
        borderBottomColor: 'grey'
    },
    rowHeaderText: {
        fontSize: 17,
        fontStyle: 'italic'
    },
    loadingText: {
        fontSize: 20
    },
    loadingContainer: {
        flex: 1
    },
    trash: {
        marginRight: 5,
        marginLeft: 'auto',
        marginTop: 5
    },
    studentRow: {
        flex: 1,
        flexDirection: 'row',
        margin: 10,
        marginTop: 5,
        borderWidth: 1,
        padding:10,
        borderRadius: 10
    },
    image: {
        width: 80,
        height: 80,
        marginRight: 20
    }

})

export default styles