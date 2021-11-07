import React from 'react';

/* IMAGES */
import { default as iconSearch } from '../../assets/images/helpers/icon-search.svg'

const Search = ({ search, handleChange }) => {
    return (
        <div class="relative flex flex-wrap items-stretch ml-auto">
            <span class="z-10 h-full absolute grid place-items-center bg-transparent rounded text-base items-center justify-center w-11">
                <img width={ 16 } src={ iconSearch } alt=""/>
            </span>
            <input value={ search } type="search" placeholder="Search" class="px-2 py-2 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border border-gray-400 outline-none focus:outline-none focus:ring w-full pl-10" onChange={ handleChange }/>
        </div>
    );
}

export default Search;
