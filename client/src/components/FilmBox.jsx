import React from 'react';

function FilmBox({ id }) {
    return (
        <div className="card" style={{ width: '27rem' }}>
            <img className="card-img-top" src="https://ichef.bbci.co.uk/news/1024/media/images/77396000/jpg/_77396213_kung-fu-panda-21.jpg" alt="Card image cap" />
            <div className="card-body">
                <h3 className="card-title">Kung Fu Panda</h3>
                <h5 className="card-subtitle mb-2 text-muted">{id}</h5>
                <a href="#" className="card-link"><i className="fa fa-download" aria-hidden="true"></i>
                </a>
                <a href="#" className="card-link"><i className="fa fa-eye" aria-hidden="true"></i></a>
            </div>
        </div>
    )
};

export default FilmBox;