import React from 'react';
import testUBg from '../../assets/images/pages/test-students.jpg'

const University = ( {data} ) => {
    return (
        <a className="university-item" href={ data.web_pages } target="_blank">
            <div className="university-item-img bg-auto bg-no-repeat bg-center rounded sm:rounded-b-none rounded-t-md" style={{backgroundImage: `url(${ testUBg })`}}></div>

            <div className="relative p-4 py-7 sm:pt-5">
                <div className="university-item-badge text-white text-xs md:text-sm absolute top-0 right-0 py-1 px-2 rounded -mt-2 sm:-mt-4 mr-4 bg-orange-1">
                    { data.country }
                </div>
                <div className="university-item-title text-white sm:text-current text-lg font-medium">
                    { data.name }
                </div>

                { data.domains.map( domain => (
                    <div className="university-item-domine text-white sm:text-blue-400 text-sm  mt-2">
                        { domain }
                    </div>
                ))}
            </div>
            
        </a>
    );
}

export default University;
