import React from 'react';
import CategoryBox from './CategoryBox';

function CategoryList() {
    return (
        <div className="grid-container">
            <CategoryBox name='Action Films' id='actionFilms' />
            <CategoryBox name='Romantic Films' id='romanticFilms' />
            <CategoryBox name='Fantasy Films' id='fantasyFilms' />
            <CategoryBox name='Documentaries' id='documentaries' />
            <CategoryBox name='Fiction Films' id='fictionFilms' />
        </div>
    )
};

export default CategoryList;