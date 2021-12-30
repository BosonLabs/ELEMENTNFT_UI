import React from 'react';
import Layout from './Layout';
import {Container, Button, Row, Col} from 'react-bootstrap';
import {
    Link
  } from "react-router-dom";
import RariLogo from '../assets/images/rari-logo.png';

const Rari = () => {
    return (
        <Layout>
            <Container fluid="md">
                <div className="py-md-5 text-center py-4">
                    <div className="d-flex mb-4 justify-content-center">
                        <div className="rari-logo">
                            <img src={RariLogo} alt="icon" />
                        </div>
                    </div>
                    <h1 className='display-3 font-bold mb-2'>Meet $RARI - Rarible Protocol DAO Governance Token</h1>
                    <p className="lead mb-3">Every week, 41,250 $RARI tokens are distributed among applications building on Rarible Protocol (including Rarible.com), proportional to sales volumes.</p>
                    <p className="lead">If you made a sale or a purchase last week, you've got some $RARI rewards to claim!</p>
                </div>
                

                <div className="rari-info mb-4">
                    <Row>
                        <Col md={4} className='mb-md-0 mb-3'>
                            <h6>Your balance</h6>
                            <div className="h2 mb-0">0 RARI</div>
                        </Col>
                        <Col md={3} className='mb-md-0 mb-3'>
                            <h6>Available for claim</h6>
                            <div className="h2 mb-0">0 RARI</div>
                        </Col>
                        <Col md={5} className='d-flex align-items-center justify-content-center justify-content-md-end'>
                            <Button variant='default' size="lg">Nothing to claim</Button>
                            <Link to="/" className='btn ms-2 btn-round btn-round-lg btn-white'><svg viewBox="0 0 8 12" fill="none" width="16" height="16" xlmns="http://www.w3.org/2000/svg" class="sc-bdvvtL sc-hKwDye laCTrH"><path d="M4.65936 7.67C4.65936 6.995 5.01936 6.605 5.54436 6.215L6.11436 5.795C7.01436 5.12 7.56936 4.295 7.56936 3.095C7.56936 1.595 6.35436 0.139999 3.92436 0.139999C1.73436 0.139999 0.429355 1.625 0.429355 3.38C0.429355 3.575 0.444355 3.8 0.489355 4.01L2.58936 4.085C2.57436 4.025 2.54436 3.875 2.54436 3.53C2.54436 2.825 3.05436 2.12 3.92436 2.12C4.82436 2.12 5.25936 2.69 5.25936 3.275C5.25936 3.665 5.12436 4.025 4.71936 4.325L3.95436 4.895C3.09936 5.54 2.81436 6.305 2.81436 7.01C2.81436 7.25 2.82936 7.46 2.87436 7.67H4.65936ZM2.52936 9.86C2.52936 10.565 3.09936 11.15 3.81936 11.15C4.53936 11.15 5.12436 10.565 5.12436 9.86C5.12436 9.14 4.53936 8.555 3.81936 8.555C3.09936 8.555 2.52936 9.14 2.52936 9.86Z" fill="currentColor"></path></svg></Link>
                        </Col>
                    </Row>
                </div>

                <div className="py-5 rari-content px-md-5 text-center">
                    <h2 className='display-6 mb-4 font-bold'>How $RARI rewards are calculated for Rarible.com users</h2>

                    <p>$RARI rewards distribution on <Link to="/">Rarible.com</Link> is a part of Rarible Protocol DAO <Link to="/">App Mining program</Link> and is calculated dynamically each week.</p>

                    <div className="list-tree text-start mb-4 mt-5">
                        <div className="d-flex align-items-center">
                            <div className="list-count">1</div>
                            <div className="list-content">
                                <h5>A portion of the 41,250 $RARI distributed every week</h5>
                                <p>Proportional to sales, scaled quadratically</p>
                            </div>
                        </div>
                        <div className="d-flex align-items-center">
                            <div className="list-count">2</div>
                            <div className="list-content">
                                <h5>50% for buyers and 50% for sellers</h5>
                            </div>
                        </div>
                        <div className="d-flex align-items-center">
                            <div className="list-count">3</div>
                            <div className="list-content">
                                <h5>+15% $RARI for verified users</h5>
                            </div>
                        </div>
                        <div className="d-flex align-items-center">
                            <div className="list-count">4</div>
                            <div className="list-content">
                                <h5>-50% for NFTs created not on Rarible.com</h5>
                            </div>
                        </div>
                    </div>

                </div>
            </Container>
        </Layout>
    );
};

export default Rari;