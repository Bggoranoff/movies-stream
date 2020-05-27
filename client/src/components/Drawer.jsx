import React from 'react';
import { Drawer as AntdDrawer } from 'antd';
import { Link } from 'react-router-dom';

function Drawer({ visible, setVisible, }) {
    const closeDrawer = () => setVisible(false);
    return (
        <AntdDrawer title={<h3>&#127909; Bomagflix</h3>} placement='left' closable='false' onClose={closeDrawer} visible={visible}>
            <Link className='drawer-link' to='/'>Categories</Link>
            <br />
            <Link className='drawer-link' to='/films/actionFilms'>Action Films</Link>
            <br />
            <Link className='drawer-link' to='/films/romanticFilms'>Romantic Films</Link>
            <br />
            <Link className='drawer-link' to='/films/fantasyFilms'>Fantasy Films</Link>
            <br />
            <Link className='drawer-link' to='/films/documentaries'>Documentaries</Link>
            <br />
            <Link className='drawer-link' to='/films/fictionFilms'>Fiction Films</Link>
            <br />
        </AntdDrawer>
    )
};

export default Drawer;