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
                    <video playsInline={true} autoPlay={true} controls={true} loop={true} src="https://img.rarible.com/prod/video/upload/t_big/prod-itemAnimations/0x5c3daa7a35d7def65bfd9e99120d5fa07f63f555:10061/271db129"></video>
                </div>
                <div className="content-right d-flex flex-column ms-auto">
                    <div className="d-flex align-items-start mb-4">
                        <div>
                            <h2 className='mb-1'>CAPTAIN RG3 HEXICAN PIRATE</h2>
                            <div className="category">From <span className='text-dark'>0.06 ETH</span> · 474 of 500 available</div>
                        </div>
                        <div className="ms-auto d-flex align-items-center">
                            <Button variant='white' className='btn-count me-2 py-3 btn-rounded'>
                                <svg viewBox="0 0 17 16" fill="none" width="16" height="16" xlmns="http://www.w3.org/2000/svg" class="sc-bdvvtL sc-hKwDye fDKaYE sc-cnHmbd lkEDtX"><path d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z" stroke="currentColor" stroke-width="2"></path></svg>
                                50
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

                    <div className="mb-4 content-right-description">
                        <p>#0009 </p>
                        <p>"Gas Station Pills" </p>
                    </div>

                    <Row className="bid-users mb-4">
                        <Col>
                            <h6><span>Creator</span> 10% royalties</h6>

                            <Link to="/" className="avatar d-flex align-items-center text-truncate">
                                <svg width="14" height="14" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.78117 0.743103C5.29164 -0.247701 6.70826 -0.247701 7.21872 0.743103C7.52545 1.33846 8.21742 1.62509 8.8553 1.42099C9.91685 1.08134 10.9186 2.08304 10.5789 3.1446C10.3748 3.78247 10.6614 4.47445 11.2568 4.78117C12.2476 5.29164 12.2476 6.70826 11.2568 7.21872C10.6614 7.52545 10.3748 8.21742 10.5789 8.8553C10.9186 9.91685 9.91685 10.9186 8.8553 10.5789C8.21742 10.3748 7.52545 10.6614 7.21872 11.2568C6.70826 12.2476 5.29164 12.2476 4.78117 11.2568C4.47445 10.6614 3.78247 10.3748 3.1446 10.5789C2.08304 10.9186 1.08134 9.91685 1.42099 8.8553C1.62509 8.21742 1.33846 7.52545 0.743103 7.21872C-0.247701 6.70826 -0.247701 5.29164 0.743103 4.78117C1.33846 4.47445 1.62509 3.78247 1.42099 3.1446C1.08134 2.08304 2.08304 1.08134 3.1446 1.42099C3.78247 1.62509 4.47445 1.33846 4.78117 0.743103Z" fill="#feda03"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M8.43961 4.23998C8.64623 4.43922 8.65221 4.76823 8.45297 4.97484L5.40604 8.13462L3.54703 6.20676C3.34779 6.00014 3.35377 5.67113 3.56039 5.47189C3.76701 5.27266 4.09602 5.27864 4.29526 5.48525L5.40604 6.63718L7.70475 4.25334C7.90398 4.04672 8.23299 4.04074 8.43961 4.23998Z" fill="#000000"></path></svg>
                                <img src="https://img.rarible.com/prod/image/upload/t_avatar_big/prod-users/0x668dfaefb6a473c13e5f0ab00893a3bedf85da04/avatar/QmZty95DGjiZ8ZMbBKdpRmmgyvo2kCXvtgC5FxCqYZtRuu" alt="avatar" />
                                <span>HEX TOYS</span>
                            </Link>
                        </Col>
                        <Col>
                            <h6>Collection</h6>

                            <Link to="/" className="avatar d-flex align-items-center text-truncate">
                                <img src="https://img.rarible.com/prod/image/upload/t_avatar_big/prod-users/0x668dfaefb6a473c13e5f0ab00893a3bedf85da04/avatar/QmZty95DGjiZ8ZMbBKdpRmmgyvo2kCXvtgC5FxCqYZtRuu" alt="avatar" />
                                <span>HEX TOYS</span>
                            </Link>
                        </Col>
                    </Row>

                    <div className="mb-4 pt-2">
                        <Button className='w-100' size="lg" variant='light-grad'>
                            <span>
                                <svg viewBox="0 0 10 12" fill="none" width="16" height="16" xlmns="http://www.w3.org/2000/svg" class="sc-bdvvtL me-2 sc-hKwDye kpPkaN"><path fill-rule="evenodd" clip-rule="evenodd" d="M5 0.75C3.067 0.75 1.5 2.317 1.5 4.25V5.125C1.01675 5.125 0.625 5.51675 0.625 6V10.375C0.625 10.8582 1.01675 11.25 1.5 11.25H8.5C8.98325 11.25 9.375 10.8582 9.375 10.375V6C9.375 5.51675 8.98325 5.125 8.5 5.125V4.25C8.5 2.317 6.933 0.75 5 0.75ZM6.75 5.125V4.25C6.75 3.2835 5.9665 2.5 5 2.5C4.0335 2.5 3.25 3.2835 3.25 4.25V5.125H6.75Z" fill="currentColor"></path></svg>
                                Unlockable content included
                            </span>
                        </Button>
                    </div>

                    <Tabs defaultActiveKey="owners" id="bids-tabs" className="mb-4 nav-tabs-start">
                        <Tab eventKey="owners" title="Owners">
                            <div className="d-flex mb-4 align-items-center">
                                <Link to="/" className="avatar d-flex align-items-center text-truncate">
                                    <svg width="14" height="14" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.78117 0.743103C5.29164 -0.247701 6.70826 -0.247701 7.21872 0.743103C7.52545 1.33846 8.21742 1.62509 8.8553 1.42099C9.91685 1.08134 10.9186 2.08304 10.5789 3.1446C10.3748 3.78247 10.6614 4.47445 11.2568 4.78117C12.2476 5.29164 12.2476 6.70826 11.2568 7.21872C10.6614 7.52545 10.3748 8.21742 10.5789 8.8553C10.9186 9.91685 9.91685 10.9186 8.8553 10.5789C8.21742 10.3748 7.52545 10.6614 7.21872 11.2568C6.70826 12.2476 5.29164 12.2476 4.78117 11.2568C4.47445 10.6614 3.78247 10.3748 3.1446 10.5789C2.08304 10.9186 1.08134 9.91685 1.42099 8.8553C1.62509 8.21742 1.33846 7.52545 0.743103 7.21872C-0.247701 6.70826 -0.247701 5.29164 0.743103 4.78117C1.33846 4.47445 1.62509 3.78247 1.42099 3.1446C1.08134 2.08304 2.08304 1.08134 3.1446 1.42099C3.78247 1.62509 4.47445 1.33846 4.78117 0.743103Z" fill="#feda03"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M8.43961 4.23998C8.64623 4.43922 8.65221 4.76823 8.45297 4.97484L5.40604 8.13462L3.54703 6.20676C3.34779 6.00014 3.35377 5.67113 3.56039 5.47189C3.76701 5.27266 4.09602 5.27864 4.29526 5.48525L5.40604 6.63718L7.70475 4.25334C7.90398 4.04672 8.23299 4.04074 8.43961 4.23998Z" fill="#000000"></path></svg>
                                    <img src="https://img.rarible.com/prod/image/upload/t_avatar_big/prod-users/0x668dfaefb6a473c13e5f0ab00893a3bedf85da04/avatar/QmZty95DGjiZ8ZMbBKdpRmmgyvo2kCXvtgC5FxCqYZtRuu" alt="avatar" />
                                    <div>
                                        <span>HEX TOYS</span>
                                        <p>474/474 on sale for <span>0.06 ETH</span> each</p>
                                    </div>
                                </Link>

                                <Button variant='primary' className='ms-auto'>Buy</Button>
                            </div>
                            <div className="d-flex mb-4 align-items-center">
                                <Link to="/" className="avatar d-flex align-items-center text-truncate">
                                    <img src="https://img.rarible.com/prod/image/upload/t_avatar_big/prod-users/0x668dfaefb6a473c13e5f0ab00893a3bedf85da04/avatar/QmZty95DGjiZ8ZMbBKdpRmmgyvo2kCXvtgC5FxCqYZtRuu" alt="avatar" />
                                    <div>
                                        <span>DAIYOX</span>
                                        <p>1 edition <span>not for sale</span></p>
                                    </div>
                                </Link>
                            </div>
                            <div className="d-flex mb-4 align-items-center">
                                <Link to="/" className="avatar d-flex align-items-center text-truncate">
                                    <img src="https://img.rarible.com/prod/image/upload/t_avatar_big/prod-users/0x668dfaefb6a473c13e5f0ab00893a3bedf85da04/avatar/QmZty95DGjiZ8ZMbBKdpRmmgyvo2kCXvtgC5FxCqYZtRuu" alt="avatar" />
                                    <div>
                                        <span>0xd848904449c4c7d5421...4912</span>
                                        <p>1 edition <span>not for sale</span></p>
                                    </div>
                                </Link>
                            </div>
                        </Tab>
                        <Tab eventKey="bids" title="Bids">
                            <div className="no-found py-5p text-gray text-center">
                                <svg viewBox="0 0 12 16" fill="none" width="38" height="38" xlmns="http://www.w3.org/2000/svg" class="sc-bdvvtL mb-3 sc-hKwDye jggBKf"><path d="M7.00146 0V6H11.0015L4.00146 16V10H0.00146484L7.00146 0Z" fill="currentColor"></path></svg>
                                <p className="lead mb-4">No active bids yet. Be the <br />first to make a bid!</p>
                            </div>
                        </Tab>
                        <Tab eventKey="details" title="Details">
                            <div className="mb-4">
                                <h6 className='subheading'>Blockchain</h6>
                                <div className="avatar d-flex align-items-center text-truncate">
                                    <img src="https://rarible.com/9b703a21b9f93a1f0065.svg" alt="avatar" />
                                    <span>Ethereum</span>
                                </div>
                            </div>
                        </Tab>
                        <Tab eventKey="history" title="History">
                            <div className="d-flex mb-4 align-items-center">
                                <div className="avatar d-flex align-items-center text-truncate">
                                    <img src="https://img.rarible.com/prod/image/upload/t_avatar_big/prod-users/0x668dfaefb6a473c13e5f0ab00893a3bedf85da04/avatar/QmZty95DGjiZ8ZMbBKdpRmmgyvo2kCXvtgC5FxCqYZtRuu" alt="avatar" />
                                    <div>
                                        <span><span>Purchased 1 edition for</span> 0.06 ETH</span>
                                        <p>by <span>AppSec</span> 12/23/2021, 2:01 AM <Link to="/"><svg viewBox="0 0 12 12" fill="none" width="16" height="16" xlmns="http://www.w3.org/2000/svg" class="sc-bdvvtL sc-hKwDye vZMA-D"><path d="M3.69233 0.92308V0.92308C2.16292 0.92308 0.923096 2.16291 0.923096 3.69231V8.07693C0.923096 9.73378 2.26624 11.0769 3.9231 11.0769H8.30771C9.83712 11.0769 11.0769 9.8371 11.0769 8.3077V8.3077" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path><path d="M6.46143 0.92308H11.0768V5.53847" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path><path d="M11.077 0.92308L5.53857 6.46154" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path></svg></Link></p>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex mb-4 align-items-center">
                                <div className="avatar d-flex align-items-center text-truncate">
                                    <img src="https://img.rarible.com/prod/image/upload/t_avatar_big/prod-users/0x668dfaefb6a473c13e5f0ab00893a3bedf85da04/avatar/QmZty95DGjiZ8ZMbBKdpRmmgyvo2kCXvtgC5FxCqYZtRuu" alt="avatar" />
                                    <div>
                                        <span><span>Purchased 1 edition for</span> 0.06 ETH</span>
                                        <p>by <span>AppSec</span> 12/23/2021, 2:01 AM <Link to="/"><svg viewBox="0 0 12 12" fill="none" width="16" height="16" xlmns="http://www.w3.org/2000/svg" class="sc-bdvvtL sc-hKwDye vZMA-D"><path d="M3.69233 0.92308V0.92308C2.16292 0.92308 0.923096 2.16291 0.923096 3.69231V8.07693C0.923096 9.73378 2.26624 11.0769 3.9231 11.0769H8.30771C9.83712 11.0769 11.0769 9.8371 11.0769 8.3077V8.3077" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path><path d="M6.46143 0.92308H11.0768V5.53847" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path><path d="M11.077 0.92308L5.53857 6.46154" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path></svg></Link></p>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex mb-4 align-items-center">
                                <div className="avatar d-flex align-items-center text-truncate">
                                    <img src="https://img.rarible.com/prod/image/upload/t_avatar_big/prod-users/0x668dfaefb6a473c13e5f0ab00893a3bedf85da04/avatar/QmZty95DGjiZ8ZMbBKdpRmmgyvo2kCXvtgC5FxCqYZtRuu" alt="avatar" />
                                    <div>
                                        <span><span>Purchased 1 edition for</span> 0.06 ETH</span>
                                        <p>by <span>AppSec</span> 12/23/2021, 2:01 AM <Link to="/"><svg viewBox="0 0 12 12" fill="none" width="16" height="16" xlmns="http://www.w3.org/2000/svg" class="sc-bdvvtL sc-hKwDye vZMA-D"><path d="M3.69233 0.92308V0.92308C2.16292 0.92308 0.923096 2.16291 0.923096 3.69231V8.07693C0.923096 9.73378 2.26624 11.0769 3.9231 11.0769H8.30771C9.83712 11.0769 11.0769 9.8371 11.0769 8.3077V8.3077" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path><path d="M6.46143 0.92308H11.0768V5.53847" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path><path d="M11.077 0.92308L5.53857 6.46154" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path></svg></Link></p>
                                    </div>
                                </div>
                            </div>
                        </Tab>
                    </Tabs>

                    <div className="sticky-bottom mt-auto text-center">
                        <Row>
                            <Col xs={6}>
                                <Button variant='primary' className='w-100 mw-auto px-0' size='lg'>Buy for 0.06 ETH</Button>
                            </Col>
                            <Col xs={6}>
                                <Button variant='light-blue' className='w-100 mw-auto px-0' size='lg'>Place a bid</Button>
                            </Col>
                        </Row>
                    </div>
                </div>
            </Container>
        </Layout>
    );
};

export default SingleBid;