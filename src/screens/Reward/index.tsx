import { View, Text, Image, Pressable } from "react-native";
import { Button, ProgressBar } from 'react-native-paper';
import React, { useContext, useEffect, useState } from "react";
import { useFocusEffect, useNavigation, useRoute } from "@react-navigation/native";
import { styles } from "./styles";
import { IconButton } from "react-native-paper";
import { UserContext } from "../../contexts/User/UserContext";
import { RectButtonProps } from "react-native-gesture-handler";
import { Reward as RewardModel } from '../../common/models/Reward'
import { api } from "../../hooks/useApi";

interface Params {
    data: {
        achievementId: string;
        color: string;
    }
}
export function Reward() {
    const navigation = useNavigation<any>();
    const { user } = useContext(UserContext);
    const [reward, setReward] = useState<RewardModel>();
    const route = useRoute();
    const { data } = route.params as Params;

    const fetchReward = async () => {
        try {
            const reward: any = await api.get<RewardModel>(`rewards/${data.achievementId}`)
            setReward(reward.data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchReward();
    },[])

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
            <Image style={styles.image} source={require("../../../assets/gift.jpg")}></Image>
            <Text style={styles.title}>{reward?.title}</Text>
            <View style={styles.dateAcquiredView}>
                <Text style={styles.dateAcquired}>02/03/2022</Text>
                <IconButton
                    style={styles.checkIcon}
                    icon="check-circle"
                    iconColor='white'
                    size={15}
                />

            </View>
            <Text style={styles.partnership}>{reward?.sponsor}</Text>
            <View style={styles.cardTitle}>
                <Text style={styles.description}>Descrição</Text>
            </View>
            <View style={styles.descriptionCardView}>
                <View style={{ flexDirection: 'row', flex: 1 }}>
                    <Text style={styles.descriptionCardText}>{user?.name}, {reward?.description}</Text>
                </View>
            </View>
            <View style={styles.cardTitle}>
                <Text style={styles.expiration}>Data de expiração:  31/12/2022</Text>
            </View>
            <Button icon='gift-open' style={styles.claimButton} buttonColor={data.color} mode="contained">Resgatar</Button>
        </View>
    )
}