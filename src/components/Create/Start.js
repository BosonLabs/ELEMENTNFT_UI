import React from 'react';
import Layout from '../Layout';
import {Container, Row, Col, Card, Button, Badge, Modal, Form} from 'react-bootstrap';
import {
    Link
  } from "react-router-dom";

import Eth from '../../assets/images/eth-icon.svg';
import Flow from '../../assets/images/flow-icon.svg';
import Tezos from '../../assets/images/tezos-icon.svg';
import CardIcon from '../../assets/images/card-icon.png';

const Start = () => {
    const [showEth, setShowEth] = React.useState(false);

    const handleCloseEth = () => setShowEth(false);
    const handleShowEth = () => setShowEth(true);

    const [show, setShow] = React.useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <Layout>
            <Container>
                <div className="py-md-5 py-4">
                    <Row className='mb-5'>
                        <Col md={8} lg={6}>
                            <h1 className='mb-3'>Choose Blockchain</h1>
                            <p className="lead">Choose the most suitable blockchain for your needs. You need to sign in for creation</p>
                        </Col>
                    </Row>

                    <Row className='text-md-center signup-cards'>
                        <Col md={4} className='mb-3'>
                            <Card>
                                <Card.Body>
                                    <div className="d-flex mt-md-4 mb-md-0 mb-4 d-md-block align-items-center">
                                        <img src={Eth} alt="icon" />
                                        <div className='ms-3 ms-ms-0'>
                                            <h3>Ethereum</h3>
                                            <p>The most stable and widespread</p>
                                        </div>
                                    </div>

                                    <Button size="lg" variant='white' onClick={handleShowEth} className='mb-2'>Sign In</Button>
                                </Card.Body>
                            </Card>
                            <br />
                            <Card>
                                <Card.Body>
                                    <Badge className='badge-success'>Signed in</Badge>
                                    <div className="d-flex mt-md-4 mb-md-0 mb-4 d-md-block align-items-center">
                                        <img src={Eth} alt="icon" />
                                        <div className='ms-3 ms-ms-0'>
                                            <h3>Ethereum</h3>
                                            <p>The most stable and widespread</p>
                                        </div>
                                    </div>

                                    <Button size="lg" variant='primary' className='mb-2'>Create</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} className='mb-3'>
                            <Card>
                                <Card.Body>
                                    <div className="d-flex mt-md-4 mb-md-0 mb-4 d-md-block align-items-center">
                                        <img src={Flow} alt="icon" />
                                        <div className='ms-3 ms-ms-0'>
                                            <h3>Flow</h3>
                                            <p>The cheapest for creating items</p>
                                        </div>
                                    </div>

                                    <Button size="lg" variant='white' onClick={handleShow} className='mb-2'>Sign In</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} className='mb-3'>
                            <Card>
                                <Card.Body>
                                    <div className="d-flex mt-md-4 mb-md-0 mb-4 d-md-block align-items-center">
                                        <img src={Tezos} alt="icon" />
                                        <div className='ms-3 ms-ms-0'>
                                            <h3>Tezos</h3>
                                            <p>The most secure and upgradable</p>
                                        </div>
                                    </div>

                                    <Button size="lg" variant='white' onClick={handleShow} className='mb-2'>Sign In</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </Container>

            <Modal show={showEth} centered size="sm" onHide={handleCloseEth}>
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body className='text-center text-dark'>
                    <h2>Sign in with <br />Ethereum wallet</h2>

                    <div className="py-4">
                        <Link to="/" className='mb-3 btn btn-primary text-white btn-login'>
                            <img src="https://rarible.com/3ca93659526bbbdf7bca.svg" alt="icon" />
                            <span>Install MetaMask</span>
                        </Link>
                        <Link to="/" className='mb-3 btn btn-login'>
                            <img src="https://rarible.com/6eb10dd4202620a6d06e.svg" alt="icon" />
                            <span>Torus</span>
                        </Link>
                        <Link to="/" className='mb-3 btn btn-login'>
                            <img src="https://rarible.com/46e9de883ee51bb6239f.png" alt="icon" />
                            <span>Mobile Wallet</span>
                        </Link>
                        <Link to="/" className='mb-3 btn btn-login btn-login-eq'>
                            <span>Show more options</span>
                        </Link>
                    </div>
                </Modal.Body>
            </Modal>

            <Modal show={show} centered size='sm' onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title><small>Sign in with Blocto</small></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="pt-5 text-dark text-center">
                        <img src={CardIcon} alt="icon" width="64px" className='mb-2' />
                        <p className='mb-3'><strong>Sign In</strong> <br />to continue to <strong>rarible.com</strong></p>

                        <Form>
                            <Form.Control className='form-single' type="email" placeholder="Email" />

                            <div className="pt-5">
                                <Button variant='info' size="lg" className='w-100'>Sign in / Register</Button>
                            </div>
                        </Form>
                    </div>
                </Modal.Body>
            </Modal>
        </Layout>
    );
};

export default Start;