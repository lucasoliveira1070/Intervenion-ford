import { useNavigation } from "@react-navigation/native";
import React, { useContext } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { IconButton } from "react-native-paper";
import CompetitionCard from "../../components/CompetitionsCard";
import { HomeCard } from "../../components/HomeCard";
import { UserContext } from "../../contexts/User/UserContext";
import { styles } from "./styles";

export function Home() {
    const navigation = useNavigation<any>();
    const {user} = useContext(UserContext)
    
    function handleButtonAchievements() {
        navigation.navigate('Achievements', {});
    }
    return (
        <View style={styles.mainView}>
            <View style={styles.helloView}>
                <Text style={styles.helloText}>Olá, {user?.name}</Text>
                <IconButton
                    style={styles.accountIcon}
                    icon="account"
                    iconColor='white'
                    size={30}
                    mode='contained-tonal'
                />

            </View>
            <View style={styles.buttonsView}>
                <TouchableOpacity style={styles.navButton} >
                    <Text style={{
                        color: 'white',
                        fontWeight: "bold",
                    }}>Visão Geral</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleButtonAchievements} style={styles.navButton}>
                    <Text style={{
                        color: 'white',
                        fontWeight: "bold",
                    }}>Conquistas</Text>
                </TouchableOpacity>
            </View>
            <HomeCard data={{ progress: 0.50 }} />
            <View style={styles.competitionsViewUpper}>
                <View style={{ flexDirection: 'column' }}>
                    <Text style={styles.competitionsTitle}>Competições</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ flexDirection: 'row', flex: 1 }}>
                            <CompetitionCard data={{ title: 'Ford Family', icon: 'account-group', color: '#1E90FF', route: 'Home', progress: 0.30 }} />
                            <CompetitionCard data={{ title: 'Ford Trip', icon: 'trophy-variant', color: '#FFAB1E', route: 'Home', progress: 0.50 }} />
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ flexDirection: 'row', flex: 1 }}>
                            <CompetitionCard data={{ title: 'While Ford', icon: 'check-bold', color: '#BC62FF', route: 'Home', progress: 0.60 }} />
                            <CompetitionCard data={{ title: 'Ford Fidelity', icon: 'medal', color: '#7FFF62', route: 'Home', progress: 0.20 }} />
                        </View>
                    </View>
                </View>
            </View>
        </View>

    )
}