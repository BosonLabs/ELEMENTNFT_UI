import React from 'react';
import {
    Link
  } from "react-router-dom";

const OnSale = () => {
    
    return (
        <div className='mb-4'>
            <div className="no-found py-5 text-center">
                <h2>No collections found</h2>
                <p className="lead mb-4">We couldn't find any of your collections. <br />Looks like you don't have any</p>
                <Link to="/" className='btn btn-primary'>Import an existing</Link>
            </div>
        </div>
    );
};

export default OnSale;