import { View, Text, Keyboard, RefreshControl } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { styles } from "./styles";
import { IconButton, Searchbar } from "react-native-paper";
import { ScrollView, TouchableWithoutFeedback } from "react-native-gesture-handler";
import Achievement from "../../components/Achievement";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { UserContext } from "../../contexts/User/UserContext";
import { api } from "../../hooks/useApi";
import { Achievement as AchievementModel } from '../../common/models/Achievement'

export function Achievements() {
    const navigation = useNavigation<any>();
    const [achievementsList, setAchievementsList] = useState<AchievementModel[]>();
    const [refreshing, setRefreshing] = React.useState(false);
    const [searchQuery, setSearchQuery] = React.useState('');
    const user = useContext(UserContext);

    const fetchAchievements = async () => {
        try {
            const achievements: any = await api.get<AchievementModel>(`achievements/userachievements/${user.user?.id}`)
            setAchievementsList(achievements.data)
        } catch (error) {
            console.log(error)
        }

    }

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        fetchAchievements().then(() => setRefreshing(false));
    }, []);

    useEffect(() => {
        fetchAchievements();
    }, [])

    const handleReturnButton = () => {
        navigation.goBack();
    }

    const onChangeSearchQuery = (query: string) => {
        setSearchQuery(query)
    }
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
                <ScrollView refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />} contentContainerStyle={{ paddingBottom: 25 }} style={styles.achievementsList}>
                    {achievementsList?.map(achievement => {
                        return (
                            <Achievement key={achievement.id} data={{
                                title: achievement.title, color: achievement.color, icon: achievement.icon, route: achievement.route, aquired: achievement.acquired, imagePath: achievement.imagePath, onPress: () => {
                                    navigation.navigate('AchievementDetail', { achievement })
                                }
                            }} />
                        )
                    })}
                </ScrollView>
            </View>
        </TouchableWithoutFeedback>
    )
}