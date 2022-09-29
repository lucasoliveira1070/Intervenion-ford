import { View, Text, Image, Pressable } from "react-native";
import { Button, ProgressBar } from 'react-native-paper';
import React, { useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles";
import { IconButton } from "react-native-paper";

export function AchievementDetail() {
    const navigation = useNavigation<any>();

    function handleBack() {
        navigation.goBack();
    }

    function handleClaimReward(){
        navigation.navigate('Reward',{})
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
            <Image style={styles.image} source={require("../../../assets/100km-icon.jpg")}></Image>
            <Text style={styles.title}>First 100 KM</Text>
            <Text style={styles.dateAcquired}>02/03/2022</Text>
            <Button icon='share' style={styles.shareButton} buttonColor="#FFAB1E" mode="contained">Share</Button>
            <View style={styles.cardTitle}>
                <Text style={styles.description}>Descrição</Text>
            </View>
            <View style={styles.descriptionCardView}>
                <View style={{ flexDirection: 'row', flex: 1 }}>
                    <Text style={styles.descriptionCardText}>Dirija 100 Kilômetros</Text>
                    <IconButton
                        style={styles.checkIcon}
                        icon="check-circle"
                        iconColor='green'
                        size={30}
                    />
                </View>
            </View>

            <View style={styles.cardTitle}>
                <Text style={styles.description}>Próximo Passo</Text>
            </View>
            <View style={styles.nextStepCardView}>
                <View style={{ flexDirection: 'row', flex: 1 }}>
                    <Text style={styles.nextStepText}>Dirija 200 Kilômetros</Text>
                    <Text style={styles.statusProgressBar}>50%</Text>
                </View>
                <ProgressBar style={styles.progressBar} progress={0.28} color='#FFAB1E'/>
            </View>


            <Button icon='gift' style={styles.claimButton} buttonColor="#FFAB1E" mode="contained" onPress={handleClaimReward}>Ver Recompensa</Button>
        </View>
    )
}