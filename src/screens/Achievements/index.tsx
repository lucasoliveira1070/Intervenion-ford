import { View, Text, Keyboard } from "react-native";
import React, { useContext } from "react";
import { styles } from "./styles";
import { IconButton, Searchbar } from "react-native-paper";
import { ScrollView, TouchableWithoutFeedback } from "react-native-gesture-handler";
import Achievement from "../../components/Achievement";
import { useNavigation } from "@react-navigation/native";
import { UserContext } from "../../contexts/User/UserContext";

export function Achievements() {
    const navigation = useNavigation<any>();
    const [searchQuery, setSearchQuery] = React.useState('');
    const user = useContext(UserContext);

    function handleReturnButton() {
        navigation.goBack();
    }

    function handleAchievementDetail() {
        console.log('botao apertado')
        navigation.navigate('AchievementDetail', {})
    }

    const onChangeSearchQuery = (query: string) => setSearchQuery(query)
    return (
        <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss() }}>
            <View style={styles.mainView}>
                <View style={styles.header}>
                    <View style={{ width: '33%' }}>
                        <IconButton
                            icon="arrow-left"
                            size={26}
                            onPress={handleReturnButton}
                            style={styles.backIcon}
                            iconColor='white'
                        />
                    </View>
                    <View style={{ width: '33%', marginLeft: '4%' }}>
                        <Text style={styles.title}>Conquistas</Text>
                    </View>
                    <View style={{ width: '33%' }}>
                        <IconButton
                            style={styles.accountIcon}
                            icon="account"
                            iconColor='white'
                            size={26}
                            mode='contained-tonal'
                        />
                    </View>
                </View>
                <View style={styles.searchBarView}>
                    <Searchbar
                        style={styles.searchBar}
                        placeholder="Pesquisar"
                        onChangeText={onChangeSearchQuery}
                        value={searchQuery}
                    />
                </View>
                <ScrollView style={styles.achievementsList}>
                    {user.user?.achievements?.map(achievement => {
                        return (
                            <Achievement key={achievement.id} data={{ title: achievement.title, color: '#FFAB1E', icon: 'trophy-variant', route: 'Reward1', aquired: false, onPress: handleAchievementDetail }} />
                        )
                    })}
                </ScrollView>
            </View>
        </TouchableWithoutFeedback>
    )
}