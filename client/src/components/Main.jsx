import React from 'react';
import './App.css';
import Header from './Header';

function Main({ Cmp, props }) {
    return (
            <div>
                <Header />
                <Cmp {...props} />
            </div>
    );
};

export default Main;