import React from 'react';
import testUBg from '../../assets/images/pages/test-students.jpg'

const University = ( {data} ) => {
    return (
        <a className="university-item" href={ data.web_pages } target="_blank">
            <div className="university-item-img bg-auto bg-no-repeat bg-center rounded-t-md" style={{backgroundImage: `url(${ testUBg })`}}></div>

            <div className="relative p-4 pt-5">
                <div className="university-item-badge text-white text-sm absolute top-0 right-0 py-1 px-2 rounded -mt-4 mr-4 bg-orange-1">
                    { data.country }
                </div>
                <div className="text-lg font-medium mb-2">
                    { data.name }
                </div>
                <div className="text-sm text-link">
                    { data.domains }
                </div>
            </div>
            
        </a>
    );
}

export default University;
