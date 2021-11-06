import { useState, useEffect } from "react";
import axios from "axios";

/* IMAGES */
import { default as logo } from '../src/assets/images/helpers/icon-book.svg'

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
        <main>

            {/* HEADER */}
            <header class="main-header">
                <div class="container container--challenge h-full flex items-center font-bold">

                    <div class="text-2xl text-primary-1 flex">
                        <img class="-mt-1 mr-4" width={44} src={ logo } />
                        Universities of mexico
                    </div>

                    {/* SEARCH */}
                    <Search search={ search } handleChange={ handleChange }/>
                </div>
            </header>

            {/* HERO */}
            <div className="home-hero bg-primary-2 h-64 pt-16 mb-8">
                <div className="container container--challenge text-white h-full flex flex-col items-center place-content-center">
                    <h2 className="text-4xl font-black uppercase mb-5">
                        Front-end coding challenge
                    </h2>
                    <p className="text-lg">
                        ¡{ universities.length } Universities for you!
                    </p>
                </div>
            </div>

            <div className="container container--challenge mb-20 min-h-screen">

                {/* CATALOG */}
                <Catalog universities={ currentUniversities } loading={ loading }/>

                {/* PAGINATION */}
                <Pagination itemsPerPage={ itemsPerPage } totalItems={ universities.length } currentPage={ currentPage } paginate={ paginate }></Pagination>
            </div>

            {/* FOOTER */}
            <footer class="main-footer bg-primary-2 py-4 grid place-items-center">
                <div class="text-sm text-white font-medium uppercase">
                    Front-end coding challenge - 2021
                </div>
            </footer>
        </main>
    );
}

export default App;