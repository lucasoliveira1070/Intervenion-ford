import { StyleSheet } from 'react-native'
export const styles = StyleSheet.create({
    cardTitle: {
        fontSize: 18,
        fontWeight: "bold",
        marginTop: 15,
        marginLeft: 15,
        color:'white'
    },
    dailyProgressCard: {
        backgroundColor: "#333333",
        flexDirection: "column",
        width:'100%',
        height:'25%',
        borderRadius: 15,
        marginTop: 20,
        color:'white'
    },
    detail: {
        fontSize: 18,
        fontWeight: "bold",
        marginTop: 60,
        marginLeft: 15,
        color:'white'

    },
    progressBar:{
        marginLeft:15,
        marginTop:10,
        marginEnd:20,
        borderRadius:20
    },
    cardSubTitle:{
        fontSize: 14,
        marginTop: 5,
        marginLeft: 15,
        color:'white'
    }
});