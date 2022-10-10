import { View, Text, Image, Share } from "react-native";
import { Button, ProgressBar } from 'react-native-paper';
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { styles } from "./styles";
import { IconButton } from "react-native-paper";
import { Achievement } from "../../common/models/Achievement";

interface Params {
    achievement: Achievement
}
export function AchievementDetail() {
    const navigation = useNavigation<any>();
    const route = useRoute();
    const { achievement } = route.params as Params;

    const onShare = async () => {
        try {
            const result = await Share.share({
                message:
                    'Compartilhar',
            });
        } catch (error) {
            alert('Ocorreu um erro!');
        }
    };

    function handleBack() {
        navigation.goBack();
    }

    function handleClaimReward() {
        navigation.navigate('Reward', {
            data: {
                achievementId: achievement.id,
                color: achievement.color
            }
        })
    }

    return (
        <View style={styles.mainView}>
            <View style={styles.backButtonView}>
                <IconButton
                    icon="arrow-left"
                    size={26}
                    style={styles.backIcon}
                    onPress={handleBack}
                    iconColor='white'
                />
            </View>
            <Image style={styles.image} source={require("../../../assets/achievement.jpg")}></Image>
            <Text style={styles.title}>{achievement.title}</Text>
            <Text style={styles.dateAcquired}>02/03/2022</Text>
            <Button icon='share' onPress={onShare} style={styles.shareButton} buttonColor={achievement.color} mode="contained">Share</Button>
            <View style={styles.cardTitle}>
                <Text style={styles.description}>Descrição</Text>
            </View>
            <View style={styles.descriptionCardView}>
                <View style={{ flexDirection: 'row', flex: 1 }}>
                    <Text style={styles.descriptionCardText}>{achievement.description}</Text>

                </View>
            </View>

            <View style={styles.cardTitle}>
                <Text style={styles.description}>Próximo Passo</Text>
            </View>
            <View style={styles.nextStepCardView}>
                <View style={{ flexDirection: 'row', flex: 1 }}>
                    <View style={{ flex: 1 }}>
                        <Text style={styles.nextStepText}>{achievement.nextStep}</Text>
                    </View>
                    <View style={{ paddingRight: 10, paddingTop: 3 }}>
                        <Text style={styles.statusProgressBar}>50%</Text>
                    </View>
                </View>
                <ProgressBar style={styles.progressBar} progress={0.28} color={achievement.color} />
            </View>


            <Button icon='gift' style={styles.claimButton} buttonColor={achievement.color} mode="contained" onPress={handleClaimReward}>Ver Recompensa</Button>
        </View>
    )
}