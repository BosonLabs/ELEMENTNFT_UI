import React,{useState} from 'react';
import {Card, Dropdown, Button, OverlayTrigger, Tooltip,Modal} from 'react-bootstrap';
import {
    Link
  } from "react-router-dom";
import EthereumIcon from '../../assets/images/Algo.png'
import {
    FacebookShareButton,
    GooglePlusShareButton,
    LinkedinShareButton,
    TwitterShareButton,
    TelegramShareButton,
    WhatsappShareButton,
    PinterestShareButton,
    VKShareButton,
    OKShareButton,
    RedditShareButton,
    TumblrShareButton,
    LivejournalShareButton,
    MailruShareButton,
    ViberShareButton,
    WorkplaceShareButton,
    EmailShareButton,
  } from 'react-share';
import {
    FacebookIcon,
    TwitterIcon,
    TelegramIcon,
    WhatsappIcon,
    GooglePlusIcon,
    LinkedinIcon,
    PinterestIcon,
    VKIcon,
    OKIcon,
    RedditIcon,
    TumblrIcon,
    LivejournalIcon,
    MailruIcon,
    ViberIcon,
    WorkplaceIcon,
    EmailIcon,
  } from 'react-share';

const CardBuyOtherView = (props) => {    
    const [showTestLoading, setShowTestLoading] = React.useState(false);  
    const [showShare,setshowShare] = React.useState(false);                            
    const handleCloseTestLoading = () => setShowTestLoading(false); 
    const handleCloseshowShare = () => setshowShare(false);           
    const sharebutton=()=>{
        //console.log("SingleBid",location.state.alldata)
        setshowShare(true)
    }
        
return (        
        <Card >
            <Card.Header className='d-flex align-items-center'>
                <div className="card-users d-flex align-items-center me-auto">
                    <OverlayTrigger
                        overlay={<Tooltip>E-Element</Tooltip>}
                    >
                        <Link to="/">
                            <img src={props.img} alt="pic" />
                        </Link>
                    </OverlayTrigger>
                    <OverlayTrigger
                        overlay={<Tooltip>E-Element</Tooltip>}
                    >
                        <Link to="/">
                            <img src={props.img} alt="pic" />
                            {props.verify ? (
                                <svg width="14" height="14" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.78117 0.743103C5.29164 -0.247701 6.70826 -0.247701 7.21872 0.743103C7.52545 1.33846 8.21742 1.62509 8.8553 1.42099C9.91685 1.08134 10.9186 2.08304 10.5789 3.1446C10.3748 3.78247 10.6614 4.47445 11.2568 4.78117C12.2476 5.29164 12.2476 6.70826 11.2568 7.21872C10.6614 7.52545 10.3748 8.21742 10.5789 8.8553C10.9186 9.91685 9.91685 10.9186 8.8553 10.5789C8.21742 10.3748 7.52545 10.6614 7.21872 11.2568C6.70826 12.2476 5.29164 12.2476 4.78117 11.2568C4.47445 10.6614 3.78247 10.3748 3.1446 10.5789C2.08304 10.9186 1.08134 9.91685 1.42099 8.8553C1.62509 8.21742 1.33846 7.52545 0.743103 7.21872C-0.247701 6.70826 -0.247701 5.29164 0.743103 4.78117C1.33846 4.47445 1.62509 3.78247 1.42099 3.1446C1.08134 2.08304 2.08304 1.08134 3.1446 1.42099C3.78247 1.62509 4.47445 1.33846 4.78117 0.743103Z" fill="#feda03"></path><path fillRule="evenodd" clipRule="evenodd" d="M8.43961 4.23998C8.64623 4.43922 8.65221 4.76823 8.45297 4.97484L5.40604 8.13462L3.54703 6.20676C3.34779 6.00014 3.35377 5.67113 3.56039 5.47189C3.76701 5.27266 4.09602 5.27864 4.29526 5.48525L5.40604 6.63718L7.70475 4.25334C7.90398 4.04672 8.23299 4.04074 8.43961 4.23998Z" fill="#000000"></path></svg>
                            ) : null}
                        </Link>
                    </OverlayTrigger>
                    <OverlayTrigger
                        overlay={<Tooltip>E-Element</Tooltip>}
                    >
                        <Link to="/">
                            <img src={props.img} alt="pic" />
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

                    {/* onClick={()=>buynow()} */}
                    <Dropdown.Menu className='link-flex dropdown-menu-right'>
                        {/* <Dropdown.Item href="/bid-2" state={props.dataall}>Buy now</Dropdown.Item> */}
                        <Dropdown.Divider />
                        <Dropdown.Item href="/profileviewother">Refresh Metadata</Dropdown.Item>
                        <Dropdown.Item onClick={()=>sharebutton()}>Share</Dropdown.Item>
                        <Dropdown.Item href="/profileviewother">Report</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Card.Header>
            <Link  to={{
            pathname: "/bid-2",
            state:{alldata:props.dataall}
            }}>
            <Card.Body className='p-0'>
                <div className="position-relative">
                    <img src={props.img} className='img-fluid card-image' alt="Preview" />
                    
                    {props.timer ? (
                        <div className="timer">
                            <div>{props.timer} <span>left</span> <img src="https://cdn.jsdelivr.net/npm/emoji-datasource-apple@6.0.1/img/apple/64/1f525.png" alt="fire" /></div></div>
                    ) : null}
                </div>

                <div className="card-title justify-content-between d-flex align-items-start">
                    <Link to="/">{props.title}</Link>

                    <OverlayTrigger
                        overlay={<Tooltip>Algorand</Tooltip>}
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
            </Link>    
            <Modal show={showTestLoading} centered size="sm" onHide={handleCloseTestLoading}>
                <Modal.Header  />
                <Modal.Body>
                    <div className="text-center py-4">
                        <h3>Loading...</h3>                                    
                    </div>                    
                </Modal.Body>
            </Modal>                          
            <Modal show={showShare} centered size="sm" onHide={handleCloseshowShare}>
                <Modal.Header closeButton />
                <Modal.Body>                        
                            <h3>&nbsp;&nbsp;Share link to this page</h3>                            
                            <br/>
                            {/* <div className="d-flex mt-3 justify-content-between"> */}
                            <div className="footer-social d-flex align-items-center">                                                       
                                <div>
                                    <a href={"https://twitter.com/ui8"} target="_blank" rel="noopener noreferrer">
                                        <svg viewBox="0 0 18 16" fill="none" width="40" height="16" xlmns="http://www.w3.org/2000/svg" class="sc-bdvvtL sc-hKwDye esgSbr"><path d="M17.9655 2.42676C17.3018 2.71851 16.593 2.91726 15.8468 3.00801C16.6073 2.54976 17.1922 1.82751 17.469 0.965759C16.7558 1.38201 15.9653 1.68501 15.1238 1.85376C14.4518 1.13451 13.494 0.684509 12.4305 0.684509C10.3927 0.684509 8.7405 2.33676 8.7405 4.37226C8.7405 4.66476 8.77425 4.94601 8.83575 5.21526C5.76825 5.07051 3.0495 3.59751 1.23 1.37076C0.90975 1.91226 0.7305 2.54151 0.7305 3.22701C0.7305 4.50951 1.383 5.63676 2.3715 6.29901C1.76625 6.27951 1.197 6.11301 0.7005 5.83701V5.88276C0.7005 7.67151 1.97025 9.16326 3.66 9.50301C3.35025 9.58626 3.02325 9.63126 2.688 9.63126C2.4525 9.63126 2.22675 9.60876 2.001 9.56676C2.47425 11.0315 3.83475 12.0995 5.454 12.1295C4.194 13.1188 2.59725 13.7083 0.8775 13.7083C0.585 13.7083 0.29325 13.691 0 13.658C1.64175 14.7035 3.576 15.3148 5.66775 15.3148C12.4583 15.3148 16.167 9.69276 16.167 4.82526C16.167 4.66851 16.167 4.51026 16.1558 4.35276C16.8765 3.83601 17.5057 3.18276 18.0007 2.44176L17.9655 2.42676Z" fill="currentColor"></path></svg>
                                   </a>
                                    <small className='d-block mt-2'>Twitter</small>
                                </div>
                                <div>                                
                                <a href={"https://www.facebook.com/"} target="_blank" rel="noopener noreferrer">
                                        <svg viewBox="0 0 24 24" width="40" height="16" xlmns="http://www.w3.org/2000/svg" class="sc-bdvvtL sc-hKwDye esgSbr"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z" fill="currentColor"></path></svg>                                   
                                </a>
                                    <small className='d-block mt-2'>Facebook</small>
                                </div>
                                <div>
                                <a href={"https://web.telegram.org/k/"} target="_blank" rel="noopener noreferrer">                                
                                        <svg viewBox="0 0 16 14" fill="none" width="40" height="16" xlmns="http://www.w3.org/2000/svg" class="sc-bdvvtL sc-hKwDye esgSbr"><path d="M15.9513 1.29916L13.5438 13.1556C13.377 13.997 12.8902 14.1987 12.21 13.8093L8.542 10.979L6.76804 12.7662C6.56797 12.9748 6.40125 13.1556 6.03445 13.1556C5.55428 13.1556 5.63431 12.9679 5.47425 12.495L4.20714 8.19051L0.572523 7.00834C-0.214421 6.76495 -0.22109 6.20168 0.745918 5.7914L14.9243 0.0891779C15.5711 -0.209841 16.1914 0.256072 15.9446 1.29221L15.9513 1.29916Z" fill="currentColor"></path></svg>
                                </a>
                                    <small className='d-block mt-2'>Telegram</small>
                                </div>
                                <div>
                                <a href={"https://mail.google.com/"} target="_blank" rel="noopener noreferrer">                                                                
                                        <svg viewBox="0 0 24 24" width="40" height="16" xlmns="http://www.w3.org/2000/svg" class="sc-bdvvtL sc-hKwDye esgSbr"><path d="M12 12.713l-11.985-9.713h23.971l-11.986 9.713zm-5.425-1.822l-6.575-5.329v12.501l6.575-7.172zm10.85 0l6.575 7.172v-12.501l-6.575 5.329zm-1.557 1.261l-3.868 3.135-3.868-3.135-8.11 8.848h23.956l-8.11-8.848z" fill="currentColor"></path></svg>
                                </a>
                                    <small className='d-block mt-2'>E-mail</small>
                                </div>
                            </div>
                </Modal.Body>
            </Modal> 
        </Card>
        
    );
};

export default CardBuyOtherView;