import { StyleSheet } from 'react-native'
export const styles = StyleSheet.create({
    card: {
        backgroundColor: '#333333',
        flexDirection: "column",
        padding: 20,
        borderRadius: 15,
        margin:15,
        flex:1,

    },
    viewCompetitions: {
        flexDirection: "row",
        backgroundColor:"green",

    },
    progressBar:{
        marginLeft:1,
        marginTop:10,
        marginEnd:1,
        borderRadius:20,
    },
    cardTitle:{
        marginTop:20,
        fontWeight:'bold',
        fontSize:15
    }
})