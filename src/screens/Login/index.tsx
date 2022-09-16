import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { styles } from "./styles";

export function Login() {
    const [user, setUser] = useState('');
    const navigation = useNavigation<any>();

    function handleLogin() {
        if(!user){
            console.log('Digite um nome de usuário')
            return;
        }
        
        console.log(user)
        navigation.navigate('Home', { data: { user: user } })
    }

    return (
        <View style={styles.mainView}>
            <View style={styles.imageView}>
                <Image style={styles.image} source={require('../../../assets/icon.png')}></Image>
                <Text style={styles.title}>Intervention Ford</Text>
            </View>
            <View style={styles.bottomView}>
                <View style={styles.userInputView}>
                    <TextInput
                        style={styles.userInput}
                        mode='outlined'
                        label="Usuário"
                        onChangeText={user => {
                            setUser(user);
                            console.log(user)
                        }} />
                    <Button
                        style={styles.loginButton}
                        mode="contained"
                        buttonColor="#1E90FF"
                        onPress={handleLogin}
                    >Login</Button>
                </View>
            </View>
        </View>

    )
}