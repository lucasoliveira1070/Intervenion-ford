import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    mainView: {
        flexDirection: 'column',
        backgroundColor: '#1A1A1A',
        height:'100%'
        
    },
    imageView: {
        marginTop: 100,
        height:'40%',
        width:'100%'
    },
    image: {
        flex: 1,
        width: '100%',
        resizeMode: 'center',
    },
    title: {
        color: 'white',
        marginLeft: 40,
        fontWeight: 'bold',
        fontSize: 40
    },
    bottomView: {
        flexDirection: 'column',
        
    },
    userInput: {
        height: 40,
        borderWidth: 1,
        borderRadius:5,
        padding: 10,
        marginBottom:20,
        width:'100%',
        color:'black',
        backgroundColor:'white'
    },
    userInputView: {
        padding: 30,
        flexDirection: 'column'
    },
    loginButton: {
        marginTop: 20
    }
});