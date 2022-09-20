import { StyleSheet } from 'react-native'
export const styles = StyleSheet.create({
    card: {
        backgroundColor: '#333333',
        flexDirection: "column",
        padding: 20,
        borderRadius: 15,
        marginTop:20,
        marginBottom:20,
        marginHorizontal:10,
        flex:1,
        color:'white'

    },
    progressBar:{
        width:'100%',
        marginTop:10,
        borderRadius:20,
    },
    cardTitle:{
        marginTop:5,
        fontWeight:'bold',
        fontSize:15,
        color:'white'
    },
    cardSubtitle:{
        marginTop:15,
        color:'white'
    }
})