import React from 'react';

const Pagination = ({ itemsPerPage, totalItems, currentPage, paginate }) => {
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil( totalItems / itemsPerPage ); i++) {
        pageNumbers.push(i)
    }

    return (
        <nav className="pagination mx-auto">
            <ul className="pagination-list">
                { pageNumbers.map( number => (
                    <li className="pagination-item" key={ number }>
                        <a className={`pagination-link ${number === currentPage && "active"}`} onClick={ () => paginate(number) } href="#">
                            { number }
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Pagination;
