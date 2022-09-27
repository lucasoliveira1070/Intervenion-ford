import React, { useState, useContext } from "react";
import { View, Text, Image, StyleSheet, SafeAreaView, TextInput, Button, Keyboard } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { styles } from "./styles";
import { UserContext } from "../../contexts/UserContext";

export function Login() {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    const { signIn } = useContext(UserContext);

    function handleLogin() {
        if (!user) {
            alert('Digite um nome de usuário')
            return;
        }
        signIn(user, password)
    }

    return (
        <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss() }}>
            <View style={styles.mainView}>
                <View style={styles.imageView}>
                    <Image style={styles.image} source={require('../../../assets/icon.png')}></Image>
                    <Text style={styles.title}>Intervention Ford</Text>
                </View>
                <SafeAreaView style={styles.userInputView}>
                    <TextInput
                        style={styles.userInput}
                        onChangeText={setUser}
                        placeholder='Usuário'
                    />
                    <TextInput
                        style={styles.userInput}
                        onChangeText={setPassword}
                        placeholder='Senha'
                        secureTextEntry={true}
                    />
                    <Button
                        title='Login'
                        color="#1E90FF"
                        onPress={handleLogin}
                    ></Button>
                </SafeAreaView>
            </View>
        </TouchableWithoutFeedback>

    )
}