import { useRoute } from "@react-navigation/native";
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
    const [loading, setLoading] = useState(true);
    const route = useRoute();
    const { data } = route.params as params;

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
                <Pressable >
                    <Text style={styles.navButton}>Overview</Text>
                </Pressable>
                <Pressable >
                    <Text style={styles.navButton}>Achievements</Text>
                </Pressable>
            </View>
            <HomeCard />
            <View style={styles.competitionsViewUpper}>
                <View style={{ flexDirection: 'column' }}>
                    <Text style={styles.competitionsTitle}>Competitions</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ flexDirection: 'row', flex: 1 }}>
                            <CompetitionCard data={{ title: 'Ford Family', icon: 'account-group', color: '#1E90FF', route: 'Login' }} />
                            <CompetitionCard data={{ title: 'Ford Trip', icon: 'trophy-variant', color: '#FFAB1E', route: 'Login' }} />
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ flexDirection: 'row', flex: 1 }}>
                            <CompetitionCard data={{ title: 'While Ford', icon: 'check-bold', color: '#BC62FF', route: 'Login' }} />
                            <CompetitionCard data={{ title: 'Ford Fidelity', icon: 'medal', color: '#7FFF62', route: 'Login' }} />
                        </View>
                    </View>
                </View>
            </View>
        </View>

    )
}