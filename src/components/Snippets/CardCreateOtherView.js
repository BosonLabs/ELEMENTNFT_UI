import React from 'react';
import {Card, Dropdown, OverlayTrigger, Tooltip,Modal } from 'react-bootstrap';
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


const CardCreateOtherView = (props) => {
    const [showTestLoading, setShowTestLoading] = React.useState(false);            
    const [showShare,setshowShare] = React.useState(false);                  
    const handleCloseTestLoading = () => setShowTestLoading(false);
    const handleCloseshowShare = () => setshowShare(false);    
                    
    const sharebutton=()=>{
        //console.log("SingleBid",location.state.alldata)
        setshowShare(true)
    }
    
    return (
        <Card>
            <Card.Header className='d-flex align-items-center'>
                <div className="card-users d-flex align-items-center me-auto">                    
                </div>

                <Dropdown className='dropdown-noarrow'>
                    <Dropdown.Toggle variant="reset">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-three-dots" viewBox="0 0 16 16">
                        <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
                    </svg>
                    </Dropdown.Toggle>

                    <Dropdown.Menu className='link-flex dropdown-menu-right'>
                        {/* <Dropdown.Item href="/">Buy now</Dropdown.Item> */}
                        <Dropdown.Divider />
                        <Dropdown.Item href="/profileviewother">Refresh Metadata</Dropdown.Item>
                        <Dropdown.Item onClick={()=>sharebutton()}>Share</Dropdown.Item>
                        <Dropdown.Item href="/profileviewother">Report</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Card.Header>
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
                        <Link  className='btn-link-grad'>{props.linkText}</Link>
                    </div>                    
                                    
                
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
                            <FacebookShareButton
                            url={window.location.href}
                            // quote={props.joke.setup + props.joke.punchline}
                            hashtag="#programing joke">
                            <FacebookIcon logoFillColor="white" size={32} round={true}/>
                            </FacebookShareButton>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <WhatsappShareButton
                            url={window.location.href}
                            // quote={props.joke.setup + props.joke.punchline}
                            hashtag="#programing joke">
                            <WhatsappIcon logoFillColor="white" size={32} round={true}/>
                            </WhatsappShareButton>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <TwitterShareButton
                            url={window.location.href}
                            // quote={props.joke.setup + props.joke.punchline}
                            hashtag="#programing joke">
                            <TwitterIcon logoFillColor="white" size={32} round={true}/>
                            </TwitterShareButton>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <EmailShareButton
                            url={window.location.href}
                            // quote={props.joke.setup + props.joke.punchline}
                            hashtag="#programing joke">
                            <EmailIcon logoFillColor="white" size={32} round={true}/>
                            </EmailShareButton>                                                        
                </Modal.Body>
            </Modal>                      
            </div>                   
                
            </Card.Body>
            
        </Card>
    );
};

export default CardCreateOtherView;