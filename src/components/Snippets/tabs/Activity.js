import React from 'react';
import {Row, Col} from 'react-bootstrap'
import {
    Link
  } from "react-router-dom";
import Filter from './filters';

const OnSale = () => {
    
    return (
        <div className='mb-4'>
            <Row>
                <Col md="8" lg="9">
                    <div className="no-found py-5 text-center">
                        <h2>Nothing yet</h2>
                        <p className="lead mb-4">Looks like there's still nothing. Activity will <br />be shown here</p>
                        <Link to="/" className='btn btn-primary'>Explore Rarible</Link>
                    </div>
                </Col>
                <Col md="4" lg="3">
                    <Filter />
                </Col>
            </Row>
            
        </div>
    );
};

export default OnSale;