import React, {useState} from 'react';
import {AsyncPaginate} from "react-select-async-paginate";
import {geoApiOptions} from "../../api";
import axios from "axios";

const Search = ({onSearchChange}) => {

    const [search, setSearch] = useState(null)

    const loadOptions = async (inputValue) => {
        try {
            const response = await axios.request(
                {
                    ...geoApiOptions,
                    params: {
                        minPopulation: '1000000',
                        namePrefix: inputValue
                    }
                });
            return {
                options: response.data.data.map((city) => {
                    return {
                        value: `${city.latitude} ${city.longitude}`,
                        label: `${city.name}, ${city.countryCode}`,
                    }
                })
            }
        } catch (error) {
            console.error(error);
        }
    }

    const handleOnChange = (searchData) => {
        setSearch(searchData)
        onSearchChange(searchData)
    }

    return (
        <AsyncPaginate
            placeholder="Поиск города"
            debounceTimeout={600}
            value={search}
            onChange={handleOnChange}
            loadOptions={loadOptions}
        />
    );
};

export default Search;