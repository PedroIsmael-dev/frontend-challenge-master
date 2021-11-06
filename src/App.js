import { useState, useEffect } from "react";

/* COMPONENTS */
import University from "./ui/components/university";

const App = () => {
    const [universities, setUniversities] = useState([]);

    useEffect(() => {
        const fetchUniversities = async () => {
            const res = await fetch('http://universities.hipolabs.com/search?country=Mexico')

            const newUniversities = await res.json();

            setUniversities(newUniversities);
        }

        fetchUniversities()
    }, []);

    return (
        <main>

            {/* HERO */}
            <div class="home-hero bg-primary-2 h-64 pt-16">
                <div class="container container--challenge text-white h-full flex flex-col items-center place-content-center">
                    <h2 class="text-4xl font-black uppercase mb-5">
                        Front-end coding challenge
                    </h2>
                    <p class="text-lg">
                        ¡{ universities.length } universities for you!
                    </p>
                </div>
            </div>
            <div class="hero-ribbon bg-white py-5 mb-5">
                <div class="container container--challenge">

                </div>
            </div>

            {/* LIST */}
            <div class="container container--challenge mb-20 bordev">
                {/* <DirectoryList offerList={fetchOffersList()} />
                <p>
                    lorem
                </p> */}
                <div class="offer-grid">
                    {
                        universities.map( university => {
                            return (
                                <p key={ university.id }>
                                    { university.name }
                                </p>
                            )
                        })
                    }
                </div>
            </div>
        </main>
    );
}

export default App;