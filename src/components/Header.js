import React from 'react';
import {Container, Form, InputGroup, Button,Toast, Nav, NavDropdown, Modal, Dropdown, Row, Col} from 'react-bootstrap';
import {
    Link
  } from "react-router-dom";

import AllIcon from '../assets/images/all-icon.svg'
import EthereumIcon from '../assets/images/ethereum-icon.svg'
import FlowIcon from '../assets/images/flow-icon.svg'
import TezosIcon from '../assets/images/tezos-icon.svg'
import ThemeChanger from './Snippets/ThemeChanger';
import User from '../assets/images/dummy-icon.svg';

function Header() {
    const [show, setShow] = React.useState(false);
    const [search, setSearch] = React.useState(false);
    const [menu, setMenu] = React.useState(false);
    const [toast, setToast] = React.useState(false);

    const handleSerach = () => setSearch(!search);
    const handleMenu = () => setMenu(!menu);
    // handleConvert
    const handleConvert = () => setShow(!show);

    // amount
    const [value, setValue] = React.useState('');
    return (
        <>
            {/* convert modal */}
            <Modal show={show} centered size="sm" onHide={handleConvert}>
                <Modal.Header closeButton>
                <Modal.Title>Convert</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Label><strong>You pay</strong> Max amount is 0 WETH</Form.Label>
                        <InputGroup className="mb-4 input-group-field">
                            <Form.Control
                                placeholder="Enter an amount"
                                value={value} onChange={(e) => setValue(e.target.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1'))}
                            />
                            <InputGroup.Text id="basic-addon2">ETH</InputGroup.Text>
                        </InputGroup>

                        <div className="mb-4 text-center">
                            <Button className='btn btn-round btn-round-sm btn-white'>
                                <svg viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg" width="16" height="16" xlmns="http://www.w3.org/2000/svg" class="sc-bdvvtL sc-hKwDye bRyxAn"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M9.41611 3.624C9.07146 3.85376 8.60581 3.76063 8.37604 3.41598C8.14628 3.07134 8.23941 2.60569 8.58405 2.37592L11.5755 0.381602C11.5815 0.377475 11.5876 0.373433 11.5937 0.369477L12.0001 0.0985718L12.4064 0.369477C12.4126 0.373433 12.4186 0.377475 12.4246 0.381602L15.4161 2.37592C15.7608 2.60569 15.8539 3.07134 15.6241 3.41598C15.3944 3.76063 14.9287 3.85376 14.5841 3.624L12.7501 2.40135V9.49996C12.7501 9.91417 12.4143 10.25 12.0001 10.25C11.5859 10.25 11.2501 9.91417 11.2501 9.49996V2.40135L9.41611 3.624ZM4.75008 0.99996C4.75008 0.585746 4.41429 0.24996 4.00008 0.24996C3.58587 0.24996 3.25008 0.585746 3.25008 0.99996V8.09857L1.4161 6.87592C1.07146 6.64616 0.605806 6.73929 0.376042 7.08393C0.146278 7.42858 0.239408 7.89423 0.584055 8.124L3.57553 10.1183C3.58153 10.1224 3.5876 10.1265 3.59373 10.1304L4.00008 10.4013L4.40643 10.1304C4.41256 10.1265 4.41863 10.1224 4.42463 10.1183L7.4161 8.124C7.76075 7.89423 7.85388 7.42858 7.62412 7.08393C7.39435 6.73929 6.9287 6.64616 6.58405 6.87592L4.75008 8.09857V0.99996Z"></path></svg>
                            </Button>
                        </div>

                        <Form.Label><strong>You receive</strong></Form.Label>
                        <InputGroup className="mb-4 input-group-field">
                            <Form.Control
                                placeholder="Amount you will receive"
                                value={value} onChange={(e) => setValue(e.target.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1'))}
                            />
                            <InputGroup.Text id="basic-addon3">WETH</InputGroup.Text>
                        </InputGroup>
                        <Button type='submit' variant='primary' size="lg" className='w-100 mb-2'>Convert</Button>
                        <Button variant='white' size="lg" onClick={handleConvert} className='w-100'>Cancel</Button>
                    </Form>
                </Modal.Body>
            </Modal>

            <header className="header">
                <Container fluid className="d-flex align-items-center">
                    <div className="logo">
                        <Link to="/" className='d-flex align-items-center'>
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="40" height="40" rx="8" fill="#FEDA03"></rect><path d="M27.6007 19.8536C28.8607 19.5262 29.9817 18.5838 29.9817 16.6889C29.9817 13.5342 27.3031 12.8 23.8706 12.8H10.2V27.0064H15.9539V22.185H22.7793C23.8309 22.185 24.446 22.6016 24.446 23.6334V27.0064H30.2V23.4548C30.2 21.5203 29.1087 20.3 27.6007 19.8536ZM22.8785 18.3556H15.9539V16.9667H22.8785C23.6325 16.9667 24.0888 17.0659 24.0888 17.6612C24.0888 18.2564 23.6325 18.3556 22.8785 18.3556Z" fill="black"></path></svg>
                            <span>Element</span>
                        </Link>
                    </div>

                    <Form className='flex-grow-1 d-xl-block d-none'>
                        <InputGroup className='input-group-search'>
                            <Button variant="reset">
                                <svg viewBox="0 0 16 16" fill="none" width="14" height="14" xlmns="http://www.w3.org/2000/svg" className="sc-bdvvtL sc-hKwDye btcRhh"><path fillRule="evenodd" clipRule="evenodd" d="M2 7C2 4.23858 4.23858 2 7 2C9.76142 2 12 4.23858 12 7C12 9.76142 9.76142 12 7 12C4.23858 12 2 9.76142 2 7ZM7 0C3.13401 0 0 3.13401 0 7C0 10.866 3.13401 14 7 14C8.57591 14 10.0302 13.4792 11.2001 12.6004C11.2281 12.6376 11.259 12.6733 11.2929 12.7071L14.2929 15.7071C14.6834 16.0976 15.3166 16.0976 15.7071 15.7071C16.0976 15.3166 16.0976 14.6834 15.7071 14.2929L12.7071 11.2929C12.6733 11.259 12.6376 11.2281 12.6004 11.2001C13.4792 10.0302 14 8.57591 14 7C14 3.13401 10.866 0 7 0Z" fill="currentColor"></path></svg>
                            </Button>
                            <Form.Control placeholder="Collection, item or user" />
                        </InputGroup>
                    </Form>

                    <Nav className='d-none d-md-flex'>
                        <NavDropdown title="Explore" id="basic-nav-dropdown">
                            <Link className='dropdown-item' to="/"><img src={AllIcon} alt="icon" /> All</Link>
                            <Link className='dropdown-item' to="/"><img src={EthereumIcon} alt="icon" /> Ethereum</Link>
                            <Link className='dropdown-item' to="/"><img src={FlowIcon} alt="icon" /> Flow</Link>
                            <Link className='dropdown-item' to="/"><img src={TezosIcon} alt="icon" /> Tezos</Link>
                        </NavDropdown>
                        <Nav.Link as={Link} to="/">My profile</Nav.Link>
                        <Nav.Link as={Link} to="/">Following</Nav.Link>
                        <Nav.Link as={Link} to="/">Activity</Nav.Link>
                    </Nav>
                    <Nav className='hide-desktop-below'>
                        <Nav.Link to="/" as={Link}>How it works</Nav.Link>
                        <NavDropdown title="Community" id="basic-nav-dropdown">
                            <Link to="/" className='dropdown-item'>About</Link>
                            <Link to="/" className='dropdown-item'>Blog</Link>
                            <Link to="/" className='dropdown-item'>RARI Token</Link>
                            <Link to="/" className='dropdown-item'>Suggest feature</Link>
                            <Link to="/" className='dropdown-item'>Rarible protocol</Link>
                            <Link to="/" className='dropdown-item'>Subscribe</Link>
                            <NavDropdown.Divider />
                            <div className="dropdown-menu-social">
                                <Link to="/" target="_blank">
                                    <svg viewBox="0 0 18 16" fill="none" width="16" height="16" xlmns="http://www.w3.org/2000/svg" className="sc-bdvvtL sc-hKwDye bRyxAn"><path d="M17.9655 2.42676C17.3018 2.71851 16.593 2.91726 15.8468 3.00801C16.6073 2.54976 17.1922 1.82751 17.469 0.965759C16.7558 1.38201 15.9653 1.68501 15.1238 1.85376C14.4518 1.13451 13.494 0.684509 12.4305 0.684509C10.3927 0.684509 8.7405 2.33676 8.7405 4.37226C8.7405 4.66476 8.77425 4.94601 8.83575 5.21526C5.76825 5.07051 3.0495 3.59751 1.23 1.37076C0.90975 1.91226 0.7305 2.54151 0.7305 3.22701C0.7305 4.50951 1.383 5.63676 2.3715 6.29901C1.76625 6.27951 1.197 6.11301 0.7005 5.83701V5.88276C0.7005 7.67151 1.97025 9.16326 3.66 9.50301C3.35025 9.58626 3.02325 9.63126 2.688 9.63126C2.4525 9.63126 2.22675 9.60876 2.001 9.56676C2.47425 11.0315 3.83475 12.0995 5.454 12.1295C4.194 13.1188 2.59725 13.7083 0.8775 13.7083C0.585 13.7083 0.29325 13.691 0 13.658C1.64175 14.7035 3.576 15.3148 5.66775 15.3148C12.4583 15.3148 16.167 9.69276 16.167 4.82526C16.167 4.66851 16.167 4.51026 16.1558 4.35276C16.8765 3.83601 17.5057 3.18276 18.0007 2.44176L17.9655 2.42676Z" fill="currentColor"></path></svg>
                                </Link>
                                <Link to="/" target="_blank">
                                    <svg viewBox="0 0 14 14" fill="none" width="16" height="16" xlmns="http://www.w3.org/2000/svg" className="sc-bdvvtL sc-hKwDye dPpTSf"><path fillRule="evenodd" clipRule="evenodd" d="M7 0C5.09833 0 4.86092 0.00875 4.11425 0.042C3.36875 0.077 2.86125 0.19425 2.415 0.3675C1.95475 0.546 1.56392 0.78575 1.17483 1.17483C0.78575 1.56392 0.545417 1.95417 0.3675 2.415C0.19425 2.86125 0.0764167 3.36875 0.042 4.11425C0.007 4.86092 0 5.09833 0 7C0 8.90167 0.00875 9.13908 0.042 9.88575C0.077 10.6307 0.19425 11.1388 0.3675 11.585C0.546 12.0447 0.78575 12.4361 1.17483 12.8252C1.56392 13.2137 1.95417 13.4546 2.415 13.6325C2.86183 13.8052 3.36933 13.9236 4.11425 13.958C4.86092 13.993 5.09833 14 7 14C8.90167 14 9.13908 13.9912 9.88575 13.958C10.6307 13.923 11.1388 13.8052 11.585 13.6325C12.0447 13.454 12.4361 13.2137 12.8252 12.8252C13.2137 12.4361 13.4546 12.0464 13.6325 11.585C13.8052 11.1388 13.9236 10.6307 13.958 9.88575C13.993 9.13908 14 8.90167 14 7C14 5.09833 13.9912 4.86092 13.958 4.11425C13.923 3.36933 13.8052 2.86067 13.6325 2.415C13.454 1.95475 13.2137 1.56392 12.8252 1.17483C12.4361 0.78575 12.0464 0.545417 11.585 0.3675C11.1388 0.19425 10.6307 0.0764167 9.88575 0.042C9.13908 0.007 8.90167 0 7 0ZM10.7369 4.10372C11.2 4.10372 11.5769 3.72747 11.5769 3.26372C11.5769 2.80055 11.1994 2.42372 10.7369 2.4243C10.2737 2.4243 9.89685 2.80055 9.89685 3.26372C9.89685 3.72689 10.2731 4.10372 10.7369 4.10372ZM3.40552 6.99997C3.40552 5.01547 5.01377 3.40547 7.00002 3.40547C8.98452 3.40547 10.5945 5.01372 10.5945 6.99997C10.5945 8.98447 8.98627 10.5945 7.00002 10.5945C5.01552 10.5945 3.40552 8.98622 3.40552 6.99997ZM7.00002 9.33337C5.71086 9.33337 4.66669 8.2892 4.66669 7.00004C4.66669 5.71087 5.71086 4.6667 7.00002 4.6667C8.28919 4.6667 9.33335 5.71087 9.33335 7.00004C9.33335 8.2892 8.28919 9.33337 7.00002 9.33337Z" fill="currentColor"></path></svg>
                                </Link>
                                <Link to="/" target="_blank">
                                    <svg viewBox="0 0 18 13" fill="none" width="16" height="16" xlmns="http://www.w3.org/2000/svg" className="sc-bdvvtL sc-hKwDye bRyxAn"><path fillRule="evenodd" clipRule="evenodd" d="M11.5507 0.0036464H11.5624L11.5612 0L11.5507 0.0036464ZM11.5108 0.0176323L11.5507 0.0036464H11.5252L11.5108 0.0176323ZM11.5039 0.0243315L11.5108 0.0176323L11.4917 0.0243072L11.5039 0.0243315ZM11.5039 0.0243315L11.2748 0.246719C13.8446 0.975936 15.088 2.11473 15.088 2.11473C13.4318 1.30287 11.9393 0.896938 10.4467 0.732864C9.36818 0.56879 8.28967 0.65508 7.37851 0.732864H7.13058C6.54793 0.732864 5.30826 0.975936 3.64711 1.62616C3.06818 1.87287 2.73595 2.03452 2.73595 2.03452C2.73595 2.03452 3.9781 0.816724 6.71529 0.166505L6.54793 0.00243113C6.54793 0.00243113 4.47521 -0.075352 2.2376 1.54594C2.2376 1.54594 0 5.36704 0 10.0778C0 10.0778 1.23967 12.1925 4.64008 12.2727C4.64008 12.2727 5.13595 11.6249 5.63802 11.0549C3.72893 10.4861 2.98512 9.34857 2.98512 9.34857C2.98512 9.34857 3.15124 9.42878 3.40041 9.59164H3.47479C3.50979 9.59164 3.52722 9.60778 3.54568 9.62487C3.54684 9.62595 3.548 9.62702 3.54917 9.6281V9.63539C3.56901 9.65484 3.58636 9.67185 3.62355 9.67185C3.6596 9.68642 3.69564 9.70096 3.73164 9.71548C4.10416 9.8658 4.47123 10.0139 4.77645 10.158C5.35413 10.4035 6.09669 10.6478 7.00785 10.8094C8.16074 10.9735 9.48223 11.0525 10.9872 10.8094L11.0353 10.7988L11.0353 10.7988C11.7631 10.6384 12.4908 10.4779 13.2186 10.1592C13.3516 10.0923 13.4931 10.0255 13.6419 9.95511C14.0339 9.76978 14.4769 9.56038 14.9504 9.26349C14.9504 9.26349 14.2066 10.4011 12.2169 10.9699C12.626 11.5362 13.2025 12.1852 13.2025 12.1852C15.9898 12.1255 17.3804 10.6948 17.8328 10.2295C17.9325 10.1269 17.9866 10.0713 18 10.0875C18 5.38405 15.75 1.55566 15.75 1.55566C13.7464 0.097178 11.8701 0.0257804 11.5039 0.0243315ZM6.13886 5.36701C7.00663 5.36701 7.70828 6.09623 7.70828 6.98952C7.70828 7.88889 7.00167 8.61811 6.1339 8.61811C5.26613 8.61811 4.55952 7.88889 4.55952 6.99682C4.55952 6.09745 5.26613 5.37066 6.1339 5.37066L6.13886 5.36701ZM11.7707 5.36701C12.6422 5.36701 13.3451 6.09623 13.3451 6.98952C13.3451 7.88889 12.6384 8.61811 11.7707 8.61811C10.9029 8.61811 10.1963 7.88889 10.1963 6.99682C10.1988 6.09745 10.9066 5.37066 11.7707 5.37066V5.36701Z" fill="currentColor"></path></svg>
                                </Link>
                                <Link to="/" target="_blank">
                                    <svg viewBox="0 0 16 14" fill="none" width="16" height="16" xlmns="http://www.w3.org/2000/svg" className="sc-bdvvtL sc-hKwDye fbpERj"><path d="M15.9513 1.29916L13.5438 13.1556C13.377 13.997 12.8902 14.1987 12.21 13.8093L8.542 10.979L6.76804 12.7662C6.56797 12.9748 6.40125 13.1556 6.03445 13.1556C5.55428 13.1556 5.63431 12.9679 5.47425 12.495L4.20714 8.19051L0.572523 7.00834C-0.214421 6.76495 -0.22109 6.20168 0.745918 5.7914L14.9243 0.0891779C15.5711 -0.209841 16.1914 0.256072 15.9446 1.29221L15.9513 1.29916Z" fill="currentColor"></path></svg>
                                </Link>
                                <Link to="/" target="_blank">
                                    <svg viewBox="0 0 18 12" fill="none" width="16" height="16" xlmns="http://www.w3.org/2000/svg" className="sc-bdvvtL sc-hKwDye bRyxAn"><path d="M17.6242 1.85293C17.5199 1.49635 17.3209 1.17147 17.0465 0.909689C16.772 0.64791 16.4314 0.458089 16.0576 0.358571C14.6546 1.02807e-05 9.00801 1.01525e-05 9.00801 1.01525e-05C9.00801 1.01525e-05 3.37567 -0.00714662 1.95839 0.358571C1.58457 0.458089 1.24399 0.64791 0.969559 0.909689C0.69513 1.17147 0.496134 1.49635 0.391808 1.85293C0.125849 3.22313 -0.00526955 4.61404 0.000162055 6.00752C-0.00424273 7.39574 0.126872 8.78133 0.391808 10.1464C0.496134 10.5029 0.69513 10.8278 0.969559 11.0896C1.24399 11.3514 1.58457 11.5412 1.95839 11.6407C3.35991 12 9.00801 12 9.00801 12C9.00801 12 14.6396 12 16.0576 11.6407C16.4314 11.5412 16.772 11.3514 17.0465 11.0896C17.3209 10.8278 17.5199 10.5029 17.6242 10.1464C17.8836 8.78084 18.0092 7.39525 17.9994 6.00752C18.0102 4.61454 17.8846 3.22363 17.6242 1.85293ZM7.20584 8.57757V3.4296L11.9056 6.00752L7.20584 8.57757Z" fill="currentColor"></path></svg>
                                </Link>
                                <Link to="/" target="_blank">
                                    <svg viewBox="0 0 18 12" fill="none" width="16" height="16" xlmns="http://www.w3.org/2000/svg" className="sc-bdvvtL sc-hKwDye gVaYHr"><path d="M5.07644 11.25C7.88022 11.25 10.1531 8.89939 10.1531 5.99991C10.1531 3.10043 7.88004 0.75 5.07644 0.75C2.27284 0.75 0 3.09972 0 5.99991C0 8.9001 2.27267 11.25 5.07644 11.25Z" fill="currentColor"></path><path d="M13.1839 10.9419C14.5857 10.9419 15.7222 8.72942 15.7222 5.99991C15.7222 3.27111 14.5857 1.0579 13.1839 1.0579C11.7821 1.0579 10.6455 3.27111 10.6455 5.99991C10.6455 8.72871 11.7821 10.9419 13.1839 10.9419Z" fill="currentColor"></path><path d="M17.1072 10.4277C17.6003 10.4277 18 8.44542 18 5.99991C18 3.55458 17.6006 1.57207 17.1074 1.57207C16.6142 1.57207 16.2145 3.55511 16.2145 5.99991C16.2145 8.44471 16.6142 10.4277 17.1072 10.4277Z" fill="currentColor"></path></svg>
                                </Link>
                            </div>
                        </NavDropdown>
                    </Nav>

                    <Nav className='d-none d-md-flex show-desktop-below'>
                        <NavDropdown drop="end" className='dropdown-noarrow' title={<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-three-dots" viewBox="0 0 16 16"><path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/></svg>} id="basic-nav-dropdown">
                            <Link className='dropdown-item' to="/">How it works</Link>
                            <Link className='dropdown-item' to="/">About</Link>
                            <Link className='dropdown-item' to="/">Blog</Link>
                            <Link className='dropdown-item' to="/">RARI Token</Link>
                            <Link className='dropdown-item' to="/">Suggest feature</Link>
                            <Link className='dropdown-item' to="/">Rarible protocol</Link>
                            <Link className='dropdown-item' to="/">Subscribe</Link>
                            <NavDropdown.Divider />
                            <div className="dropdown-menu-social">
                                <Link to="/" target="_blank">
                                    <svg viewBox="0 0 18 16" fill="none" width="16" height="16" xlmns="http://www.w3.org/2000/svg" className="sc-bdvvtL sc-hKwDye bRyxAn"><path d="M17.9655 2.42676C17.3018 2.71851 16.593 2.91726 15.8468 3.00801C16.6073 2.54976 17.1922 1.82751 17.469 0.965759C16.7558 1.38201 15.9653 1.68501 15.1238 1.85376C14.4518 1.13451 13.494 0.684509 12.4305 0.684509C10.3927 0.684509 8.7405 2.33676 8.7405 4.37226C8.7405 4.66476 8.77425 4.94601 8.83575 5.21526C5.76825 5.07051 3.0495 3.59751 1.23 1.37076C0.90975 1.91226 0.7305 2.54151 0.7305 3.22701C0.7305 4.50951 1.383 5.63676 2.3715 6.29901C1.76625 6.27951 1.197 6.11301 0.7005 5.83701V5.88276C0.7005 7.67151 1.97025 9.16326 3.66 9.50301C3.35025 9.58626 3.02325 9.63126 2.688 9.63126C2.4525 9.63126 2.22675 9.60876 2.001 9.56676C2.47425 11.0315 3.83475 12.0995 5.454 12.1295C4.194 13.1188 2.59725 13.7083 0.8775 13.7083C0.585 13.7083 0.29325 13.691 0 13.658C1.64175 14.7035 3.576 15.3148 5.66775 15.3148C12.4583 15.3148 16.167 9.69276 16.167 4.82526C16.167 4.66851 16.167 4.51026 16.1558 4.35276C16.8765 3.83601 17.5057 3.18276 18.0007 2.44176L17.9655 2.42676Z" fill="currentColor"></path></svg>
                                </Link>
                                <Link to="/" target="_blank">
                                    <svg viewBox="0 0 14 14" fill="none" width="16" height="16" xlmns="http://www.w3.org/2000/svg" className="sc-bdvvtL sc-hKwDye dPpTSf"><path fillRule="evenodd" clipRule="evenodd" d="M7 0C5.09833 0 4.86092 0.00875 4.11425 0.042C3.36875 0.077 2.86125 0.19425 2.415 0.3675C1.95475 0.546 1.56392 0.78575 1.17483 1.17483C0.78575 1.56392 0.545417 1.95417 0.3675 2.415C0.19425 2.86125 0.0764167 3.36875 0.042 4.11425C0.007 4.86092 0 5.09833 0 7C0 8.90167 0.00875 9.13908 0.042 9.88575C0.077 10.6307 0.19425 11.1388 0.3675 11.585C0.546 12.0447 0.78575 12.4361 1.17483 12.8252C1.56392 13.2137 1.95417 13.4546 2.415 13.6325C2.86183 13.8052 3.36933 13.9236 4.11425 13.958C4.86092 13.993 5.09833 14 7 14C8.90167 14 9.13908 13.9912 9.88575 13.958C10.6307 13.923 11.1388 13.8052 11.585 13.6325C12.0447 13.454 12.4361 13.2137 12.8252 12.8252C13.2137 12.4361 13.4546 12.0464 13.6325 11.585C13.8052 11.1388 13.9236 10.6307 13.958 9.88575C13.993 9.13908 14 8.90167 14 7C14 5.09833 13.9912 4.86092 13.958 4.11425C13.923 3.36933 13.8052 2.86067 13.6325 2.415C13.454 1.95475 13.2137 1.56392 12.8252 1.17483C12.4361 0.78575 12.0464 0.545417 11.585 0.3675C11.1388 0.19425 10.6307 0.0764167 9.88575 0.042C9.13908 0.007 8.90167 0 7 0ZM10.7369 4.10372C11.2 4.10372 11.5769 3.72747 11.5769 3.26372C11.5769 2.80055 11.1994 2.42372 10.7369 2.4243C10.2737 2.4243 9.89685 2.80055 9.89685 3.26372C9.89685 3.72689 10.2731 4.10372 10.7369 4.10372ZM3.40552 6.99997C3.40552 5.01547 5.01377 3.40547 7.00002 3.40547C8.98452 3.40547 10.5945 5.01372 10.5945 6.99997C10.5945 8.98447 8.98627 10.5945 7.00002 10.5945C5.01552 10.5945 3.40552 8.98622 3.40552 6.99997ZM7.00002 9.33337C5.71086 9.33337 4.66669 8.2892 4.66669 7.00004C4.66669 5.71087 5.71086 4.6667 7.00002 4.6667C8.28919 4.6667 9.33335 5.71087 9.33335 7.00004C9.33335 8.2892 8.28919 9.33337 7.00002 9.33337Z" fill="currentColor"></path></svg>
                                </Link>
                                <Link to="/" target="_blank">
                                    <svg viewBox="0 0 18 13" fill="none" width="16" height="16" xlmns="http://www.w3.org/2000/svg" className="sc-bdvvtL sc-hKwDye bRyxAn"><path fillRule="evenodd" clipRule="evenodd" d="M11.5507 0.0036464H11.5624L11.5612 0L11.5507 0.0036464ZM11.5108 0.0176323L11.5507 0.0036464H11.5252L11.5108 0.0176323ZM11.5039 0.0243315L11.5108 0.0176323L11.4917 0.0243072L11.5039 0.0243315ZM11.5039 0.0243315L11.2748 0.246719C13.8446 0.975936 15.088 2.11473 15.088 2.11473C13.4318 1.30287 11.9393 0.896938 10.4467 0.732864C9.36818 0.56879 8.28967 0.65508 7.37851 0.732864H7.13058C6.54793 0.732864 5.30826 0.975936 3.64711 1.62616C3.06818 1.87287 2.73595 2.03452 2.73595 2.03452C2.73595 2.03452 3.9781 0.816724 6.71529 0.166505L6.54793 0.00243113C6.54793 0.00243113 4.47521 -0.075352 2.2376 1.54594C2.2376 1.54594 0 5.36704 0 10.0778C0 10.0778 1.23967 12.1925 4.64008 12.2727C4.64008 12.2727 5.13595 11.6249 5.63802 11.0549C3.72893 10.4861 2.98512 9.34857 2.98512 9.34857C2.98512 9.34857 3.15124 9.42878 3.40041 9.59164H3.47479C3.50979 9.59164 3.52722 9.60778 3.54568 9.62487C3.54684 9.62595 3.548 9.62702 3.54917 9.6281V9.63539C3.56901 9.65484 3.58636 9.67185 3.62355 9.67185C3.6596 9.68642 3.69564 9.70096 3.73164 9.71548C4.10416 9.8658 4.47123 10.0139 4.77645 10.158C5.35413 10.4035 6.09669 10.6478 7.00785 10.8094C8.16074 10.9735 9.48223 11.0525 10.9872 10.8094L11.0353 10.7988L11.0353 10.7988C11.7631 10.6384 12.4908 10.4779 13.2186 10.1592C13.3516 10.0923 13.4931 10.0255 13.6419 9.95511C14.0339 9.76978 14.4769 9.56038 14.9504 9.26349C14.9504 9.26349 14.2066 10.4011 12.2169 10.9699C12.626 11.5362 13.2025 12.1852 13.2025 12.1852C15.9898 12.1255 17.3804 10.6948 17.8328 10.2295C17.9325 10.1269 17.9866 10.0713 18 10.0875C18 5.38405 15.75 1.55566 15.75 1.55566C13.7464 0.097178 11.8701 0.0257804 11.5039 0.0243315ZM6.13886 5.36701C7.00663 5.36701 7.70828 6.09623 7.70828 6.98952C7.70828 7.88889 7.00167 8.61811 6.1339 8.61811C5.26613 8.61811 4.55952 7.88889 4.55952 6.99682C4.55952 6.09745 5.26613 5.37066 6.1339 5.37066L6.13886 5.36701ZM11.7707 5.36701C12.6422 5.36701 13.3451 6.09623 13.3451 6.98952C13.3451 7.88889 12.6384 8.61811 11.7707 8.61811C10.9029 8.61811 10.1963 7.88889 10.1963 6.99682C10.1988 6.09745 10.9066 5.37066 11.7707 5.37066V5.36701Z" fill="currentColor"></path></svg>
                                </Link>
                                <Link to="/" target="_blank">
                                    <svg viewBox="0 0 16 14" fill="none" width="16" height="16" xlmns="http://www.w3.org/2000/svg" className="sc-bdvvtL sc-hKwDye fbpERj"><path d="M15.9513 1.29916L13.5438 13.1556C13.377 13.997 12.8902 14.1987 12.21 13.8093L8.542 10.979L6.76804 12.7662C6.56797 12.9748 6.40125 13.1556 6.03445 13.1556C5.55428 13.1556 5.63431 12.9679 5.47425 12.495L4.20714 8.19051L0.572523 7.00834C-0.214421 6.76495 -0.22109 6.20168 0.745918 5.7914L14.9243 0.0891779C15.5711 -0.209841 16.1914 0.256072 15.9446 1.29221L15.9513 1.29916Z" fill="currentColor"></path></svg>
                                </Link>
                                <Link to="/" target="_blank">
                                    <svg viewBox="0 0 18 12" fill="none" width="16" height="16" xlmns="http://www.w3.org/2000/svg" className="sc-bdvvtL sc-hKwDye bRyxAn"><path d="M17.6242 1.85293C17.5199 1.49635 17.3209 1.17147 17.0465 0.909689C16.772 0.64791 16.4314 0.458089 16.0576 0.358571C14.6546 1.02807e-05 9.00801 1.01525e-05 9.00801 1.01525e-05C9.00801 1.01525e-05 3.37567 -0.00714662 1.95839 0.358571C1.58457 0.458089 1.24399 0.64791 0.969559 0.909689C0.69513 1.17147 0.496134 1.49635 0.391808 1.85293C0.125849 3.22313 -0.00526955 4.61404 0.000162055 6.00752C-0.00424273 7.39574 0.126872 8.78133 0.391808 10.1464C0.496134 10.5029 0.69513 10.8278 0.969559 11.0896C1.24399 11.3514 1.58457 11.5412 1.95839 11.6407C3.35991 12 9.00801 12 9.00801 12C9.00801 12 14.6396 12 16.0576 11.6407C16.4314 11.5412 16.772 11.3514 17.0465 11.0896C17.3209 10.8278 17.5199 10.5029 17.6242 10.1464C17.8836 8.78084 18.0092 7.39525 17.9994 6.00752C18.0102 4.61454 17.8846 3.22363 17.6242 1.85293ZM7.20584 8.57757V3.4296L11.9056 6.00752L7.20584 8.57757Z" fill="currentColor"></path></svg>
                                </Link>
                                <Link to="/" target="_blank">
                                    <svg viewBox="0 0 18 12" fill="none" width="16" height="16" xlmns="http://www.w3.org/2000/svg" className="sc-bdvvtL sc-hKwDye gVaYHr"><path d="M5.07644 11.25C7.88022 11.25 10.1531 8.89939 10.1531 5.99991C10.1531 3.10043 7.88004 0.75 5.07644 0.75C2.27284 0.75 0 3.09972 0 5.99991C0 8.9001 2.27267 11.25 5.07644 11.25Z" fill="currentColor"></path><path d="M13.1839 10.9419C14.5857 10.9419 15.7222 8.72942 15.7222 5.99991C15.7222 3.27111 14.5857 1.0579 13.1839 1.0579C11.7821 1.0579 10.6455 3.27111 10.6455 5.99991C10.6455 8.72871 11.7821 10.9419 13.1839 10.9419Z" fill="currentColor"></path><path d="M17.1072 10.4277C17.6003 10.4277 18 8.44542 18 5.99991C18 3.55458 17.6006 1.57207 17.1074 1.57207C16.6142 1.57207 16.2145 3.55511 16.2145 5.99991C16.2145 8.44471 16.6142 10.4277 17.1072 10.4277Z" fill="currentColor"></path></svg>
                                </Link>
                            </div>
                        </NavDropdown>
                    </Nav>

                    <div className="header-control d-flex align-items-center ms-auto">
                        <Button className='btn btn-round d-xl-none btn-white' onClick={handleSerach}>
                            <svg viewBox="0 0 16 16" fill="none" width="16" height="16" xlmns="http://www.w3.org/2000/svg" className="sc-bdvvtL sc-hKwDye vZMA-D"><path fillRule="evenodd" clipRule="evenodd" d="M2 7C2 4.23858 4.23858 2 7 2C9.76142 2 12 4.23858 12 7C12 9.76142 9.76142 12 7 12C4.23858 12 2 9.76142 2 7ZM7 0C3.13401 0 0 3.13401 0 7C0 10.866 3.13401 14 7 14C8.57591 14 10.0302 13.4792 11.2001 12.6004C11.2281 12.6376 11.259 12.6733 11.2929 12.7071L14.2929 15.7071C14.6834 16.0976 15.3166 16.0976 15.7071 15.7071C16.0976 15.3166 16.0976 14.6834 15.7071 14.2929L12.7071 11.2929C12.6733 11.259 12.6376 11.2281 12.6004 11.2001C13.4792 10.0302 14 8.57591 14 7C14 3.13401 10.866 0 7 0Z" fill="currentColor"></path></svg>
                        </Button>
                        <Dropdown className='dropdown-noarrow'>
                            <Dropdown.Toggle variant="success" className='btn btn-round btn-round-sm btn-white' id="dropdown-basic">
                                <svg viewBox="0 0 12 16" fill="none" width="16" height="16" xlmns="http://www.w3.org/2000/svg" class="sc-bdvvtL sc-hKwDye YJxZz"><path d="M7.00146 0V6H11.0015L4.00146 16V10H0.00146484L7.00146 0Z" fill="currentColor"></path></svg>
                            </Dropdown.Toggle>

                            <Dropdown.Menu className='dropdown-menu-right dropdown-menu-info'>
                                <div className="dropdown-header d-flex align-items-center justify-content-between">
                                    <h4>Notifications</h4>
                                    <Button variant='link' className='btn-reset'>See all</Button>
                                </div>
                                <div className="dropdown-body">
                                    <div className="no-found py-5p text-gray text-center">
                                        <svg viewBox="0 0 12 16" fill="none" width="38" height="38" xlmns="http://www.w3.org/2000/svg" class="sc-bdvvtL mb-3 sc-hKwDye jggBKf"><path d="M7.00146 0V6H11.0015L4.00146 16V10H0.00146484L7.00146 0Z" fill="currentColor"></path></svg>
                                        <p className="lead mb-4">No new notifications</p>
                                    </div>
                                </div>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Link to="/" className='btn d-md-block d-none btn-grad'>Create</Link>
                        <Link to="/" className='btn d-md-block d-none btn-white'>Sign in</Link>
                        
                        <Button className='btn btn-round btn-round-sm btn-white'>
                            <svg viewBox="0 0 18 12" fill="none" width="16" height="16" xlmns="http://www.w3.org/2000/svg" class="sc-bdvvtL sc-hKwDye YJxZz"><path d="M5.29412 5.79545L11.6471 3.75L6.35294 7.84091L9.17647 15L18 0L0 0L5.29412 5.79545Z" fill="currentColor"></path></svg>
                        </Button>
                        <Dropdown className='dropdown-noarrow'>
                            <Dropdown.Toggle variant="white" className='btn btn-round btn-user' id="dropdown-basic">
                                <img src={User} alt="user" />
                            </Dropdown.Toggle>

                            <Dropdown.Menu className='dropdown-menu-right dropdown-menu-info'>
                                <Button variant='copy-code-lg' className="w-100 mb-2 justify-content-start"  onClick={() => { navigator.clipboard.writeText('0x31dB2A...aB9d'); setToast(true)}}>
                                    {!toast ? <span>0x31dB2A...aB9d <svg viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg" width="16" height="16" xlmns="http://www.w3.org/2000/svg" class="sc-bdvvtL sc-hKwDye ieSfBq sc-dHxrtn eHkirg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.25 8.25H2C1.86193 8.25 1.75 8.13807 1.75 8V2C1.75 1.86193 1.86193 1.75 2 1.75H8C8.13807 1.75 8.25 1.86193 8.25 2V3.25H5C4.0335 3.25 3.25 4.0335 3.25 5V8.25ZM3.25 9.75H2C1.0335 9.75 0.25 8.9665 0.25 8V2C0.25 1.0335 1.0335 0.25 2 0.25H8C8.9665 0.25 9.75 1.0335 9.75 2V3.25H11C11.9665 3.25 12.75 4.0335 12.75 5V11C12.75 11.9665 11.9665 12.75 11 12.75H5C4.0335 12.75 3.25 11.9665 3.25 11V9.75ZM11.25 11C11.25 11.1381 11.1381 11.25 11 11.25H5C4.86193 11.25 4.75 11.1381 4.75 11V5C4.75 4.86193 4.86193 4.75 5 4.75H11C11.1381 4.75 11.25 4.86193 11.25 5V11Z" fill="currentColor"></path></svg></span> : (
                                        <Toast className='toast-text' onClose={() => {setToast(false);}} show={toast} autohide delay={1500}>
                                            <Toast.Body>Copied! <svg viewBox="0 0 20 15" fill="none" width="16" height="16" xlmns="http://www.w3.org/2000/svg" class="sc-bdvvtL sc-hKwDye ieSfBq sc-dHxrtn eHkirg"><path d="M2 7L7.33333 12L18 2" stroke="currentColor" stroke-width="3" stroke-linecap="round"></path></svg></Toast.Body>
                                        </Toast>  
                                    )}
                                </Button>
                                <div className="dropdown-account mb-3">
                                    <div className="d-flex align-items-center justify-content-between mb-3">
                                        <div className="dropdown-account-item d-flex align-items-center justify-content-between">
                                            <svg viewBox="0 0 40 40" fill="none" width="44" height="44" color="currentColor" xlmns="http://www.w3.org/2000/svg"><path opacity="0.1" d="M20 40C8.9543 40 0 31.0457 0 20C0 8.9543 8.9543 0 20 0C31.0457 0 40 8.9543 40 20C40 31.0457 31.0457 40 20 40Z" fill="#6B8CEF"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M28.7498 20.2747L19.3775 5V16.0875L27.9627 19.9232L19.3775 16.0898V25.716L28.7498 20.2749L28.75 20.275L28.7499 20.2748L28.75 20.2748L28.7498 20.2747ZM19.375 16.0875V5L10.0039 20.2747L10.0038 20.2748L10.0039 20.2748L10.0038 20.275L10.004 20.2749L19.375 25.716V16.0898L10.791 19.9232L19.375 16.0875ZM19.375 27.4595V34.9933L9.99752 22.0195L19.375 27.4595ZM19.3775 27.4583V34.9933L28.75 22.0195L19.3775 27.4583Z" fill="#6B8CEF"></path></svg>

                                            <div className='ms-3'>
                                                <h6 className='mb-1'>Balance</h6>
                                                <h5 className='mb-0'>0 ETH</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between mb-3">
                                        <div className="dropdown-account-item d-flex align-items-center justify-content-between">
                                            <svg viewBox="0 0 40 40" fill="none" width="44" height="44" color="currentColor" xlmns="http://www.w3.org/2000/svg"><path opacity="0.1" d="M20 40C8.9543 40 0 31.0457 0 20C0 8.9543 8.9543 0 20 0C31.0457 0 40 8.9543 40 20C40 31.0457 31.0457 40 20 40Z" fill="#FD88EA"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M28.7498 20.2747L19.3775 5V16.0875L27.9627 19.9232L19.3775 16.0898V25.716L28.7498 20.2749L28.75 20.275L28.7499 20.2748L28.75 20.2748L28.7498 20.2747ZM19.375 16.0875V5L10.0039 20.2747L10.0038 20.2748L10.0039 20.2748L10.0038 20.275L10.004 20.2749L19.375 25.716V16.0898L10.791 19.9232L19.375 16.0875ZM19.375 27.4595V34.9933L9.99752 22.0195L19.375 27.4595ZM19.3775 27.4583V34.9933L28.75 22.0195L19.3775 27.4583Z" fill="#FD88EA"></path></svg>

                                            <div className='ms-3'>
                                                <h6 className='mb-1'>Bidding Balance <Button variant='reset' className='ms-1'><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-info-circle" viewBox="0 0 16 16">  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>  <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/></svg></Button></h6>
                                                <h5 className='mb-0'>0 WETH</h5>
                                            </div>
                                        </div>

                                        <Button variant='white' onClick={handleConvert}>Convert</Button>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between mb-3">
                                        <div className="dropdown-account-item d-flex align-items-center justify-content-between">
                                            <svg viewBox="0 0 40 40" fill="none" width="44" height="44" color="currentColor" xlmns="http://www.w3.org/2000/svg"><rect opacity="0.1" width="40" height="40" rx="20" fill="url(#paint0_radial_329:3512)"></rect><path d="M26.9585 19.4355C28.1432 19.1289 29.1972 18.2461 29.1972 16.4712C29.1972 13.5163 26.6787 12.8286 23.4513 12.8286H10.5976V26.1354H16.0077V21.6193H22.4252C23.414 21.6193 23.9923 22.0095 23.9923 22.976V26.1354H29.4024V22.8087C29.4024 20.9967 28.3764 19.8537 26.9585 19.4355ZM22.5185 18.0324H16.0077V16.7314H22.5185C23.2274 16.7314 23.6565 16.8244 23.6565 17.3819C23.6565 17.9395 23.2274 18.0324 22.5185 18.0324Z" fill="white"></path><path d="M26.9585 19.4355C28.1432 19.1289 29.1972 18.2461 29.1972 16.4712C29.1972 13.5163 26.6787 12.8286 23.4513 12.8286H10.5976V26.1354H16.0077V21.6193H22.4252C23.414 21.6193 23.9923 22.0095 23.9923 22.976V26.1354H29.4024V22.8087C29.4024 20.9967 28.3764 19.8537 26.9585 19.4355ZM22.5185 18.0324H16.0077V16.7314H22.5185C23.2274 16.7314 23.6565 16.8244 23.6565 17.3819C23.6565 17.9395 23.2274 18.0324 22.5185 18.0324Z" fill="url(#paint1_linear_329:3512)"></path><defs><radialGradient id="paint0_radial_329:3512" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(9.35438 13.3566) rotate(57.6582) scale(24.3216 25.4403)"><stop stop-color="#0C50FF"></stop><stop offset="0.557292" stop-color="#5B9DFF"></stop><stop offset="1" stop-color="#FF74F1"></stop></radialGradient><linearGradient id="paint1_linear_329:3512" x1="10.0001" y1="12.5002" x2="20.9592" y2="27.0958" gradientUnits="userSpaceOnUse"><stop stop-color="#5988FF"></stop><stop offset="1" stop-color="#FF74F1"></stop></linearGradient></defs></svg>

                                            <div className='ms-3'>
                                                <h5 className='mb-0'>0 RARI</h5>
                                            </div>
                                        </div>

                                        <Link to="/rari" className='btn btn-white'>Claim</Link>
                                    </div>

                                    <Link to="/" className='btn btn-white w-100'>Add funds with card</Link>
                                </div>
                                <Link className='dropdown-item' to="/"><svg viewBox="0 0 22 22" fill="none" width="16" height="16" xlmns="http://www.w3.org/2000/svg" class="sc-bdvvtL me-2 sc-hKwDye dzBvbb"><path d="M21.5 11C21.5 16.799 16.799 21.5 11 21.5C5.20101 21.5 0.5 16.799 0.5 11C0.5 5.20101 5.20101 0.5 11 0.5C16.799 0.5 21.5 5.20101 21.5 11ZM17.911 16.7656C19.2152 15.204 20 13.1937 20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 13.1937 2.78482 15.204 4.089 16.7656C5.95721 15.1962 8.36846 14.25 11 14.25C13.6315 14.25 16.0428 15.1962 17.911 16.7656ZM16.8531 17.837C15.2583 16.532 13.2208 15.75 11 15.75C8.77913 15.75 6.74168 16.532 5.14684 17.8369C6.72049 19.1854 8.76511 20 11 20C13.2349 20 15.2795 19.1854 16.8531 17.837ZM14.7397 8.91665C14.7397 11.0337 13.0234 12.75 10.9063 12.75C8.78924 12.75 7.073 11.0337 7.073 8.91665C7.073 6.79955 8.78924 5.08331 10.9063 5.08331C13.0234 5.08331 14.7397 6.79955 14.7397 8.91665ZM10.9063 11.25C12.195 11.25 13.2397 10.2053 13.2397 8.91665C13.2397 7.62798 12.195 6.58331 10.9063 6.58331C9.61767 6.58331 8.573 7.62798 8.573 8.91665C8.573 10.2053 9.61767 11.25 10.9063 11.25Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"></path></svg> My profile</Link>
                                <Link className='dropdown-item' to="/"><svg viewBox="0 0 20 18" fill="none" width="16" height="16" xlmns="http://www.w3.org/2000/svg" class="sc-bdvvtL me-2 sc-hKwDye dzBvbb"><path d="M1.5549 9.12339C1.4817 8.99529 1.4817 8.83804 1.5549 8.70994L5.5549 1.70994C5.62908 1.58012 5.76714 1.5 5.91667 1.5H13.8959C14.0454 1.5 14.1835 1.58012 14.2577 1.70994L18.2577 8.70994C18.3309 8.83804 18.3309 8.99529 18.2577 9.12339L14.2577 16.1234C14.1835 16.2532 14.0454 16.3333 13.8959 16.3333H5.91667C5.76714 16.3333 5.62908 16.2532 5.5549 16.1234L1.5549 9.12339ZM0.252534 7.96573C-0.0841778 8.55498 -0.0841781 9.27835 0.252534 9.8676L4.25253 16.8676C4.59378 17.4648 5.22886 17.8333 5.91667 17.8333H13.8959C14.5837 17.8333 15.2188 17.4648 15.56 16.8676L19.56 9.8676C19.8968 9.27835 19.8968 8.55498 19.56 7.96573L15.56 0.965733C15.2188 0.368547 14.5837 0 13.8959 0H5.91667C5.22886 0 4.59378 0.368547 4.25253 0.965733L0.252534 7.96573ZM9.90629 12.75C12.0234 12.75 13.7396 11.0338 13.7396 8.91667C13.7396 6.79958 12.0234 5.08333 9.90629 5.08333C7.7892 5.08333 6.07296 6.79958 6.07296 8.91667C6.07296 11.0338 7.7892 12.75 9.90629 12.75ZM12.2396 8.91667C12.2396 10.2053 11.195 11.25 9.90629 11.25C8.61763 11.25 7.57296 10.2053 7.57296 8.91667C7.57296 7.628 8.61763 6.58333 9.90629 6.58333C11.195 6.58333 12.2396 7.628 12.2396 8.91667Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"></path></svg> Edit profile</Link>
                                <Link className='dropdown-item' to="/"><svg viewBox="0 0 16 18" fill="none" width="16" height="16" xlmns="http://www.w3.org/2000/svg" class="sc-bdvvtL me-2 sc-hKwDye dzBvbb"><path d="M8.004 0C8.44583 0 8.804 0.366264 8.804 0.818073V8.9988C8.804 9.45061 8.44583 9.81688 8.004 9.81688C7.56217 9.81688 7.204 9.45061 7.204 8.9988V0.818073C7.204 0.366264 7.56217 0 8.004 0ZM3.47359 4.03537C3.78607 4.3548 3.78615 4.87277 3.47378 5.1923C2.57893 6.10766 1.9696 7.2738 1.72282 8.54327C1.47605 9.81274 1.60291 11.1285 2.08737 12.3243C2.57184 13.52 3.39214 14.542 4.44457 15.261C5.497 15.9801 6.73429 16.3639 8 16.3639C9.26571 16.3639 10.503 15.9801 11.5554 15.261C12.6079 14.542 13.4282 13.52 13.9126 12.3243C14.3971 11.1285 14.524 9.81274 14.2772 8.54327C14.0304 7.2738 13.4211 6.10766 12.5262 5.1923C12.2139 4.87277 12.2139 4.3548 12.5264 4.03537C12.8389 3.71595 13.3454 3.71603 13.6578 4.03556C14.7763 5.17976 15.538 6.63743 15.8465 8.22427C16.1549 9.8111 15.9964 11.4558 15.3908 12.9505C14.7852 14.4452 13.7598 15.7227 12.4443 16.6215C11.1288 17.5203 9.58214 18 8 18C6.41786 18 4.87125 17.5203 3.55571 16.6215C2.24018 15.7227 1.21479 14.4452 0.609217 12.9505C0.00363941 11.4558 -0.15494 9.8111 0.15353 8.22427C0.462 6.63744 1.22367 5.17976 2.34222 4.03556C2.65459 3.71603 3.16112 3.71595 3.47359 4.03537Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"></path></svg> Sign out</Link>
                            </Dropdown.Menu>
                        </Dropdown>
                        <ThemeChanger />
                        <Button className='btn btn-round d-lg-none btn-white' onClick={handleMenu}>
                            <svg viewBox="0 0 18 8" fill="none" width="16" height="16" xlmns="http://www.w3.org/2000/svg" className="sc-bdvvtL sc-hKwDye esgSbr"><path fillRule="evenodd" clipRule="evenodd" d="M1 0C0.447715 0 0 0.447715 0 1C0 1.55228 0.447716 2 1 2H17C17.5523 2 18 1.55228 18 1C18 0.447715 17.5523 0 17 0H1ZM4 6C3.44772 6 3 6.44772 3 7C3 7.55228 3.44772 8 4 8H14C14.5523 8 15 7.55228 15 7C15 6.44772 14.5523 6 14 6H4Z" fill="currentColor"></path></svg>
                        </Button>
                    </div>
                </Container>
            </header>

            {menu ? (
                <div className="header-mobile">
                    <Container>
                        <div className="header-mobile-header d-flex align-items-center">
                            <div className="logo me-3">
                                <Link to="/" className='d-flex align-items-center'>
                                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="40" height="40" rx="8" fill="#FEDA03"></rect><path d="M27.6007 19.8536C28.8607 19.5262 29.9817 18.5838 29.9817 16.6889C29.9817 13.5342 27.3031 12.8 23.8706 12.8H10.2V27.0064H15.9539V22.185H22.7793C23.8309 22.185 24.446 22.6016 24.446 23.6334V27.0064H30.2V23.4548C30.2 21.5203 29.1087 20.3 27.6007 19.8536ZM22.8785 18.3556H15.9539V16.9667H22.8785C23.6325 16.9667 24.0888 17.0659 24.0888 17.6612C24.0888 18.2564 23.6325 18.3556 22.8785 18.3556Z" fill="black"></path></svg>
                                </Link>
                            </div>

                            <Dropdown className='dropdown-noarrow'>
                                <Dropdown.Toggle variant="outline-gray">
                                    English
                                </Dropdown.Toggle>
                                <Dropdown.Menu className='link-flex'>
                                    <Dropdown.Item href="/">
                                        English
                                        <svg viewBox="0 0 14 11" fill="none" width="12" height="12" xlmns="http://www.w3.org/2000/svg" className="sc-bdvvtL sc-hKwDye jVZlpM"><path d="M1 5L5 9L13 1" stroke="#0066ff" strokeWidth="2" strokeLinecap="round"></path></svg>
                                    </Dropdown.Item>
                                    <Dropdown.Item href="/">中文</Dropdown.Item>
                                    <Dropdown.Item href="/">한국어</Dropdown.Item>
                                    <Dropdown.Item href="/">日本語</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>

                            <Button className='btn btn-round ms-auto btn-white' onClick={handleMenu}>
                                <svg viewBox="0 0 16 16" fill="none" width="16" height="16" xlmns="http://www.w3.org/2000/svg" className="sc-bdvvtL sc-hKwDye esgSbr"><path d="M4 12L12 4" stroke="currentColor" strokeWidth="2"></path><path d="M12 12L4 4" stroke="currentColor" strokeWidth="2"></path></svg>
                            </Button>
                        </div>

                        <div className="header-mobile-body">
                            <ul>
                                <li><Link to="/">Explore</Link></li>
                                <li><Link to="/">My profile</Link></li>
                                <li><Link to="/">Following</Link></li>
                                <li><Link to="/">Activity</Link></li>
                                <li><Link to="/">How it works</Link></li>
                            </ul>

                            <h3><span className='text-grad'>Community</span></h3>
                            <ul>
                                <li><Link to="/">About</Link></li>
                                <li><Link to="/">Blog</Link></li>
                                <li><Link to="/">RARI Token</Link></li>
                                <li><Link to="/">Suggest feature</Link></li>
                                <li><Link to="/">Rarible protocol</Link></li>
                            </ul>

                            <div className="dropdown-menu-social">
                                <Link to="/" target="_blank">
                                    <svg viewBox="0 0 18 16" fill="none" width="16" height="16" xlmns="http://www.w3.org/2000/svg" className="sc-bdvvtL sc-hKwDye bRyxAn"><path d="M17.9655 2.42676C17.3018 2.71851 16.593 2.91726 15.8468 3.00801C16.6073 2.54976 17.1922 1.82751 17.469 0.965759C16.7558 1.38201 15.9653 1.68501 15.1238 1.85376C14.4518 1.13451 13.494 0.684509 12.4305 0.684509C10.3927 0.684509 8.7405 2.33676 8.7405 4.37226C8.7405 4.66476 8.77425 4.94601 8.83575 5.21526C5.76825 5.07051 3.0495 3.59751 1.23 1.37076C0.90975 1.91226 0.7305 2.54151 0.7305 3.22701C0.7305 4.50951 1.383 5.63676 2.3715 6.29901C1.76625 6.27951 1.197 6.11301 0.7005 5.83701V5.88276C0.7005 7.67151 1.97025 9.16326 3.66 9.50301C3.35025 9.58626 3.02325 9.63126 2.688 9.63126C2.4525 9.63126 2.22675 9.60876 2.001 9.56676C2.47425 11.0315 3.83475 12.0995 5.454 12.1295C4.194 13.1188 2.59725 13.7083 0.8775 13.7083C0.585 13.7083 0.29325 13.691 0 13.658C1.64175 14.7035 3.576 15.3148 5.66775 15.3148C12.4583 15.3148 16.167 9.69276 16.167 4.82526C16.167 4.66851 16.167 4.51026 16.1558 4.35276C16.8765 3.83601 17.5057 3.18276 18.0007 2.44176L17.9655 2.42676Z" fill="currentColor"></path></svg>
                                </Link>
                                <Link to="/" target="_blank">
                                    <svg viewBox="0 0 14 14" fill="none" width="16" height="16" xlmns="http://www.w3.org/2000/svg" className="sc-bdvvtL sc-hKwDye dPpTSf"><path fillRule="evenodd" clipRule="evenodd" d="M7 0C5.09833 0 4.86092 0.00875 4.11425 0.042C3.36875 0.077 2.86125 0.19425 2.415 0.3675C1.95475 0.546 1.56392 0.78575 1.17483 1.17483C0.78575 1.56392 0.545417 1.95417 0.3675 2.415C0.19425 2.86125 0.0764167 3.36875 0.042 4.11425C0.007 4.86092 0 5.09833 0 7C0 8.90167 0.00875 9.13908 0.042 9.88575C0.077 10.6307 0.19425 11.1388 0.3675 11.585C0.546 12.0447 0.78575 12.4361 1.17483 12.8252C1.56392 13.2137 1.95417 13.4546 2.415 13.6325C2.86183 13.8052 3.36933 13.9236 4.11425 13.958C4.86092 13.993 5.09833 14 7 14C8.90167 14 9.13908 13.9912 9.88575 13.958C10.6307 13.923 11.1388 13.8052 11.585 13.6325C12.0447 13.454 12.4361 13.2137 12.8252 12.8252C13.2137 12.4361 13.4546 12.0464 13.6325 11.585C13.8052 11.1388 13.9236 10.6307 13.958 9.88575C13.993 9.13908 14 8.90167 14 7C14 5.09833 13.9912 4.86092 13.958 4.11425C13.923 3.36933 13.8052 2.86067 13.6325 2.415C13.454 1.95475 13.2137 1.56392 12.8252 1.17483C12.4361 0.78575 12.0464 0.545417 11.585 0.3675C11.1388 0.19425 10.6307 0.0764167 9.88575 0.042C9.13908 0.007 8.90167 0 7 0ZM10.7369 4.10372C11.2 4.10372 11.5769 3.72747 11.5769 3.26372C11.5769 2.80055 11.1994 2.42372 10.7369 2.4243C10.2737 2.4243 9.89685 2.80055 9.89685 3.26372C9.89685 3.72689 10.2731 4.10372 10.7369 4.10372ZM3.40552 6.99997C3.40552 5.01547 5.01377 3.40547 7.00002 3.40547C8.98452 3.40547 10.5945 5.01372 10.5945 6.99997C10.5945 8.98447 8.98627 10.5945 7.00002 10.5945C5.01552 10.5945 3.40552 8.98622 3.40552 6.99997ZM7.00002 9.33337C5.71086 9.33337 4.66669 8.2892 4.66669 7.00004C4.66669 5.71087 5.71086 4.6667 7.00002 4.6667C8.28919 4.6667 9.33335 5.71087 9.33335 7.00004C9.33335 8.2892 8.28919 9.33337 7.00002 9.33337Z" fill="currentColor"></path></svg>
                                </Link>
                                <Link to="/" target="_blank">
                                    <svg viewBox="0 0 18 13" fill="none" width="16" height="16" xlmns="http://www.w3.org/2000/svg" className="sc-bdvvtL sc-hKwDye bRyxAn"><path fillRule="evenodd" clipRule="evenodd" d="M11.5507 0.0036464H11.5624L11.5612 0L11.5507 0.0036464ZM11.5108 0.0176323L11.5507 0.0036464H11.5252L11.5108 0.0176323ZM11.5039 0.0243315L11.5108 0.0176323L11.4917 0.0243072L11.5039 0.0243315ZM11.5039 0.0243315L11.2748 0.246719C13.8446 0.975936 15.088 2.11473 15.088 2.11473C13.4318 1.30287 11.9393 0.896938 10.4467 0.732864C9.36818 0.56879 8.28967 0.65508 7.37851 0.732864H7.13058C6.54793 0.732864 5.30826 0.975936 3.64711 1.62616C3.06818 1.87287 2.73595 2.03452 2.73595 2.03452C2.73595 2.03452 3.9781 0.816724 6.71529 0.166505L6.54793 0.00243113C6.54793 0.00243113 4.47521 -0.075352 2.2376 1.54594C2.2376 1.54594 0 5.36704 0 10.0778C0 10.0778 1.23967 12.1925 4.64008 12.2727C4.64008 12.2727 5.13595 11.6249 5.63802 11.0549C3.72893 10.4861 2.98512 9.34857 2.98512 9.34857C2.98512 9.34857 3.15124 9.42878 3.40041 9.59164H3.47479C3.50979 9.59164 3.52722 9.60778 3.54568 9.62487C3.54684 9.62595 3.548 9.62702 3.54917 9.6281V9.63539C3.56901 9.65484 3.58636 9.67185 3.62355 9.67185C3.6596 9.68642 3.69564 9.70096 3.73164 9.71548C4.10416 9.8658 4.47123 10.0139 4.77645 10.158C5.35413 10.4035 6.09669 10.6478 7.00785 10.8094C8.16074 10.9735 9.48223 11.0525 10.9872 10.8094L11.0353 10.7988L11.0353 10.7988C11.7631 10.6384 12.4908 10.4779 13.2186 10.1592C13.3516 10.0923 13.4931 10.0255 13.6419 9.95511C14.0339 9.76978 14.4769 9.56038 14.9504 9.26349C14.9504 9.26349 14.2066 10.4011 12.2169 10.9699C12.626 11.5362 13.2025 12.1852 13.2025 12.1852C15.9898 12.1255 17.3804 10.6948 17.8328 10.2295C17.9325 10.1269 17.9866 10.0713 18 10.0875C18 5.38405 15.75 1.55566 15.75 1.55566C13.7464 0.097178 11.8701 0.0257804 11.5039 0.0243315ZM6.13886 5.36701C7.00663 5.36701 7.70828 6.09623 7.70828 6.98952C7.70828 7.88889 7.00167 8.61811 6.1339 8.61811C5.26613 8.61811 4.55952 7.88889 4.55952 6.99682C4.55952 6.09745 5.26613 5.37066 6.1339 5.37066L6.13886 5.36701ZM11.7707 5.36701C12.6422 5.36701 13.3451 6.09623 13.3451 6.98952C13.3451 7.88889 12.6384 8.61811 11.7707 8.61811C10.9029 8.61811 10.1963 7.88889 10.1963 6.99682C10.1988 6.09745 10.9066 5.37066 11.7707 5.37066V5.36701Z" fill="currentColor"></path></svg>
                                </Link>
                                <Link to="/" target="_blank">
                                    <svg viewBox="0 0 16 14" fill="none" width="16" height="16" xlmns="http://www.w3.org/2000/svg" className="sc-bdvvtL sc-hKwDye fbpERj"><path d="M15.9513 1.29916L13.5438 13.1556C13.377 13.997 12.8902 14.1987 12.21 13.8093L8.542 10.979L6.76804 12.7662C6.56797 12.9748 6.40125 13.1556 6.03445 13.1556C5.55428 13.1556 5.63431 12.9679 5.47425 12.495L4.20714 8.19051L0.572523 7.00834C-0.214421 6.76495 -0.22109 6.20168 0.745918 5.7914L14.9243 0.0891779C15.5711 -0.209841 16.1914 0.256072 15.9446 1.29221L15.9513 1.29916Z" fill="currentColor"></path></svg>
                                </Link>
                                <Link to="/" target="_blank">
                                    <svg viewBox="0 0 18 12" fill="none" width="16" height="16" xlmns="http://www.w3.org/2000/svg" className="sc-bdvvtL sc-hKwDye bRyxAn"><path d="M17.6242 1.85293C17.5199 1.49635 17.3209 1.17147 17.0465 0.909689C16.772 0.64791 16.4314 0.458089 16.0576 0.358571C14.6546 1.02807e-05 9.00801 1.01525e-05 9.00801 1.01525e-05C9.00801 1.01525e-05 3.37567 -0.00714662 1.95839 0.358571C1.58457 0.458089 1.24399 0.64791 0.969559 0.909689C0.69513 1.17147 0.496134 1.49635 0.391808 1.85293C0.125849 3.22313 -0.00526955 4.61404 0.000162055 6.00752C-0.00424273 7.39574 0.126872 8.78133 0.391808 10.1464C0.496134 10.5029 0.69513 10.8278 0.969559 11.0896C1.24399 11.3514 1.58457 11.5412 1.95839 11.6407C3.35991 12 9.00801 12 9.00801 12C9.00801 12 14.6396 12 16.0576 11.6407C16.4314 11.5412 16.772 11.3514 17.0465 11.0896C17.3209 10.8278 17.5199 10.5029 17.6242 10.1464C17.8836 8.78084 18.0092 7.39525 17.9994 6.00752C18.0102 4.61454 17.8846 3.22363 17.6242 1.85293ZM7.20584 8.57757V3.4296L11.9056 6.00752L7.20584 8.57757Z" fill="currentColor"></path></svg>
                                </Link>
                                <Link to="/" target="_blank">
                                    <svg viewBox="0 0 18 12" fill="none" width="16" height="16" xlmns="http://www.w3.org/2000/svg" className="sc-bdvvtL sc-hKwDye gVaYHr"><path d="M5.07644 11.25C7.88022 11.25 10.1531 8.89939 10.1531 5.99991C10.1531 3.10043 7.88004 0.75 5.07644 0.75C2.27284 0.75 0 3.09972 0 5.99991C0 8.9001 2.27267 11.25 5.07644 11.25Z" fill="currentColor"></path><path d="M13.1839 10.9419C14.5857 10.9419 15.7222 8.72942 15.7222 5.99991C15.7222 3.27111 14.5857 1.0579 13.1839 1.0579C11.7821 1.0579 10.6455 3.27111 10.6455 5.99991C10.6455 8.72871 11.7821 10.9419 13.1839 10.9419Z" fill="currentColor"></path><path d="M17.1072 10.4277C17.6003 10.4277 18 8.44542 18 5.99991C18 3.55458 17.6006 1.57207 17.1074 1.57207C16.6142 1.57207 16.2145 3.55511 16.2145 5.99991C16.2145 8.44471 16.6142 10.4277 17.1072 10.4277Z" fill="currentColor"></path></svg>
                                </Link>
                            </div>

                            <Row>
                                <Col>
                                    <Link to="/" className='btn d-block btn-grad'>Create</Link>
                                </Col>
                                <Col>
                                    <Link to="/" className='btn d-block btn-light-blue'>Sign in</Link>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                </div>
            ): null}

            {search ? (
                <div className="header-search">
                    <Container>
                        <div className="header-search-header align-items-center d-flex">
                            <Button className='btn btn-round me-3 btn-white'  onClick={handleSerach}>
                                <svg viewBox="0 0 16 16" fill="none" width="16" height="16" xlmns="http://www.w3.org/2000/svg" className="sc-bdvvtL sc-hKwDye esgSbr"><path d="M4 12L12 4" stroke="currentColor" strokeWidth="2"></path><path d="M12 12L4 4" stroke="currentColor" strokeWidth="2"></path></svg>
                            </Button>

                            <Form className='flex-grow-1'>
                                <InputGroup className='input-group-search'>
                                    <Button variant="reset">
                                        <svg viewBox="0 0 16 16" fill="none" width="14" height="14" xlmns="http://www.w3.org/2000/svg" className="sc-bdvvtL sc-hKwDye btcRhh"><path fillRule="evenodd" clipRule="evenodd" d="M2 7C2 4.23858 4.23858 2 7 2C9.76142 2 12 4.23858 12 7C12 9.76142 9.76142 12 7 12C4.23858 12 2 9.76142 2 7ZM7 0C3.13401 0 0 3.13401 0 7C0 10.866 3.13401 14 7 14C8.57591 14 10.0302 13.4792 11.2001 12.6004C11.2281 12.6376 11.259 12.6733 11.2929 12.7071L14.2929 15.7071C14.6834 16.0976 15.3166 16.0976 15.7071 15.7071C16.0976 15.3166 16.0976 14.6834 15.7071 14.2929L12.7071 11.2929C12.6733 11.259 12.6376 11.2281 12.6004 11.2001C13.4792 10.0302 14 8.57591 14 7C14 3.13401 10.866 0 7 0Z" fill="currentColor"></path></svg>
                                    </Button>
                                    <Form.Control placeholder="Collection, item or user" />
                                </InputGroup>
                            </Form>
                        </div>

                        <div className="header-search-body">
                            <div className="header-search-nofound">
                                Search by creator, collectible or collection
                            </div>
                        </div>
                    </Container>
                </div>
            ) : null}
        </>
    );
}

export default Header;