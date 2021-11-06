import { useState, useEffect } from "react";
import Catalog from "./ui/components/Catalog";
import Pagination from "./ui/components/Pagination";

const App = () => {
    const [universities, setUniversities] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [universitiesPerPage] = useState(21);

    const fetchUniversities = async () => {
        const res = await fetch('http://universities.hipolabs.com/search?country=Mexico')

        const newUniversities = await res.json();

        setUniversities(newUniversities);
        setLoading(false)
    }

    useEffect(() => {
        fetchUniversities()
    }, []);

    // GET CURRENT UNIVERSITIES
    const indexOfLast = currentPage * universitiesPerPage;
    const indexOfFirst = indexOfLast - universitiesPerPage;
    const currentUniversities = universities.slice( indexOfFirst, indexOfLast )

    // CHANGE PAGE
    const paginate = ( pageNumber ) => setCurrentPage(pageNumber)

    return (
        <main>

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

            <div className="container container--challenge mb-20">

                {/* CATALOG */}
                <Catalog universities={ currentUniversities } loading={ loading }/>

                {/* PAGINATION */}
                <Pagination itemsPerPage={ universitiesPerPage } totalItems={ universities.length } currentPage={ currentPage } paginate={ paginate }></Pagination>
            </div>
        </main>
    );
}

export default App;