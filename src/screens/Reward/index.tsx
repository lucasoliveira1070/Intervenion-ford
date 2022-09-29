import { View, Text, Image, Pressable } from "react-native";
import { Button, ProgressBar } from 'react-native-paper';
import React, { useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles";
import { IconButton } from "react-native-paper";
import { UserContext } from "../../contexts/UserContext";

export function Reward() {
    const navigation = useNavigation<any>();
    const { user } = useContext(UserContext);

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
            <Image style={styles.image} source={require("../../../assets/tire-pile.jpg")}></Image>
            <Text style={styles.title}>First 100 Km</Text>
            <View style={styles.dateAcquiredView}>
                <Text style={styles.dateAcquired}>02/03/2022</Text>
                <IconButton
                    style={styles.checkIcon}
                    icon="check-circle"
                    iconColor='white'
                    size={15}
                />

            </View>
            <Text style={styles.partnership}>Goodyear partnership</Text>
            <View style={styles.cardTitle}>
                <Text style={styles.description}>Descrição</Text>
            </View>
            <View style={styles.descriptionCardView}>
                <View style={{ flexDirection: 'row', flex: 1 }}>
                    <Text style={styles.descriptionCardText}>{user}, graças a nossa parceria com a Goodyear, estamos felizes em lhe oferecer 2 trocas de pneus gratuitas.</Text>
                </View>
            </View>
            <View style={styles.cardTitle}>
                <Text style={styles.expiration}>Data de expiração: 31/12/2022</Text>
            </View>
            <Button icon='gift-open' style={styles.claimButton} buttonColor="#FFAB1E" mode="contained">Resgatar</Button>
        </View>
    )
}