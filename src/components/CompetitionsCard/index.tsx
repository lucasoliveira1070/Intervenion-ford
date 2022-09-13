import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

export default function CompetitionCard() {
    return (
        <TouchableOpacity style={styles.card}>
            <View style={{flexDirection:'row'}}>
                <Text>Oi</Text>
            </View>
        </TouchableOpacity>
    )

}