import React from 'react';
import { Link } from 'react-router-dom';

function FilmBox({ id }) {
    return (
        <div className="card" style={{ width: '27rem' }}>
            <img className="card-img-top" src="https://ichef.bbci.co.uk/news/1024/media/images/77396000/jpg/_77396213_kung-fu-panda-21.jpg" alt="Card cap" />
            <div className="card-body">
                <h3 className="card-title">Kung Fu Panda</h3>
                <h5 className="card-subtitle mb-2 text-muted">{id}</h5>
                <Link to="/films/download/123" className="card-link"><i className="fa fa-download" aria-hidden="true"></i></Link>
                <Link to="/films/watch/123" className="card-link"><i className="fa fa-eye" aria-hidden="true"></i></Link>
            </div>
        </div>
    )
};

export default FilmBox;