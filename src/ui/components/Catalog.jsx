import React from 'react';
import University from './University';

const Catalog = ({ universities, loading }) => {
    if ( loading ) {
        return (
            <div className="offer-grid">
                {[...Array(12)].map((x, i) =>
                    <div className="catalog-item-placeholder"></div>
                )}
            </div>
        );
    }

    return (
        <div className="offer-grid">
            {
                universities.map( university => {
                    return (
                        <University data={ university }/>
                    )
                })
            }
        </div>
    );
}

export default Catalog;
