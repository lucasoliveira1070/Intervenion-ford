import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useState } from "react";
import { View, Text, Image, ScrollView, Pressable } from "react-native";
import { RectButtonProps } from "react-native-gesture-handler";
import { Avatar, BottomNavigation, IconButton } from "react-native-paper";
import CompetitionCard from "../../components/CompetitionsCard";
import { HomeCard } from "../../components/HomeCard";
import { styles } from "./styles";

interface params {
    data: {
        user: string
    }

}
export function Home() {
    const route = useRoute();
    const navigation = useNavigation<any>();
    const { data } = route.params as params;

    const handleButtonAchievements = () => {
        navigation.navigate('Achievements',{});
    }

    return (
        <View style={styles.mainView}>
            <View style={styles.helloView}>
                <Text style={styles.helloText}>Hello, {data.user}</Text>
                <IconButton
                    style={styles.accountIcon}
                    icon="account"
                    iconColor='white'
                    size={30}
                    mode='contained-tonal'
                    onPress={() => console.log('Pressed')}
                />

            </View>
            <View style={styles.buttonsView}>
                <Pressable style={styles.navButton} >
                    <Text style={{
                        color: 'white',
                        fontWeight: "bold",
                    }}>Overview</Text>
                </Pressable>
                <Pressable onPress={handleButtonAchievements} style={styles.navButton}>
                    <Text style={{
                        color: 'white',
                        fontWeight: "bold",
                    }}>Achievements</Text>
                </Pressable>
            </View>
            <HomeCard data={{ progress: 0.50 }} />
            <View style={styles.competitionsViewUpper}>
                <View style={{ flexDirection: 'column' }}>
                    <Text style={styles.competitionsTitle}>Competitions</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ flexDirection: 'row', flex: 1 }}>
                            <CompetitionCard data={{ title: 'Ford Family', icon: 'account-group', color: '#1E90FF', route: 'Login', progress: 0.30 }} />
                            <CompetitionCard data={{ title: 'Ford Trip', icon: 'trophy-variant', color: '#FFAB1E', route: 'Login', progress: 0.50 }} />
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ flexDirection: 'row', flex: 1 }}>
                            <CompetitionCard data={{ title: 'While Ford', icon: 'check-bold', color: '#BC62FF', route: 'Login', progress: 0.60 }} />
                            <CompetitionCard data={{ title: 'Ford Fidelity', icon: 'medal', color: '#7FFF62', route: 'Login', progress: 0.20 }} />
                        </View>
                    </View>
                </View>
            </View>
        </View>

    )
}