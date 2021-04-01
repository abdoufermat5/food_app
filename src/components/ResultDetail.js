import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';

const ResultsDetail = ({item}) => {
    return (
        <View style={styles.viewStyle}>
            <Image
                style={styles.imageStyle}
                source={{uri: item.image_url}}
            />
            <Text style={styles.nameStyle}>{item.name}</Text>
            <Text>{item.rating} stars, {item.review_count}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    viewStyle: {
        marginLeft: 15
    },
    imageStyle:{
        width: 250,
        height: 220,
        borderRadius: 4,
        marginBottom: 5,
    },
    nameStyle: {
        fontSize: 18,
        fontWeight: 'bold'
    }
});

export default ResultsDetail;