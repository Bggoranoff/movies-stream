import React from 'react';

function Header({ setVisible }) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item bars-icon">
                        <button className="nav-link" style={{ border: '0px', backgroundColor: 'white' }} onClick={() => setVisible(true)}>&#9776;</button>
                    </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>
    )
};

export default Header;