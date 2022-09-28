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
                <Text style={styles.description}>Description</Text>
            </View>
            <View style={styles.descriptionCardView}>
                <View style={{ flexDirection: 'row', flex: 1 }}>
                    <Text style={styles.descriptionCardText}>Drive 100 Kilometers</Text>
                    <IconButton
                        style={styles.checkIcon}
                        icon="check-circle"
                        iconColor='green'
                        size={30}
                    />
                </View>
            </View>

            <View style={styles.cardTitle}>
                <Text style={styles.description}>Next Step</Text>
            </View>
            <View style={styles.nextStepCardView}>
                <View style={{ flexDirection: 'row', flex: 1 }}>
                    <Text style={styles.nextStepText}>Drive 200 Kilometers</Text>
                    <Text style={styles.statusProgressBar}>50%</Text>
                </View>
                <ProgressBar style={styles.progressBar} progress={0.40} color='#FFAB1E'/>
            </View>

            <Button icon='gift-open' style={styles.claimButton} buttonColor="#FFAB1E" mode="contained">Claim Reward</Button>
        </View>
    )
}