import React from 'react';
// import {Row, Col} from 'react-bootstrap';
import {
    Link
  } from "react-router-dom";

import Card from '../Card' 

const OnSale = () => {
    
    return (
        <div className='mb-4'>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-5">
                <div className='col mb-4'>
                    <Card verify={true} title="ArtificialPaintings R0034 by AI" count="401" subTitle={`<span>Highest bid</span> <span>1/1</span>`} linkText="0.221 WETH" />
                </div>
                <div className='col mb-4'>
                    <Card verify={true} title="ArtificialPaintings R0034 by AI" count="401" subTitle={`<span>Highest bid</span> <span>1/1</span>`} linkText="0.221 WETH" />
                </div>
                <div className='col mb-4'>
                    <Card verify={true} title="ArtificialPaintings R0034 by AI" count="401" subTitle={`<span>Highest bid</span> <span>1/1</span>`} linkText="0.221 WETH" />
                </div>
                <div className='col mb-4'>
                    <Card verify={true} title="ArtificialPaintings R0034 by AI" count="401" subTitle={`<span>Highest bid</span> <span>1/1</span>`} linkText="0.221 WETH" />
                </div>
                <div className='col mb-4'>
                    <Card verify={true} title="ArtificialPaintings R0034 by AI" count="401" subTitle={`<span>Highest bid</span> <span>1/1</span>`} linkText="0.221 WETH" />
                </div>
                <div className='col mb-4'>
                    <Card verify={true} title="ArtificialPaintings R0034 by AI" count="401" subTitle={`<span>Highest bid</span> <span>1/1</span>`} linkText="0.221 WETH" />
                </div>
                <div className='col mb-4'>
                    <Card verify={true} title="ArtificialPaintings R0034 by AI" count="401" subTitle={`<span>Highest bid</span> <span>1/1</span>`} linkText="0.221 WETH" />
                </div>
                <div className='col mb-4'>
                    <Card verify={true} title="ArtificialPaintings R0034 by AI" count="401" subTitle={`<span>Highest bid</span> <span>1/1</span>`} linkText="0.221 WETH" />
                </div>
            </div>
            <div className="no-found d-none py-5 text-center">
                <h2>No collections found</h2>
                <p className="lead mb-4">We couldn't find any of your collections. <br />Looks like you don't have any</p>
                <Link to="/" className='btn btn-primary'>Import an existing</Link>
            </div>
        </div>
    );
};

export default OnSale;