import React from 'react';
import Layout from '../Layout';
import {Container, Row, Col, Card} from 'react-bootstrap';
import {
    Link
  } from "react-router-dom";

const Start = () => {
    return (
        <Layout>
            <Container>
                <div className="py-md-5 py-4">
                    <Row className='mb-5'>
                        <Col md={8} lg={6}>
                            <h1 className='mb-3'>Choose Type</h1>
                            <p className="lead">Choose “Single” for one of a kind or “Multiple” if you want to sell one collectible multiple times</p>
                        </Col>
                    </Row>

                    <Row className='text-md-center signup-cards'>
                        <Col md={6} className='mb-3'>
                            <Link to="/">
                                <Card>
                                    <Card.Body>
                                        <div className="d-flex mt-md-4 d-md-block align-items-center">
                                            <img src="https://rarible.com/266f63b07dfa0c7a232b.png" alt="icon" />
                                            <div className='ms-3 ms-ms-0'>
                                                <h3>Single</h3>
                                                <p style={{maxWidth: '340px'}}>If you want to highlight the uniqueness and individuality of your item</p>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </Col>
                        <Col md={6} className='mb-3'>
                            <Link to="/">
                                <Card>
                                    <Card.Body>
                                        <div className="d-flex mt-md-4 d-md-block align-items-center">
                                            <img src="https://rarible.com/715e004b0e940213d5a0.png" alt="icon" />
                                            <div className='ms-3 ms-ms-0'>
                                                <h3>Multiple</h3>
                                                <p style={{maxWidth: '340px'}}>If you want to share your item with a large number of community members</p>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </Col>
                    </Row>
                </div>
            </Container>
        </Layout>
    );
};

export default Start;