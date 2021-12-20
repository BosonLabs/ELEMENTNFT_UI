import React from 'react';
import Layout from './Layout';
import {Container, Row, Col} from 'react-bootstrap';


function HomePage() {
    // React.useEffect(() => {
    //     window.scrollTo(0, 0);
    // });

    return (
        <Layout>
            <Container>
                <div className="page-spacer">
                    <div className="mb-32">
                        <div className='h1 w-100 d-flex align-items-center'>
                            How it works
                        </div>
                    </div>

                    <Row className='page-content'>
                        <Col md={6} className="mb-5">
                            <h3>Getting started</h3>

                            <ul className='list-unstyled'>
                                <li><a href="/">What is an NFT?</a></li>
                                <li><a href="/">What are Proof of Work (PoW) and Proof of Stake (PoS) blockchains?</a></li>
                                <li><a href="/">What is a wallet? Why do I need one?</a></li>
                                <li><a href="/">How much does it cost to create an NFT?</a></li>
                            </ul>

                            <a href="/" className='btn-link'>See all <svg viewBox="0 0 16 16" fill="none" width="16" height="16" xlmns="http://www.w3.org/2000/svg" class="sc-bdvvtL sc-hKwDye ieSfBq" style={{transform: 'rotate(-90deg)'}}><path fill-rule="evenodd" clip-rule="evenodd" d="M8 11.4143L12.7071 6.7072C13.0976 6.31668 13.0976 5.68351 12.7071 5.29299C12.3166 4.90246 11.6834 4.90246 11.2929 5.29299L8 8.58588L4.70711 5.29299C4.31658 4.90246 3.68342 4.90246 3.29289 5.29299C2.90237 5.68351 2.90237 6.31668 3.29289 6.7072L8 11.4143Z" fill="currentColor"></path></svg></a>
                        </Col>
                        <Col md={6} className="mb-5">
                            <h3>Safety, Security, and Policies</h3>

                            <ul className='list-unstyled'>
                                <li><a href="/">What is an NFT?</a></li>
                                <li><a href="/">What are Proof of Work (PoW) and Proof of Stake (PoS) blockchains?</a></li>
                                <li><a href="/">What is a wallet? Why do I need one?</a></li>
                                <li><a href="/">How much does it cost to create an NFT?</a></li>
                            </ul>

                            <a href="/" className='btn-link'>See all <svg viewBox="0 0 16 16" fill="none" width="16" height="16" xlmns="http://www.w3.org/2000/svg" class="sc-bdvvtL sc-hKwDye ieSfBq" style={{transform: 'rotate(-90deg)'}}><path fill-rule="evenodd" clip-rule="evenodd" d="M8 11.4143L12.7071 6.7072C13.0976 6.31668 13.0976 5.68351 12.7071 5.29299C12.3166 4.90246 11.6834 4.90246 11.2929 5.29299L8 8.58588L4.70711 5.29299C4.31658 4.90246 3.68342 4.90246 3.29289 5.29299C2.90237 5.68351 2.90237 6.31668 3.29289 6.7072L8 11.4143Z" fill="currentColor"></path></svg></a>
                        </Col>
                        <Col md={6} className="mb-5">
                            <h3>Using Rarible</h3>

                            <ul className='list-unstyled'>
                                <li><a href="/">What is an NFT?</a></li>
                                <li><a href="/">What are Proof of Work (PoW) and Proof of Stake (PoS) blockchains?</a></li>
                                <li><a href="/">What is a wallet? Why do I need one?</a></li>
                                <li><a href="/">How much does it cost to create an NFT?</a></li>
                            </ul>

                            <a href="/" className='btn-link'>See all <svg viewBox="0 0 16 16" fill="none" width="16" height="16" xlmns="http://www.w3.org/2000/svg" class="sc-bdvvtL sc-hKwDye ieSfBq" style={{transform: 'rotate(-90deg)'}}><path fill-rule="evenodd" clip-rule="evenodd" d="M8 11.4143L12.7071 6.7072C13.0976 6.31668 13.0976 5.68351 12.7071 5.29299C12.3166 4.90246 11.6834 4.90246 11.2929 5.29299L8 8.58588L4.70711 5.29299C4.31658 4.90246 3.68342 4.90246 3.29289 5.29299C2.90237 5.68351 2.90237 6.31668 3.29289 6.7072L8 11.4143Z" fill="currentColor"></path></svg></a>
                        </Col>
                        <Col md={6} className="mb-5">
                            <h3>Troubleshooting</h3>

                            <ul className='list-unstyled'>
                                <li><a href="/">What is an NFT?</a></li>
                                <li><a href="/">What are Proof of Work (PoW) and Proof of Stake (PoS) blockchains?</a></li>
                                <li><a href="/">What is a wallet? Why do I need one?</a></li>
                                <li><a href="/">How much does it cost to create an NFT?</a></li>
                            </ul>

                            <a href="/" className='btn-link'>See all <svg viewBox="0 0 16 16" fill="none" width="16" height="16" xlmns="http://www.w3.org/2000/svg" class="sc-bdvvtL sc-hKwDye ieSfBq" style={{transform: 'rotate(-90deg)'}}><path fill-rule="evenodd" clip-rule="evenodd" d="M8 11.4143L12.7071 6.7072C13.0976 6.31668 13.0976 5.68351 12.7071 5.29299C12.3166 4.90246 11.6834 4.90246 11.2929 5.29299L8 8.58588L4.70711 5.29299C4.31658 4.90246 3.68342 4.90246 3.29289 5.29299C2.90237 5.68351 2.90237 6.31668 3.29289 6.7072L8 11.4143Z" fill="currentColor"></path></svg></a>
                        </Col>
                    </Row>
                </div>
            </Container>
        </Layout>
    );
}

export default HomePage;