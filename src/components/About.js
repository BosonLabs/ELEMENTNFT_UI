import React from 'react';
import Layout from './Layout';
import {Container, Button, Row, Col, Card} from 'react-bootstrap';
import {
    Link
  } from "react-router-dom";
import TeamCard from './Snippets/TeamCard';

const SingleBid = () => {
    const [video, setVideo] = React.useState(false);

    const handle = () => setVideo(!video);
    return (
        <Layout>
            <Container>
                <div className="py-md-5 text-center py-4">
                    <h1 className='display-3 font-bold mb-2'>Meet Rarible</h1>
                    <p className="lead mb-5">NFT marketplace where anything is possible and all are welcome</p>

                    <div className="position-relative">
                        {!video && <img src="https://rarible.com/27dbbe6d9e04bded811c.png" alt="banner" className='img-fluid' />}
                        {!video && <Button onClick={handle} variant='play'><img src="https://rarible.com/9d687fe4cc6cc86b4404.svg" alt="play" /></Button>}

                        {video && <video playsInline={true} className='w-100 d-block' autoPlay={true} loop={true} src="https://bafybeihv264z5fawmqeabyvkw3v33v4wvzw5tsjz4d7wazjdpj4th53u5m.ipfs.infura-ipfs.io/"></video>}
                    </div>
                </div>

                <div className="py-5 text-center">
                    <h2 className='display-6 mb-4 font-bold'>Rarible in numbers</h2>

                    <Row>
                        <Col>
                            <div className='display-3 font-bold'>$274M</div>
                            <p className='lead'>Trading volume</p>
                        </Col>
                        <Col>
                            <div className='display-3 font-bold'>405K</div>
                            <p className='lead'>NFTs created</p>
                        </Col>
                        <Col>
                            <div className='display-3 font-bold'>1.6M</div>
                            <p className='lead'>NFTs created</p>
                        </Col>
                    </Row>
                </div>

                <div className="py-5 mt-md-5 text-center">
                    <h2 className='display-6 mb-5 font-bold'>Get to know us</h2>

                    <div className="about-item d-flex align-items-center">
                        <img src="https://rarible.com/84ede040cbc4ebd7ed43.svg" alt="about" />
                        <p><strong>Multi-chain NFT marketplace</strong> with Ethereum, Flow and Tezos integrated</p>
                    </div>
                    <div className="about-item d-flex align-items-center">
                        <img src="https://rarible.com/84ede040cbc4ebd7ed43.svg" alt="about" />
                        <p><strong>A platform for diverse creators and brands,</strong> including LIRONA, Pak, The Watcher, eBoy, Aavegotchi, Twitter, Lindsay Lohan and Floyd Mayweather Jr</p>
                    </div>
                    <div className="about-item d-flex align-items-center">
                        <img src="https://rarible.com/84ede040cbc4ebd7ed43.svg" alt="about" />
                        <p><strong>Features include multiple edition NFTs, timed auctions, royalties, messenger, personalized activity feed, and much more</strong></p>
                    </div>
                    <div className="about-item d-flex align-items-center">
                        <img src="https://rarible.com/84ede040cbc4ebd7ed43.svg" alt="about" />
                        <p><strong>A safe place to trade digital art, collectibles, music and video NFTs, domain names, metaverse lands and wearables, and more</strong></p>
                    </div>
                    <div className="about-item d-flex align-items-center">
                        <img src="https://rarible.com/84ede040cbc4ebd7ed43.svg" alt="about" />
                        <p><strong>On a mission to environmental sustainability,</strong> encouragyting users to remove carbon footprint via partnership with <Link to="/">Nori</Link></p>
                    </div>
                    <div className="about-item d-flex align-items-center">
                        <img src="https://rarible.com/84ede040cbc4ebd7ed43.svg" alt="about" />
                        <p><strong>Launched the <Link to="/">Rarible Protocol</Link>,</strong> a public, DAO-governed set of open-source tools for developers and businesses to build their own NFT projects and deploy customized NFT storefronts</p>
                    </div>
                </div>

                <div className="py-5 mt-md-5 text-center">
                    <h2 className='display-6 mb-5 font-bold'>Team</h2>

                    <Row>
                        <Col xs={6} sm={4} md={4} lg={3} className='mb-3'>
                            <TeamCard />
                        </Col>
                        <Col xs={6} sm={4} md={4} lg={3} className='mb-3'>
                            <TeamCard />
                        </Col>
                        <Col xs={6} sm={4} md={4} lg={3} className='mb-3'>
                            <TeamCard />
                        </Col>
                        <Col xs={6} sm={4} md={4} lg={3} className='mb-3'>
                            <TeamCard />
                        </Col>
                        <Col xs={6} sm={4} md={4} lg={3} className='mb-3'>
                            <TeamCard />
                        </Col>
                        <Col xs={6} sm={4} md={4} lg={3} className='mb-3'>
                            <TeamCard />
                        </Col>
                        <Col xs={6} sm={4} md={4} lg={3} className='mb-3'>
                            <TeamCard />
                        </Col>
                        <Col xs={6} sm={4} md={4} lg={3} className='mb-3'>
                            <TeamCard />
                        </Col>
                    </Row>

                    <div className="py-3 about-text">
                        <p className='lead'><Link to="/">We are Hiring</Link></p>
                    </div>
                </div>

                <div className="py-5 mt-md-5 text-center">
                    <h2 className='display-6 mb-5 font-bold'>Backed by</h2>

                    <Row>
                        <Col xs={6} sm={4} md={4} className='mb-3'>
                            <Card className="logo-card">
                                <img src="https://rarible.com/0189b5f10252380b3079.png" alt="logo" />
                            </Card>
                        </Col>
                        <Col xs={6} sm={4} md={4} className='mb-3'>
                            <Card className="logo-card">
                                <img src="https://rarible.com/3a9525aaea8e3d90e18e.png" alt="logo" />
                            </Card>
                        </Col>
                        <Col xs={6} sm={4} md={4} className='mb-3'>
                            <Card className="logo-card">
                                <img src="https://rarible.com/9e71a9ecb295d79da93d.png" alt="logo" />
                            </Card>
                        </Col>
                        <Col xs={6} sm={4} md={4} className='mb-3'>
                            <Card className="logo-card">
                                <img src="https://rarible.com/96b85ec451a9927ef479.png" alt="logo" />
                            </Card>
                        </Col>
                        <Col xs={6} sm={4} md={4} className='mb-3'>
                            <Card className="logo-card">
                                <img src="https://rarible.com/e0373a46aaf8cbb7be74.png" alt="logo" />
                            </Card>
                        </Col>
                        <Col xs={6} sm={4} md={4} className='mb-3'>
                            <Card className="logo-card">
                                <img src="https://rarible.com/3b1d40d87371fa6fd906.png" alt="logo" />
                            </Card>
                        </Col>
                    </Row>
                </div>
            </Container>
        </Layout>
    );
};

export default SingleBid;