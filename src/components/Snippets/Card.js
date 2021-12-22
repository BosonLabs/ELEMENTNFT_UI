import React from 'react';
import {Card, Dropdown, Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import {
    Link
  } from "react-router-dom";

import User from '../../assets/images/dummy-icon.svg';
import Preview from '../../assets/images/preview.jpg';
import EthereumIcon from '../../assets/images/ethereum-icon.svg';

const CardInfo = (props) => {
    return (
        <Card>
            <Card.Header className='d-flex align-items-center'>
                <div className="card-users d-flex align-items-center me-auto">
                    <OverlayTrigger
                        overlay={<Tooltip>E-Element</Tooltip>}
                    >
                        <Link to="/">
                            <img src={User} alt="pic" />
                        </Link>
                    </OverlayTrigger>
                    <OverlayTrigger
                        overlay={<Tooltip>E-Element</Tooltip>}
                    >
                        <Link to="/">
                            <img src={User} alt="pic" />
                            {props.verify ? (
                                <svg width="14" height="14" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.78117 0.743103C5.29164 -0.247701 6.70826 -0.247701 7.21872 0.743103C7.52545 1.33846 8.21742 1.62509 8.8553 1.42099C9.91685 1.08134 10.9186 2.08304 10.5789 3.1446C10.3748 3.78247 10.6614 4.47445 11.2568 4.78117C12.2476 5.29164 12.2476 6.70826 11.2568 7.21872C10.6614 7.52545 10.3748 8.21742 10.5789 8.8553C10.9186 9.91685 9.91685 10.9186 8.8553 10.5789C8.21742 10.3748 7.52545 10.6614 7.21872 11.2568C6.70826 12.2476 5.29164 12.2476 4.78117 11.2568C4.47445 10.6614 3.78247 10.3748 3.1446 10.5789C2.08304 10.9186 1.08134 9.91685 1.42099 8.8553C1.62509 8.21742 1.33846 7.52545 0.743103 7.21872C-0.247701 6.70826 -0.247701 5.29164 0.743103 4.78117C1.33846 4.47445 1.62509 3.78247 1.42099 3.1446C1.08134 2.08304 2.08304 1.08134 3.1446 1.42099C3.78247 1.62509 4.47445 1.33846 4.78117 0.743103Z" fill="#feda03"></path><path fillRule="evenodd" clipRule="evenodd" d="M8.43961 4.23998C8.64623 4.43922 8.65221 4.76823 8.45297 4.97484L5.40604 8.13462L3.54703 6.20676C3.34779 6.00014 3.35377 5.67113 3.56039 5.47189C3.76701 5.27266 4.09602 5.27864 4.29526 5.48525L5.40604 6.63718L7.70475 4.25334C7.90398 4.04672 8.23299 4.04074 8.43961 4.23998Z" fill="#000000"></path></svg>
                            ) : null}
                        </Link>
                    </OverlayTrigger>
                    <OverlayTrigger
                        overlay={<Tooltip>E-Element</Tooltip>}
                    >
                        <Link to="/">
                            <img src={User} alt="pic" />
                            {props.verify ? (
                                <svg width="14" height="14" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.78117 0.743103C5.29164 -0.247701 6.70826 -0.247701 7.21872 0.743103C7.52545 1.33846 8.21742 1.62509 8.8553 1.42099C9.91685 1.08134 10.9186 2.08304 10.5789 3.1446C10.3748 3.78247 10.6614 4.47445 11.2568 4.78117C12.2476 5.29164 12.2476 6.70826 11.2568 7.21872C10.6614 7.52545 10.3748 8.21742 10.5789 8.8553C10.9186 9.91685 9.91685 10.9186 8.8553 10.5789C8.21742 10.3748 7.52545 10.6614 7.21872 11.2568C6.70826 12.2476 5.29164 12.2476 4.78117 11.2568C4.47445 10.6614 3.78247 10.3748 3.1446 10.5789C2.08304 10.9186 1.08134 9.91685 1.42099 8.8553C1.62509 8.21742 1.33846 7.52545 0.743103 7.21872C-0.247701 6.70826 -0.247701 5.29164 0.743103 4.78117C1.33846 4.47445 1.62509 3.78247 1.42099 3.1446C1.08134 2.08304 2.08304 1.08134 3.1446 1.42099C3.78247 1.62509 4.47445 1.33846 4.78117 0.743103Z" fill="#feda03"></path><path fillRule="evenodd" clipRule="evenodd" d="M8.43961 4.23998C8.64623 4.43922 8.65221 4.76823 8.45297 4.97484L5.40604 8.13462L3.54703 6.20676C3.34779 6.00014 3.35377 5.67113 3.56039 5.47189C3.76701 5.27266 4.09602 5.27864 4.29526 5.48525L5.40604 6.63718L7.70475 4.25334C7.90398 4.04672 8.23299 4.04074 8.43961 4.23998Z" fill="#000000"></path></svg>
                            ) : null}
                        </Link>
                    </OverlayTrigger>
                </div>

                <Dropdown className='dropdown-noarrow'>
                    <Dropdown.Toggle variant="reset">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-three-dots" viewBox="0 0 16 16">
                        <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
                    </svg>
                    </Dropdown.Toggle>

                    <Dropdown.Menu className='link-flex dropdown-menu-right'>
                        <Dropdown.Item href="/">Buy now</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item href="/">Refresh Metadata</Dropdown.Item>
                        <Dropdown.Item href="/">Share</Dropdown.Item>
                        <Dropdown.Item href="/">Report</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Card.Header>
            <Card.Body className='p-0'>
                <div className="position-relative">
                    <img src={Preview} className='img-fluid card-image' alt="Preview" />
                    
                    {props.timer ? (
                        <div className="timer">
                            <div>{props.timer} <span>left</span> <img src="https://cdn.jsdelivr.net/npm/emoji-datasource-apple@6.0.1/img/apple/64/1f525.png" alt="fire" /></div></div>
                    ) : null}
                </div>

                <div className="card-title justify-content-between d-flex align-items-start">
                    <Link to="/">{props.title}</Link>

                    <OverlayTrigger
                        overlay={<Tooltip>Ethereum</Tooltip>}
                    >
                        <img src={EthereumIcon} alt="icon" />
                    </OverlayTrigger>
                </div>

                <div className="card-info d-flex align-items-end justify-content-between">
                    <div>
                        <h5 dangerouslySetInnerHTML={{__html: props.subTitle}} />
                        <Link to="/" className='btn-link-grad'>{props.linkText}</Link>
                    </div>
                    <Button variant='default' className='btn-count float-end'>
                        <svg viewBox="0 0 17 16" fill="none" width="16" height="16" xlmns="http://www.w3.org/2000/svg" className="sc-bdvvtL sc-hKwDye bZjZGw"><path d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z" stroke="currentColor" strokeWidth="2"></path></svg>
                        <span>{props.count}</span>
                    </Button>
                </div>
            </Card.Body>
        </Card>
    );
};

export default CardInfo;