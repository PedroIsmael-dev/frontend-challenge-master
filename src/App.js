import { useState, useEffect } from "react";
import Catalog from "./ui/components/Catalog";

const App = () => {
    const [universities, setUniversities] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchUniversities = async () => {
        const res = await fetch('http://universities.hipolabs.com/search?country=Mexico')

        const newUniversities = await res.json();

        setUniversities(newUniversities);
        setLoading(false)
    }

    useEffect(() => {
        fetchUniversities()
    }, []);

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

            {/* LIST */}
            <div className="container container--challenge mb-20">
                <Catalog universities={ universities } loading={ loading }/>
            </div>
        </main>
    );
}

export default App;