import React from 'react';
import {View, StyleSheet, Text, FlatList, TouchableOpacity} from 'react-native';
import ResultDetail from "./ResultDetail";
import {withNavigation} from "react-navigation";

const RestaurantList = ({title, results, navigation}) => {
    if (!results.length){
        return null;
    }
    return (
        <View style={styles.container}>
            <Text style={styles.titleStyle}>{title}</Text>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={results}
                keyExtractor={item => item.id}
                renderItem={({item}) => {
                    return (
                        <TouchableOpacity
                            onPress={() => navigation.navigate('ResultShow', {id: item.id})}>
                            <ResultDetail item={item}/>
                        </TouchableOpacity>
                        )
                }}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 10,
        marginBottom: 5
    },
    container: {
        marginBottom: 15
    }
});

export default withNavigation(RestaurantList);