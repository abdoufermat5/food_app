import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text, FlatList, Image} from 'react-native';
import yelp from "../api/yelp";

const DetailScreen = ({ navigation }) => {
    const id = navigation.getParam('id');
    const [item, setItem] = useState(null)

    const getItem = async (id) => {
        const response = await yelp.get(`/${id}`);
        setItem(response.data);
    }

    useEffect(() => {
        getItem(id)
    }, [])
    if(!item){
        return null;
    }
    return (
        <View style={{ alignItems: 'center', backgroundColor: 'gray', flex: 1 }}>
            <Text> {item.name} </Text>
            <FlatList
                vertical
                showsVerticalScrollIndicator={false}
                data={item.photos}
                keyExtractor={photo => photo}
                renderItem={({item}) => {
                    return <Image
                                style={styles.imageStyle}
                                source={{uri: item}}/>

                }}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    imageStyle: {
        height: 200,
        width: 300,
        borderRadius: 5,
        marginTop: 10
    }
});

export default DetailScreen;