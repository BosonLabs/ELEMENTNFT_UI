import React,{useContext} from 'react';
import Layout from './Layout';
import {Container} from 'react-bootstrap';
import FilterExplore from './Snippets/FilterExplore';
import {
    Link
  } from "react-router-dom";
import { DataContext } from '../Context/DataContext';
import Activity from './Snippets/Activity';


function FollowingPage() {
    // React.useEffect(() => {
    //     window.scrollTo(0, 0);
    // });

    const {getApiDataProfile,setApiDataProfile}=useContext(DataContext)
    console.log("ApiFollowing",getApiDataProfile)
    return (
        <Layout>
            <Container fluid="lg">
                <div className="page-spacer">
                    {/* {getApiDataProfile.map()} */}
                    <div className="mb-32">
                        <div className='h1 w-100 d-flex align-items-center'>
                        Following
                        </div>
                        {/* <FilterExplore /> */}
                        {/* <Activity image={x.Imageurl} dataall={x}/>   */}
                    </div>

                    <div className="no-found py-5p text-center">
                        <h2>Nothing to look at</h2>
                        <p className="lead mb-4">Subscribe to authors and come back to see <br />NFTs from your favorite artists</p>
                        <Link className='btn btn-primary'>Browse marketplace</Link>
                    </div>
                </div>
            </Container>
        </Layout>
    );
}

export default FollowingPage;