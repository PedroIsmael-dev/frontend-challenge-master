import { useState, useEffect } from "react";
import axios from "axios";

/* SVG */
import { default as logo } from '../src/assets/images/layout/logo.svg'
import { default as iconFilter } from '../src/assets/images/helpers/icon-filter.svg'

/* COMPONENTS */
import Catalog from "./ui/components/Catalog";
import Pagination from "./ui/components/Pagination";
import Search from "./ui/components/Search";

const App = () => {
    const [dataUniversities, setDataUniversities] = useState([]);
    const [universities, setUniversities] = useState([]);
    const [search, setSearch] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(21);

    /* GET UNIVERSITIES */
    const fetchUniversities = async () => {
        await axios.get('http://universities.hipolabs.com/search?country=Mexico')
        .then( res => {
            setUniversities(res.data)
            setDataUniversities(res.data)
            setLoading(false)
        }).catch( error => {
            console.log(error);
        })
    }

    /* FILTER SEARCH */
    const filterSearch = ( searchTerm ) => {
        var searchResults = dataUniversities.filter(( element ) => {
            if ( element.name.toString().toLowerCase().includes( searchTerm.toLowerCase() )) {
                return element
            }
        })

        setUniversities( searchResults )
    }

    /* HANDLE SEARCH */
    const handleChange = e => {
        setCurrentPage(1)
        setSearch(e.target.value)
        filterSearch(e.target.value);
    }

    /* SORT ARRAY - A - Z */
    const sortArray = () => {
        const sorted = [...universities].sort(( a, b ) => {
            const nameA = a.name.toLowerCase();
            const nameB = b.name.toLowerCase();

            if ( nameA < nameB ) {
                return -1
            }

            if ( nameA > nameB ) {
                return 1
            }

            return 0
        })

        setUniversities(sorted)
        setCurrentPage(1)
    }

    useEffect(() => {
        fetchUniversities()
    }, []);

    // GET CURRENT UNIVERSITIES
    const indexOfLast = currentPage * itemsPerPage;
    const indexOfFirst = indexOfLast - itemsPerPage;
    const currentUniversities = universities.slice( indexOfFirst, indexOfLast )

    // CHANGE PAGE
    const paginate = ( pageNumber ) => setCurrentPage(pageNumber)

    return (
        <main className="main-app">

            {/* HEADER */}
            <header class="main-header">
                <div class="container container--challenge h-full flex flex-col sm:flex-row sm:items-center font-bold">

                    <div class="text-xl md:text-2xl text-primary-1 flex mb-4 sm:mb-0">
                        <img class="-mt-1 mr-4" width={44} src={ logo } alt="logo challenge"/>
                        Universities of mexico
                    </div>

                    {/* SEARCH */}
                    <Search search={ search } handleChange={ handleChange }/>
                </div>
            </header>

            {/* HERO */}
            <div className="home-hero bg-gradient-blue h-80 sm:h-64 pt-24 sm:pt-16">
                <div className="container container--challenge text-white h-full flex flex-col items-center place-content-center">
                    <h2 className="text-2xl xl:text-4xl text-center font-black uppercase mb-5">
                        Front-end coding challenge
                    </h2>
                    <p className="xl:text-lg">
                        ??{ universities.length } Universities for you!
                    </p>
                </div>
            </div>

            {/* RIBBON ACTIONS */}
            <div className="bg-white py-4 mb-8">
                <div className="container container--challenge">

                    {/* BTN SORT */}
                    <button className="btn btn--secondary ml-auto" onClick={() => sortArray()}>
                        Sort by letter
                        <img className="ml-3" width={18} src={ iconFilter } alt="icon filter"/>
                    </button>
                </div>
            </div>

            <div className="container container--challenge mb-20 min-h-screen">

                {/* CATALOG */}
                <Catalog universities={ currentUniversities } loading={ loading }/>
                
                {/* PAGINATION */}
                <Pagination itemsPerPage={ itemsPerPage } totalItems={ universities.length } currentPage={ currentPage } paginate={ paginate }></Pagination>

                {/* NOT FOUND */}
                { universities.length === 0 && 
                    <p className="opacity-60 text-center mt-20"> 
                        There are no items for this search, try again
                    </p>
                }
            </div>

            {/* FOOTER */}
            <footer class="main-footer bg-gradient-blue py-4 grid place-items-center">
                <div class="text-xs sm:text-sm text-white font-medium uppercase">
                    Front-end coding challenge 2021 - Pedro Ismael
                </div>
            </footer>
        </main>
    );
}

export default App;