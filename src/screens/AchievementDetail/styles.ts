import { StyleSheet } from 'react-native'
export const styles = StyleSheet.create({
    mainView: {
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1A1A1A',
        flex: 1,
        textAlign: 'center',
    },
    image: {
        justifyContent: 'center',
        borderRadius: 50,
        height: 170,
        width: 175,
    },
    dateAcquired: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 15,
        textAlign: 'center',
    },
    title: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 40,
    },
    backIcon: {
        backgroundColor: '#333333',
        borderRadius: 12,

    },
    backButtonView: {
        width: '100%',
        marginTop:'4%'
    },
    description: {
        color: '#7F7A7A',
        fontWeight: 'bold',
        fontSize: 15,
        marginBottom:3
    },
    descriptionCardView: {
        width: '80%',
        backgroundColor: '#333333',
        height: '10%',
        paddingVertical: 10,
        borderRadius: 20,
        borderColor: 'green',
        borderWidth: 1,
        marginBottom: '7%'
    },
    descriptionCardText: {
        color: 'white',
        fontSize: 18,
        marginVertical: '5%',
        marginLeft: '5%',
        fontWeight: 'bold'
    },
    checkIcon: {
        marginLeft: '23%'
    },
    cardTitle: {
        width: '100%',
        marginLeft: '25%'
    },
    progressBar: {
        width: '60%',
        marginHorizontal: '5%',
        marginBottom:'1%',
        borderRadius:20
    },
    statusProgressBar:{
        color:'white',
        fontWeight:'bold',
        fontSize:18,
        marginLeft:'26%',
        marginTop:'5%'
    },
    nextStepText: {
        color: 'white',
        fontSize: 18,
        marginLeft: '5%',
        marginTop: '2%',
        fontWeight: 'bold'
    },
    shareButton: {
        marginBottom: '10%',
        marginTop:'2%'
    },
    claimButton:{
        marginBottom: '15%',
        marginTop:'2%'
    },
    nextStepCardView: {
        width: '80%',
        backgroundColor: '#333333',
        height: '10%',
        paddingVertical: 10,
        borderRadius: 20,
        borderColor: '#7F7A7A',
        borderWidth: 1,
        marginBottom: '8%'

    }
});