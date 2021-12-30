import React from 'react';
import Layout from './Layout';
import {Container, Dropdown} from 'react-bootstrap';
import FilterExplore from './Snippets/FilterExplore';
import Card from './Snippets/Card';


function ExportPage() {
    // React.useEffect(() => {
    //     window.scrollTo(0, 0);
    // });

    return (
        <Layout>
            <Container fluid="lg">
                <div className="page-spacer">
                    <div className="mb-32">
                        <div className='h1 w-100 d-flex align-items-center'>
                        Explore

                            <Dropdown>
                                <Dropdown.Toggle variant="reset" className='dropdown-btn-grad'>
                                    All
                                </Dropdown.Toggle>

                                <Dropdown.Menu className='link-flex'>
                                    <Dropdown.Item href="/">All <svg viewBox="0 0 14 11" fill="none" width="12" height="12" xlmns="http://www.w3.org/2000/svg" className="sc-bdvvtL sc-hKwDye jVZlpM"><path d="M1 5L5 9L13 1" stroke="#0066ff" strokeWidth="2" strokeLinecap="round"></path></svg></Dropdown.Item>
                                    <Dropdown.Item href="/">Ethereum</Dropdown.Item>
                                    <Dropdown.Item href="/">Flow</Dropdown.Item>
                                    <Dropdown.Item href="/">Tezos</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            NFTs
                        </div>
                        <FilterExplore />
                    </div>

                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-5">
                        <div className="col mb-4"><Card verify={true} title="ArtificialPaintings R0034 by AI" count="401" subTitle={`<span>Highest bid</span> <span>1/1</span>`} linkText="0.221 WETH" /></div>
                        <div className="col mb-4"><Card verify={true} title="ArtificialPaintings R0034 by AI" count="401" subTitle={`<span>Highest bid</span> <span>1/1</span>`} linkText="0.221 WETH" /></div>
                        <div className="col mb-4"><Card verify={true} title="ArtificialPaintings R0034 by AI" count="401" subTitle={`<span>Highest bid</span> <span>1/1</span>`} linkText="0.221 WETH" /></div>
                        <div className="col mb-4"><Card verify={true} title="ArtificialPaintings R0034 by AI" count="401" subTitle={`<span>Highest bid</span> <span>1/1</span>`} linkText="0.221 WETH" /></div>
                        <div className="col mb-4"><Card verify={true} title="ArtificialPaintings R0034 by AI" count="401" subTitle={`<span>Highest bid</span> <span>1/1</span>`} linkText="0.221 WETH" /></div>
                        <div className="col mb-4"><Card verify={true} title="ArtificialPaintings R0034 by AI" count="401" subTitle={`<span>Highest bid</span> <span>1/1</span>`} linkText="0.221 WETH" /></div>
                        <div className="col mb-4"><Card verify={true} title="ArtificialPaintings R0034 by AI" count="401" subTitle={`<span>Highest bid</span> <span>1/1</span>`} linkText="0.221 WETH" /></div>
                        <div className="col mb-4"><Card verify={true} title="ArtificialPaintings R0034 by AI" count="401" subTitle={`<span>Highest bid</span> <span>1/1</span>`} linkText="0.221 WETH" /></div>
                        <div className="col mb-4"><Card verify={true} title="ArtificialPaintings R0034 by AI" count="401" subTitle={`<span>Highest bid</span> <span>1/1</span>`} linkText="0.221 WETH" /></div>
                        <div className="col mb-4"><Card verify={true} title="ArtificialPaintings R0034 by AI" count="401" subTitle={`<span>Highest bid</span> <span>1/1</span>`} linkText="0.221 WETH" /></div>
                    </div>
                </div>
            </Container>
        </Layout>
    );
}

export default ExportPage;