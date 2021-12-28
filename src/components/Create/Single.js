import React from 'react';
import Layout from '../Layout';
import {Container, Row, Col, Card, Form, Tab, Tabs, InputGroup, Dropdown, Button, OverlayTrigger, Tooltip, Modal} from 'react-bootstrap';
import {
    Link
  } from "react-router-dom";

import CardInfo from '../Snippets/Card'
import Preview from '../../assets/images/preview.jpg'

const Start = () => {
    const [show, setShow] = React.useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const [showTest, setShowTest] = React.useState(false);

    const handleCloseTest = () => setShowTest(false);
    const handleShowTest = () => setShowTest(true);

    // amount
    const [value, setValue] = React.useState('');
    return (
        <Layout>
            <Container fluid="md">
                <div className="py-md-5 py-4">
                    <Row className='mb-5'>
                        <Col md={12}>
                            <h1 className='display-4 font-bold mb-3'>Create single item on Ethereum</h1>
                        </Col>
                    </Row>

                    <Row className='text-gray'>
                        <Col md={8} className='mb-3'>
                            <h3 className='mb-3'>Upload file</h3>

                            <div className="upload px-2 py-5 text-center mb-5">
                                <div>
                                    <p className='mb-3'>PNG, GIF, WEBP, MP4 or MP3. Max 100mb.</p>

                                    <input type="file" hidden id='upload' />
                                    <label htmlFor="upload" className='btn btn-light-blue'>Choose File</label>
                                </div>
                            </div>

                            <div className="upload px-2 py-5 text-center mb-5">
                                <div>
                                    <Button variant='white' className='btn btn-upload-close btn-round btn-round-sm'>
                                        <svg viewBox="0 0 16 16" fill="none" width="16" height="16" xlmns="http://www.w3.org/2000/svg" class="sc-bdvvtL sc-hKwDye esgSbr"><path d="M4 12L12 4" stroke="currentColor" stroke-width="2"></path><path d="M12 12L4 4" stroke="currentColor" stroke-width="2"></path></svg>
                                    </Button>

                                    <img src={Preview} className='upload-image' alt="prev" />
                                </div>
                            </div>

                            <div className="mb-4">
                                <div className="d-flex mb-4">
                                    <div className='me-auto pe-2'>
                                        <h3 className='text-grad'>Put on marketplace</h3>
                                        <p>Enter price to allow users instantly purchase your NFT</p>
                                    </div>

                                    <Form.Check 
                                        type="switch"
                                        id="custom-switch"
                                    />
                                </div>

                                <Tabs
                                    defaultActiveKey="fixed"
                                    transition={false}
                                    id="noanim-tab-example"
                                    className="mb-3"
                                    variant='pills'
                                >
                                    <Tab eventKey="fixed" title={<span><img src="https://rarible.com/25d23f2b0f1b54429ce9.svg" alt="icon" /> {'Fixed price'}</span>}>
                                        <div>
                                            <h3 className='mb-2'>Price</h3>

                                            <InputGroup className="mb-3 input-group-field">
                                                <Form.Control
                                                    placeholder="Enter price for one piece"
                                                    value={value} onChange={(e) => setValue(e.target.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1'))}
                                                />
                                                <InputGroup.Text id="basic-addon2">
                                                    <Dropdown>
                                                        <Dropdown.Toggle variant="reset">
                                                            ETH 
                                                        </Dropdown.Toggle>
                                                        <Dropdown.Menu className='dropdown-menu-right dropdown-menu-link'>
                                                            <Dropdown.Item href="/">
                                                                <img src="https://raw.githubusercontent.com/rarible/public-assets/main/tokens/ETH.png" alt="icon" />
                                                                ETH
                                                                <svg viewBox="0 0 14 11" fill="none" width="12" height="12" xlmns="http://www.w3.org/2000/svg" className="sc-bdvvtL ms-auto sc-hKwDye jVZlpM"><path d="M1 5L5 9L13 1" stroke="#0066ff" strokeWidth="2" strokeLinecap="round"></path></svg>
                                                            </Dropdown.Item>
                                                            <Dropdown.Item href="/">
                                                                <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScyNCcgaGVpZ2h0PScyNCcgc3R5bGU9J2JhY2tncm91bmQtY29sb3I6cmdiYSgyNDYsMjQ2LDI0NiwxKTsnPjxnIHN0eWxlPSdmaWxsOnJnYmEoMTU4LDM4LDIxNywxKTsgc3Ryb2tlOnJnYmEoMTU4LDM4LDIxNywxKTsgc3Ryb2tlLXdpZHRoOjAuMTI7Jz48cmVjdCAgeD0nMTEnIHk9JzcnIHdpZHRoPScyJyBoZWlnaHQ9JzInLz48cmVjdCAgeD0nMTEnIHk9JzknIHdpZHRoPScyJyBoZWlnaHQ9JzInLz48cmVjdCAgeD0nMTEnIHk9JzExJyB3aWR0aD0nMicgaGVpZ2h0PScyJy8+PHJlY3QgIHg9JzExJyB5PScxMycgd2lkdGg9JzInIGhlaWdodD0nMicvPjxyZWN0ICB4PScxMScgeT0nMTUnIHdpZHRoPScyJyBoZWlnaHQ9JzInLz48cmVjdCAgeD0nOScgeT0nNycgd2lkdGg9JzInIGhlaWdodD0nMicvPjxyZWN0ICB4PScxMycgeT0nNycgd2lkdGg9JzInIGhlaWdodD0nMicvPjxyZWN0ICB4PSc5JyB5PSc5JyB3aWR0aD0nMicgaGVpZ2h0PScyJy8+PHJlY3QgIHg9JzEzJyB5PSc5JyB3aWR0aD0nMicgaGVpZ2h0PScyJy8+PHJlY3QgIHg9JzknIHk9JzExJyB3aWR0aD0nMicgaGVpZ2h0PScyJy8+PHJlY3QgIHg9JzEzJyB5PScxMScgd2lkdGg9JzInIGhlaWdodD0nMicvPjxyZWN0ICB4PSc3JyB5PSc5JyB3aWR0aD0nMicgaGVpZ2h0PScyJy8+PHJlY3QgIHg9JzE1JyB5PSc5JyB3aWR0aD0nMicgaGVpZ2h0PScyJy8+PHJlY3QgIHg9JzcnIHk9JzExJyB3aWR0aD0nMicgaGVpZ2h0PScyJy8+PHJlY3QgIHg9JzE1JyB5PScxMScgd2lkdGg9JzInIGhlaWdodD0nMicvPjwvZz48L3N2Zz4=" alt="icon" />
                                                                WETH
                                                            </Dropdown.Item>
                                                            <Dropdown.Item href="/">
                                                                <img src="https://raw.githubusercontent.com/rarible/public-assets/main/tokens/DAI.png" alt="icon" />
                                                                DAI
                                                            </Dropdown.Item>
                                                            <Dropdown.Item href="/">
                                                                <img src="https://raw.githubusercontent.com/rarible/public-assets/main/tokens/USDC.png" alt="icon" />
                                                                USDC
                                                            </Dropdown.Item>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                </InputGroup.Text>
                                            </InputGroup>

                                            <p>
                                                Service fee <strong>2.5%</strong> <br />
                                                You will receive <strong>0 DAI</strong>
                                            </p>
                                        </div>
                                    </Tab>
                                    <Tab eventKey="open" title={<span><img src="https://rarible.com/cec4bdb514ea63a26280.svg" alt="icon" /> {'Open for bids'}</span>}>
                                        <div>

                                        </div>
                                    </Tab>
                                    <Tab eventKey="timed" title={<span><img src="https://rarible.com/b5ed2cab37b61a7c7d7f.svg" alt="icon" /> {'Timed auction'}</span>}>
                                    <div>
                                            <h3 className='mb-2'>Minimum bid</h3>

                                            <InputGroup className="mb-3 input-group-field">
                                                <Form.Control
                                                    placeholder="Enter minimum bid"
                                                    value={value} onChange={(e) => setValue(e.target.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1'))}
                                                />
                                                <InputGroup.Text id="basic-addon2">
                                                <OverlayTrigger
                                                    placement="top"
                                                    delay={{ show: 250, hide: 400 }}
                                                    overlay={<Tooltip id="button-tooltip">
                                                    WETH, which stands for “wrapped Ether”, is a cryptocurrency used to make bids for digital goods on Rarible. There is a 1:1 exchange between WETH and ETH, so you can always convert it back and forth anytime.
                                                </Tooltip>}
                                                >
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi me-2 bi-question-circle" viewBox="0 0 16 16">
                                                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                                        <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"/>
                                                        </svg>
                                                </OverlayTrigger>
                                                    <Dropdown>
                                                        <Dropdown.Toggle variant="reset">
                                                            WETH 
                                                        </Dropdown.Toggle>
                                                        <Dropdown.Menu className='dropdown-menu-right dropdown-menu-link'>
                                                            <Dropdown.Item href="/">
                                                                <img src="https://raw.githubusercontent.com/rarible/public-assets/main/tokens/ETH.png" alt="icon" />
                                                                WETH
                                                                <svg viewBox="0 0 14 11" fill="none" width="12" height="12" xlmns="http://www.w3.org/2000/svg" className="sc-bdvvtL ms-auto sc-hKwDye jVZlpM"><path d="M1 5L5 9L13 1" stroke="#0066ff" strokeWidth="2" strokeLinecap="round"></path></svg>
                                                            </Dropdown.Item>
                                                            <Dropdown.Item href="/">
                                                                <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScyNCcgaGVpZ2h0PScyNCcgc3R5bGU9J2JhY2tncm91bmQtY29sb3I6cmdiYSgyNDYsMjQ2LDI0NiwxKTsnPjxnIHN0eWxlPSdmaWxsOnJnYmEoMTU4LDM4LDIxNywxKTsgc3Ryb2tlOnJnYmEoMTU4LDM4LDIxNywxKTsgc3Ryb2tlLXdpZHRoOjAuMTI7Jz48cmVjdCAgeD0nMTEnIHk9JzcnIHdpZHRoPScyJyBoZWlnaHQ9JzInLz48cmVjdCAgeD0nMTEnIHk9JzknIHdpZHRoPScyJyBoZWlnaHQ9JzInLz48cmVjdCAgeD0nMTEnIHk9JzExJyB3aWR0aD0nMicgaGVpZ2h0PScyJy8+PHJlY3QgIHg9JzExJyB5PScxMycgd2lkdGg9JzInIGhlaWdodD0nMicvPjxyZWN0ICB4PScxMScgeT0nMTUnIHdpZHRoPScyJyBoZWlnaHQ9JzInLz48cmVjdCAgeD0nOScgeT0nNycgd2lkdGg9JzInIGhlaWdodD0nMicvPjxyZWN0ICB4PScxMycgeT0nNycgd2lkdGg9JzInIGhlaWdodD0nMicvPjxyZWN0ICB4PSc5JyB5PSc5JyB3aWR0aD0nMicgaGVpZ2h0PScyJy8+PHJlY3QgIHg9JzEzJyB5PSc5JyB3aWR0aD0nMicgaGVpZ2h0PScyJy8+PHJlY3QgIHg9JzknIHk9JzExJyB3aWR0aD0nMicgaGVpZ2h0PScyJy8+PHJlY3QgIHg9JzEzJyB5PScxMScgd2lkdGg9JzInIGhlaWdodD0nMicvPjxyZWN0ICB4PSc3JyB5PSc5JyB3aWR0aD0nMicgaGVpZ2h0PScyJy8+PHJlY3QgIHg9JzE1JyB5PSc5JyB3aWR0aD0nMicgaGVpZ2h0PScyJy8+PHJlY3QgIHg9JzcnIHk9JzExJyB3aWR0aD0nMicgaGVpZ2h0PScyJy8+PHJlY3QgIHg9JzE1JyB5PScxMScgd2lkdGg9JzInIGhlaWdodD0nMicvPjwvZz48L3N2Zz4=" alt="icon" />
                                                                WETH
                                                            </Dropdown.Item>
                                                            <Dropdown.Item href="/">
                                                                <img src="https://raw.githubusercontent.com/rarible/public-assets/main/tokens/DAI.png" alt="icon" />
                                                                DAI
                                                            </Dropdown.Item>
                                                            <Dropdown.Item href="/">
                                                                <img src="https://raw.githubusercontent.com/rarible/public-assets/main/tokens/USDC.png" alt="icon" />
                                                                USDC
                                                            </Dropdown.Item>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                </InputGroup.Text>
                                            </InputGroup>

                                            <p>
                                            Bids below this amount won’t be allowed.
                                            </p>

                                            <Row className='mt-3'>
                                                <Col md={6} className='mb-3'>
                                                    <h3 className='mb-0'>Starting Date</h3>
                                                    <InputGroup className="mb-3 input-group-field">
                                                    <Form.Select>
                                                        <option>Pick specific date</option>
                                                        <option value="1">Pick specific date</option>
                                                    </Form.Select>
                                                    </InputGroup>
                                                </Col>
                                                <Col md={6} className='mb-3'>
                                                    <h3 className='mb-0'>Expiration Date</h3>
                                                    <InputGroup className="mb-3 input-group-field">
                                                    <Form.Select>
                                                        <option value="1">1 Day</option>
                                                        <option value="3">3 days</option>
                                                        <option value="5">5 days</option>
                                                        <option value="7">7 days</option>
                                                        <option value="full">Pick specific date</option>
                                                    </Form.Select>
                                                    </InputGroup>
                                                </Col>
                                            </Row>

                                            <p>Any bid placed in the last 10 minutes extends the auction by 10 minutes. <Link to="/">Learn more how timed auctions work</Link></p>
                                        </div>                                    
                                    </Tab>
                                </Tabs>
                            </div>

                            <div className="mb-4">
                                <div className="d-flex mb-4">
                                    <div className='me-auto pe-2'>
                                        <h3 className='text-grad'>Unlock once purchased</h3>
                                        <p>Content will be unlocked after successful transaction</p>
                                    </div>

                                    <Form.Check 
                                        type="switch"
                                        id="custom-switch"
                                    />
                                </div>
                                <InputGroup className="mb-3 input-group-field">
                                    <Form.Control
                                        placeholder="Digital key, code to redeem or link to a file..."
                                    />
                                </InputGroup>
                                <p>Markdown is supported</p>
                            </div>

                            <div className="mb-4">
                                <h3 className="mb-3">Choose collection</h3>

                                <div className="d-flex align-items-center">
                                    <Button variant='card' className='flex-wrap' onClick={handleShow}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 50 50" fill="rgba(4, 4, 5, 1)"><path d="M25,2C12.317,2,2,12.317,2,25s10.317,23,23,23s23-10.317,23-23S37.683,2,25,2z M37,26H26v11h-2V26H13v-2h11V13h2v11h11V26z" color="currentColor"></path></svg>

                                        <h3>Create</h3>
                                        <p>ERC-721</p>
                                    </Button>
                                    <Button variant='card' className='ms-3 active flex-wrap'>
                                        <img src="https://img.rarible.com/prod/image/upload/t_avatar_big/prod-collections/0xc9154424b823b10579895ccbe442d41b9abd96ed/avatar/QmcDaCYiJJ9VTqJKzrVGAPDLUX6C66JLRzfb6k3nMA9tto" alt="icon" />

                                        <h3>Rarible</h3>
                                        <p>RARI</p>
                                    </Button>
                                </div>
                            </div>

                            <div className="mb-4">
                                <div className="d-flex mb-4">
                                    <div className='me-auto pe-2'>
                                        <h3 className='text-grad'>Free minting <OverlayTrigger
                                        placement="top"
                                        delay={{ show: 250, hide: 400 }}
                                        overlay={<Tooltip id="button-tooltip">
                                        Your item won't be minted in blockchain. Your NFT will be stored for further minting by buyer
                                      </Tooltip>}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi ms-2 bi-question-circle" viewBox="0 0 16 16">
                                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                            <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"/>
                                            </svg>
                                    </OverlayTrigger></h3>
                                        <p>Buyer will pay gas fees for minting</p>
                                    </div>

                                    <Form.Check 
                                        checked
                                        type="switch"
                                        id="custom-switch"
                                    />
                                </div>

                                <h3>Name</h3>
                                <InputGroup className="mb-4 input-group-field">
                                    <Form.Control
                                        placeholder='e. g. "Redeemable T-Shirt with logo"'
                                    />
                                </InputGroup>

                                <h3>Description <small>(Optional)</small></h3>
                                <InputGroup className="mb-2 input-group-field">
                                    <Form.Control
                                        placeholder='e. g. "After purchasing you’ll be able to get the real T-Shirt"'
                                    />
                                </InputGroup>
                                <p className='mb-4'>With preserved line-breaks</p>

                                <h3>Royalties</h3>
                                <InputGroup className="mb-2 input-group-field">
                                    <Form.Control
                                        placeholder='10'
                                    />
                                    <InputGroup.Text id="basic-addon2">%</InputGroup.Text>
                                </InputGroup>
                                <p className='mb-4'>Suggested: 0%, 10%, 20%, 30%. Maximum is 50%</p>

                                <Button variant='white' className='w-100 mb-4' size='lg'>Hide advanced settings</Button>

                                <h3>Properties <small>(Optional)</small></h3>
                                <Row className='mb-4'>
                                    <Col className='mb-2'>
                                        <InputGroup className="input-group-field">
                                            <Form.Control
                                                placeholder='e.g. Size'
                                            />
                                        </InputGroup>
                                    </Col>
                                    <Col className='mb-2'>
                                        <InputGroup className="input-group-field">
                                            <Form.Control
                                                placeholder='e.g. M'
                                            />
                                        </InputGroup>
                                    </Col>
                                </Row>

                                <h3>Alternative text for NFT <small>(Optional)</small></h3>
                                <InputGroup className="mb-2 input-group-field">
                                    <Form.Control
                                        placeholder='Image description in details (do not start with word “image”)'
                                    />
                                </InputGroup>
                                <p>Text that will be used in VoiceOver for people with disabilities</p>
                            </div>

                            <div className="d-flex flex-wrap justify-content-between align-items-center">
                                <Button variant='primary' size="lg" onClick={handleShowTest}>Create item</Button>

                                <div className='d-flex align-items-center'>
                                    Saved just now 

                                    <OverlayTrigger
                                        placement="top"
                                        delay={{ show: 250, hide: 400 }}
                                        overlay={<Tooltip id="button-tooltip">
                                        Auto-saving is enabled. All data will be stored in your browser only
                                      </Tooltip>}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi ms-2 bi-question-circle" viewBox="0 0 16 16">
                                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                            <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"/>
                                            </svg>
                                    </OverlayTrigger>
                                </div>
                            </div>
                        </Col>
                        <Col md={4} className='mb-3'>
                            <h3 className='mb-3'>Preview</h3>
                            <Card>
                                <Card.Body>
                                    <div className="d-flex text-center align-items-center" style={{minHeight: '300px'}}>
                                        <p>Upload file to preview your brand new NFT</p>
                                    </div>
                                </Card.Body>
                            </Card>
                            <br />
                            <br />
                            <CardInfo verify={true} title="Wizard Furbiez #26" count="25" subTitle={`<span>Highest bid</span> <span>1/1</span>`} linkText="0.001 WETH" />

                            <br />
                            <br />
                            <Card>
                                <Card.Body>
                                    <div className="text-center">
                                        <p>Unlockable content</p>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </Container>

            <Modal show={show} centered size="sm" onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Collection</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="d-flex mb-4">
                        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxMDAnIGhlaWdodD0nMTAwJyBzdHlsZT0nYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI0NiwyNDYsMjQ2LDEpOyc+PGcgc3R5bGU9J2ZpbGw6cmdiYSgyMTcsMzgsMzgsMSk7IHN0cm9rZTpyZ2JhKDIxNywzOCwzOCwxKTsgc3Ryb2tlLXdpZHRoOjAuNTsnPjxyZWN0ICB4PSc0NicgeT0nMzAnIHdpZHRoPSc4JyBoZWlnaHQ9JzgnLz48cmVjdCAgeD0nNDYnIHk9JzM4JyB3aWR0aD0nOCcgaGVpZ2h0PSc4Jy8+PHJlY3QgIHg9JzQ2JyB5PSc0Nicgd2lkdGg9JzgnIGhlaWdodD0nOCcvPjxyZWN0ICB4PSc0NicgeT0nNTQnIHdpZHRoPSc4JyBoZWlnaHQ9JzgnLz48cmVjdCAgeD0nNDYnIHk9JzYyJyB3aWR0aD0nOCcgaGVpZ2h0PSc4Jy8+PHJlY3QgIHg9JzM4JyB5PSczMCcgd2lkdGg9JzgnIGhlaWdodD0nOCcvPjxyZWN0ICB4PSc1NCcgeT0nMzAnIHdpZHRoPSc4JyBoZWlnaHQ9JzgnLz48cmVjdCAgeD0nMzgnIHk9JzM4JyB3aWR0aD0nOCcgaGVpZ2h0PSc4Jy8+PHJlY3QgIHg9JzU0JyB5PSczOCcgd2lkdGg9JzgnIGhlaWdodD0nOCcvPjxyZWN0ICB4PSczOCcgeT0nNDYnIHdpZHRoPSc4JyBoZWlnaHQ9JzgnLz48cmVjdCAgeD0nNTQnIHk9JzQ2JyB3aWR0aD0nOCcgaGVpZ2h0PSc4Jy8+PHJlY3QgIHg9JzM4JyB5PSc1NCcgd2lkdGg9JzgnIGhlaWdodD0nOCcvPjxyZWN0ICB4PSc1NCcgeT0nNTQnIHdpZHRoPSc4JyBoZWlnaHQ9JzgnLz48cmVjdCAgeD0nMzgnIHk9JzYyJyB3aWR0aD0nOCcgaGVpZ2h0PSc4Jy8+PHJlY3QgIHg9JzU0JyB5PSc2Micgd2lkdGg9JzgnIGhlaWdodD0nOCcvPjxyZWN0ICB4PSczMCcgeT0nMzAnIHdpZHRoPSc4JyBoZWlnaHQ9JzgnLz48cmVjdCAgeD0nNjInIHk9JzMwJyB3aWR0aD0nOCcgaGVpZ2h0PSc4Jy8+PHJlY3QgIHg9JzMwJyB5PSczOCcgd2lkdGg9JzgnIGhlaWdodD0nOCcvPjxyZWN0ICB4PSc2MicgeT0nMzgnIHdpZHRoPSc4JyBoZWlnaHQ9JzgnLz48cmVjdCAgeD0nMzAnIHk9JzQ2JyB3aWR0aD0nOCcgaGVpZ2h0PSc4Jy8+PHJlY3QgIHg9JzYyJyB5PSc0Nicgd2lkdGg9JzgnIGhlaWdodD0nOCcvPjxyZWN0ICB4PSczMCcgeT0nNTQnIHdpZHRoPSc4JyBoZWlnaHQ9JzgnLz48cmVjdCAgeD0nNjInIHk9JzU0JyB3aWR0aD0nOCcgaGVpZ2h0PSc4Jy8+PHJlY3QgIHg9JzMwJyB5PSc2Micgd2lkdGg9JzgnIGhlaWdodD0nOCcvPjxyZWN0ICB4PSc2MicgeT0nNjInIHdpZHRoPSc4JyBoZWlnaHQ9JzgnLz48L2c+PC9zdmc+" alt="icon" />

                        <div className='ms-3'>
                            <p className='mb-3'>We recommend an image of at least 300x300. Gifs work too.</p>

                            <input type="file" hidden id='upload-2' />
                            <label htmlFor="upload-2" className='btn btn-light-blue'>Choose File</label>
                        </div>
                    </div>

                    <h3>Display name <small>(required)</small></h3>
                    <InputGroup className="mb-2 input-group-field">
                        <Form.Control
                            placeholder='Enter collection name'
                        />
                    </InputGroup>
                    <p className='mb-4'>Token name cannot be changed in future</p>

                    <h3>Symbol <small>(required)</small></h3>
                    <InputGroup className="mb-4 input-group-field">
                        <Form.Control
                            placeholder='Enter token symbol'
                        />
                    </InputGroup>

                    <h3>Description <small>(required)</small></h3>
                    <InputGroup className="mb-4 input-group-field">
                        <Form.Control
                            placeholder='Spread some words about your token collection'
                        />
                    </InputGroup>

                    <h3>Short url <small>(required)</small></h3>
                    <InputGroup className="mb-2 input-group-field">
                        <InputGroup.Text className='ps-0' id="basic-addon1">rarible.com/</InputGroup.Text>
                        <Form.Control
                            placeholder='Enter short url'
                        />
                    </InputGroup>
                    <p className='mb-4'>Will be used as public URL</p>

                    <Button className='w-100' variant='primary'>Create collection</Button>
                </Modal.Body>
            </Modal>


            <Modal show={showTest} centered size="sm" onHide={handleCloseTest}>
                <Modal.Header closeButton />
                <Modal.Body>
                    <div className="text-center py-4">
                        <h3>Form Successfully created</h3>
                    </div>

                    <Button variant="primary" size="lg" className='w-100'>Done</Button>
                </Modal.Body>
            </Modal>
        </Layout>
    );
};

export default Start;