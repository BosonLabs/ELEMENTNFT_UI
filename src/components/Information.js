import React from 'react';
import Layout from './Layout';
import {Container, Breadcrumb} from 'react-bootstrap';


function HomePage() {
    // React.useEffect(() => {
    //     window.scrollTo(0, 0);
    // });

    return (
        <Layout>
            <Container>
                <div className="page-spacer">
                    <Breadcrumb>
                        <Breadcrumb.Item href="#">How it works</Breadcrumb.Item>
                        <Breadcrumb.Item href="#">
                        Safety, Security, and Policies
                        </Breadcrumb.Item>
                        <Breadcrumb.Item active>Is connecting my wallet to Rarible secure?</Breadcrumb.Item>
                    </Breadcrumb>
                    <div className="mb-32">
                        <div className='h1 w-100 d-flex align-items-center'>
                            Is connecting my wallet to Rarible secure?
                        </div>
                    </div>

                    <div className="information">
                        <p>Just like your physical wallet, your crypto wallet is secure as long as you don’t compromise it.</p>
                        <p>When you connect your wallet to Rarible, you only give us permission to “view the addresses of your permitted accounts”, meaning we can’t take anything out of your wallet.</p>
                        <p>Any transaction that costs you anything will be a separate pop-up you have to confirm each time.</p>
                        <p>So you’re safe when you’re on Rarible — but what about other pages? Follow these guidelines:</p>
                        <p>Crypto wallets are almost impossible to hack. Most of the “hacks” you hear about are actually mistakes: The owner interacted with a malicious site or gave a scammer access to their wallet.</p>
                        <p>Sometimes, bad actors DM you from a fake support account and ask you for the 12-word seed phrase. <strong>NEVER</strong> give that phrase to anyone. Ideally, write it down on paper so it stays completely offline.</p>
                        <p>Here we are on the frontier of technology, telling you to write things down on paper. But only you can keep your wallet safe—so here’s a few guidelines on how you can make sure you don’t get scammed:</p>
                        <ul>
                            <li>Never share your private keys, seed phrase or wallet passwords.</li>
                            <li>Store your private keys using a verified digital vault so that your information is safe and easily accessible to you.</li>
                            <li>Verify every transaction you sign and only connect your wallet to websites/apps you trust.</li>
                        </ul>
                    </div>
                </div>
            </Container>
        </Layout>
    );
}

export default HomePage;