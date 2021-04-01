import React, { useState, useEffect } from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import SearchBar from "../components/SearchBar";
import RestaurantList from "../components/RestaurantList";
import useResults from "../hooks/useResults";


const SearchScreen = (props) => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults()
    const filterResultsByPrice = (price) => {
        return results.filter(result => result.price === price)
    }
    return (
         <>
             <SearchBar
                 term={term}
                 onSearchTermChange={setTerm}
                 onTermSubmit={() => searchApi(term)}
             />
             {errorMessage ? <Text> {errorMessage}</Text>: null}
             <ScrollView>
                 <RestaurantList
                     title="Cost Effective"

                     results={filterResultsByPrice('$')}
                 />
                 <RestaurantList
                     title="Big Pricer"

                     results={filterResultsByPrice('$$')}
                 />
                 <RestaurantList
                     title="Big Spender"

                     results={filterResultsByPrice('$$$')}
                />
             </ScrollView>
         </>
    )
};

const styles = StyleSheet.create({

});

export default SearchScreen;