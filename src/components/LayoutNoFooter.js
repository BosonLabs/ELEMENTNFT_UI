import React from 'react';
import Header from './Header';

function Layout(props) {
    return (
        <div id="wrapper">
            <Header />
            {props.children}
        </div>
    );
}

export default Layout;