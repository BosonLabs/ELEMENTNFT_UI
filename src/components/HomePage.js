import React from 'react';
import Layout from './Layout';
import {Container} from 'react-bootstrap';
import TopCollections from './Sections/TopCollections';
import TopCollectionsSellers from './Sections/TopCollectionsSellers';
import HotBids from './Sections/HotBids';
import LiveAuctions from './Sections/LiveAuctions';
import HotCollections from './Sections/HotCollections';
import Explore from './Sections/Explore';
import Banner from './Sections/Banner';


function HomePage() {
    // React.useEffect(() => {
    //     window.scrollTo(0, 0);
    // });

    return (
        <Layout>
            <Container fluid="lg">
                <Banner />
                <TopCollections />
                <HotBids />
                <TopCollectionsSellers />
                <LiveAuctions />
                <HotCollections />
                <Explore />
            </Container>
        </Layout>
    );
}

export default HomePage;