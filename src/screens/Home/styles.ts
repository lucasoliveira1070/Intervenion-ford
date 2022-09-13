import { StyleSheet } from 'react-native'
export const styles = StyleSheet.create({
    mainView: {
        flexDirection: "column",
        height: 100,
        padding: 20,
        backgroundColor: "#1A1A1A",
        flex: 1
    },
    background: {
        backgroundColor: "#1A1A1A",
    },
    helloText: {
        fontSize: 25,
        fontWeight: "bold"
    },
    rowView: {
        flexDirection: "row"
    },
    navButton: {
        marginRight: 20,
        marginTop: 40,
        backgroundColor: "#333333",
        paddingLeft: 20,
        paddingTop: 5,
        paddingRight: 20,
        paddingBottom: 5,
        borderRadius: 37,
        fontWeight: "bold",
        color: 'white'
    },
    competitionsTitle:{
        marginTop:20,
        fontWeight:'bold',
        fontSize:20

    },
    competitionsViewUpper:{
        flexDirection:'column'
    }
});