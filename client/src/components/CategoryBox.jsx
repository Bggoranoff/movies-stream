import React from 'react';
import { Link } from 'react-router-dom';

function CategoryBox({ name, id }) {
    return (
        <div className="card" style={{ width: '27rem' }}>
            <img className="card-img-top" src="https://thumbs.dreamstime.com/b/vector-stylish-wallpaper-guns-ribbon-5882695.jpg" alt="Card image cap" />
            <div className="card-body">
                <h3 className="card-title">{name}</h3>
                <Link to={`/films/${id}`} className='btn btn-primary'>Browse</Link>
            </div>
        </div>
    )
};

export default CategoryBox;