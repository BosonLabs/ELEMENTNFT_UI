import React from 'react';
import Layout from './Layout';
import {Container, Row, Col} from 'react-bootstrap';
import {
    Link
  } from "react-router-dom";


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
                                <li><a href="/">Is connecting my wallet to ELEMENT secure?</a></li>
                                <li><a href="/">I bought an NFT from someone, but I think I was scammed. What happened?</a></li>
                                <li><a href="/">My verification request was rejected. Can I reapply?</a></li>
                                <li><a href="/">What are your community rules and guidelines?</a></li>
                            </ul>

                            <a href="/" className='btn-link'>See all <svg viewBox="0 0 16 16" fill="none" width="16" height="16" xlmns="http://www.w3.org/2000/svg" class="sc-bdvvtL sc-hKwDye ieSfBq" style={{transform: 'rotate(-90deg)'}}><path fill-rule="evenodd" clip-rule="evenodd" d="M8 11.4143L12.7071 6.7072C13.0976 6.31668 13.0976 5.68351 12.7071 5.29299C12.3166 4.90246 11.6834 4.90246 11.2929 5.29299L8 8.58588L4.70711 5.29299C4.31658 4.90246 3.68342 4.90246 3.29289 5.29299C2.90237 5.68351 2.90237 6.31668 3.29289 6.7072L8 11.4143Z" fill="currentColor"></path></svg></a>
                        </Col>
                        <Col md={6} className="mb-5">
                            <h3>Using ELEMENT</h3>

                            <ul className='list-unstyled'>
                                <li><a href="/">Which blockchains does ELEMENT support?</a></li>
                                <li><a href="/">Why should I use Algorand on ELEMENT?</a></li>
                                <li><a href="/">Why should I use Flow on ELEMENT?</a></li>
                                <li><a href="/">Why should I use Tezos on ELEMENT?</a></li>
                            </ul>

                            <a href="/" className='btn-link'>See all <svg viewBox="0 0 16 16" fill="none" width="16" height="16" xlmns="http://www.w3.org/2000/svg" class="sc-bdvvtL sc-hKwDye ieSfBq" style={{transform: 'rotate(-90deg)'}}><path fill-rule="evenodd" clip-rule="evenodd" d="M8 11.4143L12.7071 6.7072C13.0976 6.31668 13.0976 5.68351 12.7071 5.29299C12.3166 4.90246 11.6834 4.90246 11.2929 5.29299L8 8.58588L4.70711 5.29299C4.31658 4.90246 3.68342 4.90246 3.29289 5.29299C2.90237 5.68351 2.90237 6.31668 3.29289 6.7072L8 11.4143Z" fill="currentColor"></path></svg></a>
                        </Col>
                        <Col md={6} className="mb-5">
                            <h3>Troubleshooting</h3>

                            <ul className='list-unstyled'>
                                <li><a href="/">I should have received $RARI, but I didn’t. How do I claim it?</a></li>
                                <li><a href="/">I think I minted duplicate NFTs. Is that even possible?</a></li>
                                <li><a href="/">The ELEMENT website isn’t working properly. Now what?</a></li>
                                <li><a href="/">I think my NFT disappeared from ELEMENT. Why?</a></li>
                            </ul>

                            <a href="/" className='btn-link'>See all <svg viewBox="0 0 16 16" fill="none" width="16" height="16" xlmns="http://www.w3.org/2000/svg" class="sc-bdvvtL sc-hKwDye ieSfBq" style={{transform: 'rotate(-90deg)'}}><path fill-rule="evenodd" clip-rule="evenodd" d="M8 11.4143L12.7071 6.7072C13.0976 6.31668 13.0976 5.68351 12.7071 5.29299C12.3166 4.90246 11.6834 4.90246 11.2929 5.29299L8 8.58588L4.70711 5.29299C4.31658 4.90246 3.68342 4.90246 3.29289 5.29299C2.90237 5.68351 2.90237 6.31668 3.29289 6.7072L8 11.4143Z" fill="currentColor"></path></svg></a>
                        </Col>
                    </Row>

                    <div className="contact-section text-center">
                        <h1>Can’t find your answer?</h1>
                        <p className='lead mb-md-4 mb-3'>Contact us and we’ll get back to you as soon as we can.</p>

                        <Link to="/" className='btn m-md-3 m-2 btn-primary btn-lg'>
                            <svg viewBox="0 0 18 13" fill="none" width="16" height="16" xlmns="http://www.w3.org/2000/svg" class="sc-bdvvtL me-2 sc-hKwDye kCwoqX sc-kmiuhe YLwjT"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.5507 0.0036464H11.5624L11.5612 0L11.5507 0.0036464ZM11.5108 0.0176323L11.5507 0.0036464H11.5252L11.5108 0.0176323ZM11.5039 0.0243315L11.5108 0.0176323L11.4917 0.0243072L11.5039 0.0243315ZM11.5039 0.0243315L11.2748 0.246719C13.8446 0.975936 15.088 2.11473 15.088 2.11473C13.4318 1.30287 11.9393 0.896938 10.4467 0.732864C9.36818 0.56879 8.28967 0.65508 7.37851 0.732864H7.13058C6.54793 0.732864 5.30826 0.975936 3.64711 1.62616C3.06818 1.87287 2.73595 2.03452 2.73595 2.03452C2.73595 2.03452 3.9781 0.816724 6.71529 0.166505L6.54793 0.00243113C6.54793 0.00243113 4.47521 -0.075352 2.2376 1.54594C2.2376 1.54594 0 5.36704 0 10.0778C0 10.0778 1.23967 12.1925 4.64008 12.2727C4.64008 12.2727 5.13595 11.6249 5.63802 11.0549C3.72893 10.4861 2.98512 9.34857 2.98512 9.34857C2.98512 9.34857 3.15124 9.42878 3.40041 9.59164H3.47479C3.50979 9.59164 3.52722 9.60778 3.54568 9.62487C3.54684 9.62595 3.548 9.62702 3.54917 9.6281V9.63539C3.56901 9.65484 3.58636 9.67185 3.62355 9.67185C3.6596 9.68642 3.69564 9.70096 3.73164 9.71548C4.10416 9.8658 4.47123 10.0139 4.77645 10.158C5.35413 10.4035 6.09669 10.6478 7.00785 10.8094C8.16074 10.9735 9.48223 11.0525 10.9872 10.8094L11.0353 10.7988L11.0353 10.7988C11.7631 10.6384 12.4908 10.4779 13.2186 10.1592C13.3516 10.0923 13.4931 10.0255 13.6419 9.95511C14.0339 9.76978 14.4769 9.56038 14.9504 9.26349C14.9504 9.26349 14.2066 10.4011 12.2169 10.9699C12.626 11.5362 13.2025 12.1852 13.2025 12.1852C15.9898 12.1255 17.3804 10.6948 17.8328 10.2295C17.9325 10.1269 17.9866 10.0713 18 10.0875C18 5.38405 15.75 1.55566 15.75 1.55566C13.7464 0.097178 11.8701 0.0257804 11.5039 0.0243315ZM6.13886 5.36701C7.00663 5.36701 7.70828 6.09623 7.70828 6.98952C7.70828 7.88889 7.00167 8.61811 6.1339 8.61811C5.26613 8.61811 4.55952 7.88889 4.55952 6.99682C4.55952 6.09745 5.26613 5.37066 6.1339 5.37066L6.13886 5.36701ZM11.7707 5.36701C12.6422 5.36701 13.3451 6.09623 13.3451 6.98952C13.3451 7.88889 12.6384 8.61811 11.7707 8.61811C10.9029 8.61811 10.1963 7.88889 10.1963 6.99682C10.1988 6.09745 10.9066 5.37066 11.7707 5.37066V5.36701Z" fill="currentColor"></path></svg>
                            Discord
                        </Link>
                        <Link to="/" className='btn m-md-3 m-2 btn-white btn-lg'>
                            Help Center
                        </Link>
                    </div>
                </div>
            </Container>
        </Layout>
    );
}

export default HomePage;