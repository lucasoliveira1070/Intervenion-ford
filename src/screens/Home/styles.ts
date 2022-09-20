import { StyleSheet } from 'react-native'
export const styles = StyleSheet.create({
    mainView: {
        flexDirection: "column",
        height: '100%',
        padding: 20,
        backgroundColor: "#1A1A1A",
    },
    helloText: {
        fontSize: 25,
        fontWeight: "bold",
        color:'white',
        marginTop:10
    },
    helloView: {
        flexDirection: "row",
        marginTop:2,
        alignContent:'center',
    },
    buttonsView:{
        flexDirection: "row",
        marginTop: 15,
    },
    navButton: {
        marginRight: 20,
        backgroundColor: "#333333",
        paddingLeft: 20,
        paddingTop: 5,
        paddingRight: 20,
        paddingBottom: 5,
        borderRadius: 37,
    },
    competitionsTitle:{
        fontWeight:'bold',
        fontSize:20,
        color:'white'

    },
    competitionsViewUpper:{
        flexDirection:'column',
        marginTop:20,
    },
    accountIcon:{
        marginLeft:180,
        backgroundColor:'#333333',
    }
});