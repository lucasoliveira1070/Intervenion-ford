import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View, Text, Image, ScrollView, Pressable } from "react-native";
import CompetitionCard from "../../components/CompetitionsCard";
import { HomeCard } from "../../components/HomeCard";
import { styles } from "./styles";

export function Home() {
    const [loading, setLoading] = useState(true);

    return (
        <View style={styles.mainView}>
            <View style={styles.rowView}>
                <Text style={styles.helloText}>Hello, Lucas</Text>
            </View>
            <View style={styles.rowView}>
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
                            <CompetitionCard data={{ title: 'Ford Family', icon: 'account-group', color: '#1E90FF' }} />
                            <CompetitionCard data={{ title: 'Ford Trip', icon: 'account-group', color: '#FFAB1E' }} />
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ flexDirection: 'row', flex: 1 }}>
                            <CompetitionCard data={{ title: 'While Ford', icon: 'account-group', color: '#BC62FF' }} />
                            <CompetitionCard data={{ title: 'Ford Fidelity', icon: 'account-group', color: '#7FFF62' }} />
                        </View>
                    </View>
                </View>

            </View>
        </View>

    )
}