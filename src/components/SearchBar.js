import React from 'react';
import {View, StyleSheet, Text, TextInput} from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({term, onSearchTermChange, onTermSubmit}) => {
    
    return (
        <View style={styles.backgroundStyle}>
            <Feather name="search" style={styles.iconStyle}/>
            <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Search" 
                style={styles.inputStyle}
                value={term}
                onChangeText={onSearchTermChange}
                onEndEditing={onTermSubmit}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    backgroundStyle: {
        marginTop: 15,
        backgroundColor: '#F0FFEE',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row',
        marginBottom: 10
    },
    inputStyle: {
        flex: 1,
        fontSize: 18
    },
    iconStyle: {
        fontSize: 40,
        alignSelf: 'center',
        marginHorizontal: 15
    }
});

export default SearchBar;