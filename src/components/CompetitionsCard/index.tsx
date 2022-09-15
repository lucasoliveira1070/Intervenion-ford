import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { RectButtonProps } from "react-native-gesture-handler";
import { Avatar, ProgressBar } from "react-native-paper";
import { styles } from "./styles";

interface Props extends RectButtonProps {
    data: {
        title: string,
        icon: string,
        color: string
    }
}

export default function CompetitionCard({ data }: Props) {
    let backgroundColor: string = data.color;
    return (
        <TouchableOpacity style={styles.card}>
            <Avatar.Icon style={{ backgroundColor: backgroundColor }} size={35} icon={data.icon} />
            <Text style={styles.cardTitle}>{data.title}</Text>
            <ProgressBar style={styles.progressBar} progress={0.35} color={data.color} />
        </TouchableOpacity>
    )

}