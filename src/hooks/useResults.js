import React, { useState, useEffect } from 'react';
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";


export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrors] = useState('');
    const searchApi = async (searchTerm) => {
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'san jose'
                }
            });
            setResults(response.data.businesses);
            setErrors('')
        }catch(error){
            setErrors('Something went wrong!')
        }
    }
    // searchApi('pasta')
    useEffect( () => {
        searchApi('pasta')
    }, [])

    return [searchApi, results, errorMessage]
}