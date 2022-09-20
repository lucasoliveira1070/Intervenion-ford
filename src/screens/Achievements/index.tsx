import { View, Text, Keyboard } from "react-native";
import React from "react";
import { styles } from "./styles";
import { IconButton, Searchbar } from "react-native-paper";
import { ScrollView, TouchableWithoutFeedback } from "react-native-gesture-handler";
import Achievement from "../../components/Achievement";
import { useNavigation } from "@react-navigation/native";

export function Achievements() {
    const navigation = useNavigation();
    const [searchQuery, setSearchQuery] = React.useState('');

    function handleReturnButton(){
        navigation.goBack();
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
                    <View style={{ width: '33%' }}>
                        <Text style={styles.title}>Achievements</Text>
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
                        placeholder="Search"
                        onChangeText={onChangeSearchQuery}
                        value={searchQuery}
                    />
                </View>
                <ScrollView style={styles.achievementsList}>
                    <Achievement data={{title:'First 100 Km',color:'#FFAB1E',icon:'trophy-variant',route:'Reward1',aquired:true}} />
                    <Achievement data={{title:'Ford Fan',color:'#7FFF62',icon:'medal',route:'Reward1',aquired:true}} />
                    <Achievement data={{title:'First Year',color:'#BC62FF',icon:'check-bold',route:'Reward1',aquired:true}} />
                    <Achievement data={{title:'3 years in a row',color:'#1E90FF',icon:'account-group',route:'Reward1',aquired:true}} />
                    <Achievement data={{title:'Second Year',color:'#BC62FF',icon:'check-bold',route:'Reward1',aquired:true}} />
                    <Achievement data={{title:'Ford Enthusiast',color:'#7FFF62',icon:'medal',route:'Reward1',aquired:false}} />
                    <Achievement data={{title:'2 Ford products',color:'#1E90FF',icon:'account-group',route:'Reward1',aquired:false}} />
                    <Achievement data={{title:'200 Km',color:'#FFAB1E',icon:'trophy-variant',route:'Reward1',aquired:false}} />
                    <Achievement data={{title:'200 Km',color:'#FFAB1E',icon:'trophy-variant',route:'Reward1',aquired:false}} />
                    <Achievement data={{title:'200 Km',color:'#FFAB1E',icon:'trophy-variant',route:'Reward1',aquired:false}} />
                </ScrollView>
            </View>
        </TouchableWithoutFeedback>
    )
}