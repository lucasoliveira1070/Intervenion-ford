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
    dateAcquiredView:{
        flexDirection:'row',
        width:'100%',
        textAlign:'center',
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    dateAcquired: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 15,
        marginTop:'1%'
    },
    partnership: {
        color: '#7F7A7A',
        fontWeight: 'bold',
        fontSize: 15,
        marginBottom: '10%'

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
        marginTop: '20%'
    },
    description: {
        color: '#7F7A7A',
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 3
    },
    descriptionCardView: {
        width: '80%',
        backgroundColor: '#333333',
        height: '15%',
        paddingVertical: 10,
        borderRadius: 20,
        borderColor: 'white',
        borderWidth: 1,
    },
    descriptionCardText: {
        color: 'white',
        fontSize: 14,
        marginVertical: '5%',
        marginLeft: '5%',
        fontWeight: 'bold',
        flexWrap:'wrap'
    },
    checkIcon: {
        marginTop:'3%',
    },
    cardTitle: {
        width: '100%',
        marginLeft: '25%'
    },
    progressBar: {
        width: '60%',
        marginHorizontal: '5%',
        marginBottom: '1%',
        borderRadius: 20
    },
    claimButton: {
        marginBottom: '45%',
        marginTop: '2%'
    },
    expiration:{
        color: '#7F7A7A',
        fontWeight: 'bold',
        fontSize: 12,
        marginBottom: '15%',
        marginTop:'1%'
    }
});