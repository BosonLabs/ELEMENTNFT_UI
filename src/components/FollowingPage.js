import React from 'react';
import Layout from './Layout';
import {Container} from 'react-bootstrap';
import FilterExplore from './Snippets/FilterExplore';
import {
    Link
  } from "react-router-dom";


function FollowingPage() {
    // React.useEffect(() => {
    //     window.scrollTo(0, 0);
    // });

    return (
        <Layout>
            <Container fluid="lg">
                <div className="page-spacer">
                    <div className="mb-32">
                        <div className='h1 w-100 d-flex align-items-center'>
                        Following
                        </div>
                        <FilterExplore />
                    </div>

                    <div className="no-found py-5p text-center">
                        <h2>Nothing to look at</h2>
                        <p className="lead mb-4">Subscribe to authors and come back to see <br />NFTs from your favorite artists</p>
                        <Link to="/" className='btn btn-primary'>Browse marketplace</Link>
                    </div>
                </div>
            </Container>
        </Layout>
    );
}

export default FollowingPage;