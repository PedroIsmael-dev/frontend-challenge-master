import React from 'react';

const University = ( props ) => {
    return (
        <div class="university-item">
            <div class="university-item-img"></div>

            <div class="university-item-title">
                { props.name }
            </div>
            
        </div>
    );
}

export default University;
