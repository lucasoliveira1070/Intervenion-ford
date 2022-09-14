import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Button } from "react-native-paper";
import { styles } from "./styles";

export default function CompetitionCard() {
    return (
        <TouchableOpacity style={styles.card}>
            <View style={{flexDirection:'row'}}>
                <Text>Oi</Text>
                <Button buttonColor="black" icon="account">Teste</Button>
            </View>
        </TouchableOpacity>
    )

}