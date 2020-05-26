import React from 'react';
import FilmBox from "./FilmBox";

function FilmsList(props) {
    return (
        <div className="grid-container">
            <FilmBox id={props.match.params.id} />
            <FilmBox id={props.match.params.id} />
            <FilmBox id={props.match.params.id} />
            <FilmBox id={props.match.params.id} />
            <FilmBox id={props.match.params.id} />
            <FilmBox id={props.match.params.id} />
        </div>
    )
};

export default FilmsList;