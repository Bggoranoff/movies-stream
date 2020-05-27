import React from 'react';
import './App.css';
import Header from './Header';
import Drawer from './Drawer';

function Main({ Cmp, props }) {
    const [visible, setVisible] = React.useState(false);
    return (
            <div>
                <Header setVisible={setVisible} />
                <Cmp {...props} />
                <Drawer visible={visible} setVisible={setVisible} />
            </div>
    );
};

export default Main;