import React from "react"
import { RectButtonProps, TouchableOpacity } from "react-native-gesture-handler"
import { Text, View } from "react-native"
import { styles } from "./styles"
import { Avatar } from "react-native-paper"

interface Props extends RectButtonProps {
    data: {
        title: string,
        icon: string,
        color: string,
        route: string,
        aquired: boolean
    }
}
export default function Achievement({ data }: Props) {
    let backgroundColor: string = data.color;
    let acquire: boolean = data.aquired;

    return (
        <TouchableOpacity style={[styles.card, acquire ? styles.cardAchievementAcquired : styles.card]}>
            <View style={{ flexDirection: 'row' }}>
                <Avatar.Icon style={{ backgroundColor: backgroundColor, borderRadius: 12 }} size={35} icon={data.icon} />
                <Text style={styles.cardTitle}>{data.title}</Text>
            </View>
        </TouchableOpacity>
    )
}