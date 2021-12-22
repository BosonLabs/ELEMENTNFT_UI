import React from 'react';
import Layout from './LayoutNoFooter';
import {Container, Button, Dropdown, Row, Col, Tabs, Tab} from 'react-bootstrap';
import {
    Link
  } from "react-router-dom";

const SingleBid = () => {
    return (
        <Layout>
            <Container fluid className='d-md-flex'>
                <div className="content-left d-flex">
                    <img src="https://img.rarible.com/prod/image/upload/t_big/prod-itemImages/0xf6793da657495ffeff9ee6350824910abc21356c:46386767890875363675912719809176821470837137778525415945768420073840868065291/6bd66461" alt="banner" />
                </div>
                <div className="content-right d-flex flex-column ms-auto">
                    <div className="d-flex mb-4">
                        <div>
                            <h2 className='mb-1'>innocence 9</h2>
                            <div className="category">Auction</div>
                        </div>
                        <div className="ms-auto d-flex align-items-center">
                            <Button variant='white' className='btn-count me-2 py-3 btn-rounded'>
                                <svg viewBox="0 0 17 16" fill="none" width="16" height="16" xlmns="http://www.w3.org/2000/svg" class="sc-bdvvtL sc-hKwDye fDKaYE sc-cnHmbd lkEDtX"><path d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z" stroke="currentColor" stroke-width="2"></path></svg>
                                5
                            </Button>

                            <Dropdown className='dropdown-noarrow'>
                                <Dropdown.Toggle variant="white" className='btn-round'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-three-dots" viewBox="0 0 16 16">
                                    <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
                                </svg>
                                </Dropdown.Toggle>

                                <Dropdown.Menu className='link-flex dropdown-menu-right'>
                                    <Dropdown.Item href="/">New bid</Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item href="/">Refresh Metadata</Dropdown.Item>
                                    <Dropdown.Item href="/">Share</Dropdown.Item>
                                    <Dropdown.Item href="/">Report</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div>

                    <Row className="bid-users mb-4">
                        <Col>
                            <h6><span>Creator</span> 10% royalties</h6>

                            <Link to="/" className="avatar d-flex align-items-center text-truncate">
                                <img src="https://img.rarible.com/prod/image/upload/t_avatar_big/prod-users/0x668dfaefb6a473c13e5f0ab00893a3bedf85da04/avatar/QmZty95DGjiZ8ZMbBKdpRmmgyvo2kCXvtgC5FxCqYZtRuu" alt="avatar" />
                                <span>Elena Moretti</span>
                            </Link>
                        </Col>
                        <Col>
                            <h6>Collection</h6>

                            <Link to="/" className="avatar d-flex align-items-center text-truncate">
                                <img src="https://img.rarible.com/prod/image/upload/t_avatar_big/prod-users/0x668dfaefb6a473c13e5f0ab00893a3bedf85da04/avatar/QmZty95DGjiZ8ZMbBKdpRmmgyvo2kCXvtgC5FxCqYZtRuu" alt="avatar" />
                                <span>Rarible Singles</span>
                            </Link>
                        </Col>
                    </Row>

                    <Tabs defaultActiveKey="details" id="bids-tabs" className="mb-4 nav-tabs-start">
                        <Tab eventKey="details" title="Details">
                            <div className="mb-4">
                                <h6 className='subheading'>Owner</h6>
                                <Link to="/" className="avatar d-flex align-items-center text-truncate">
                                    <img src="https://img.rarible.com/prod/image/upload/t_avatar_big/prod-users/0x668dfaefb6a473c13e5f0ab00893a3bedf85da04/avatar/QmZty95DGjiZ8ZMbBKdpRmmgyvo2kCXvtgC5FxCqYZtRuu" alt="avatar" />
                                    <span>Elena Moretti</span>
                                </Link>
                            </div>
                            <div className="mb-4">
                                <h6 className='subheading'>Blockchain</h6>
                                <div className="avatar d-flex align-items-center text-truncate">
                                    <img src="https://img.rarible.com/prod/image/upload/t_avatar_big/prod-users/0x668dfaefb6a473c13e5f0ab00893a3bedf85da04/avatar/QmZty95DGjiZ8ZMbBKdpRmmgyvo2kCXvtgC5FxCqYZtRuu" alt="avatar" />
                                    <span>Ethereum</span>
                                </div>
                            </div>
                        </Tab>
                        <Tab eventKey="bids" title="Bids">
                            <div className="no-found py-5p text-gray text-center">
                                <svg viewBox="0 0 12 16" fill="none" width="38" height="38" xlmns="http://www.w3.org/2000/svg" class="sc-bdvvtL mb-3 sc-hKwDye jggBKf"><path d="M7.00146 0V6H11.0015L4.00146 16V10H0.00146484L7.00146 0Z" fill="currentColor"></path></svg>
                                <p className="lead mb-4">No active bids yet. Be the <br />first to make a bid!</p>
                            </div>
                        </Tab>
                        <Tab eventKey="history" title="History">
                            <div className="no-found py-5p text-gray text-center">
                                <svg viewBox="0 0 12 16" fill="none" width="38" height="38" xlmns="http://www.w3.org/2000/svg" class="sc-bdvvtL mb-3 sc-hKwDye jggBKf"><path d="M7.00146 0V6H11.0015L4.00146 16V10H0.00146484L7.00146 0Z" fill="currentColor"></path></svg>
                                <p className="lead mb-4">No history entries found</p>
                            </div>
                        </Tab>
                    </Tabs>

                    <div className="sticky-bottom mt-auto text-center">
                        <Row className='mb-3'>
                            <Col xs={6}>
                                <Button variant='primary' className='w-100 mw-auto px-0' size='lg'>Place a bid</Button>
                            </Col>
                            <Col xs={6}>
                                <Button variant='light-blue' className='w-100 mw-auto px-0' size='lg'>Share</Button>
                            </Col>
                        </Row>
                        <p>There's no bids yet. Be the first!</p>
                    </div>
                </div>
            </Container>
        </Layout>
    );
};

export default SingleBid;