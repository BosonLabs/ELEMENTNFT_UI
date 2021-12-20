import React from 'react';
import {
    Link
  } from "react-router-dom";
import {Badge} from 'react-bootstrap';

import Banner from '../assets/images/loginBanner.png';

function LoginPage() {
    React.useEffect(() => {
        window.scrollTo(0, 0);
    });

    return (
       <div className="login-view d-flex flex-column">
           <img src={Banner} className='login-image d-none d-md-block' alt="banner" />
           <div className="login-header">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="40" height="40" rx="8" fill="#FEDA03"></rect><path d="M27.6007 19.8536C28.8607 19.5262 29.9817 18.5838 29.9817 16.6889C29.9817 13.5342 27.3031 12.8 23.8706 12.8H10.2V27.0064H15.9539V22.185H22.7793C23.8309 22.185 24.446 22.6016 24.446 23.6334V27.0064H30.2V23.4548C30.2 21.5203 29.1087 20.3 27.6007 19.8536ZM22.8785 18.3556H15.9539V16.9667H22.8785C23.6325 16.9667 24.0888 17.0659 24.0888 17.6612C24.0888 18.2564 23.6325 18.3556 22.8785 18.3556Z" fill="black"></path></svg>
           </div>

           <div className="login-middle my-md-auto mb-auto">
                <h1>Sign in with your wallet</h1>
                <h6>Sign in with one of available wallet providers or create a new wallet. <Link to="/">What is a wallet?</Link></h6>

                <div className="py-4">
                    <Link to="/" className='mb-3 btn btn-login'>
                        <img src="https://rarible.com/6eb10dd4202620a6d06e.svg" alt="icon" />
                        <span>Torus</span>
                    </Link>
                    <Link to="/" className='mb-3 btn btn-login'>
                        <img src="https://rarible.com/970342d3c19a87a56dba.svg" alt="icon" />
                        <span>Beacon</span>

                        <Badge bg="primary"><img src="https://rarible.com/61c387f0aceb9f1a4028.svg" alt="icon" /> Tezos</Badge>
                    </Link>
                    <Link to="/" className='mb-3 btn btn-login'>
                        <img src="https://rarible.com/945cf4b0cd1feed1f9f0.svg" alt="icon" />
                        <span>Blocto</span>
                        <Badge bg="success"><img src="https://rarible.com/3f5633921f56ebd660bd.svg" alt="icon" /> Flow</Badge>
                    </Link>
                    <Link to="/" className='mb-3 btn btn-login'>
                        <img src="https://rarible.com/46e9de883ee51bb6239f.png" alt="icon" />
                        <span>Mobile Wallet</span>
                    </Link>
                    <Link to="/" className='mb-3 btn btn-login btn-login-eq'>
                        <span>Show more options</span>
                    </Link>
                </div>

                <p>We do not own your private keys and cannot access your funds without your confirmation.</p>
           </div>

           <div className="login-footer">
                Poly You 2, 2018, ed. 5 by <Link to="/">Lius&Poly</Link>
           </div>
       </div> 
    );
}

export default LoginPage;