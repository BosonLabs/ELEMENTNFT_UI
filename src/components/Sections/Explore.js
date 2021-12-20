import React from 'react';
import Card from '../Snippets/Card';
import {Button} from 'react-bootstrap';
import FilterExplore from '../Snippets/FilterExplore';

const Explore = () => {
    return (
        <div className='mb-36'>
            <div className="mb-16 d-flex align-items-center">
                <div className='h2 w-100 flex-grow-1 d-xl-flex align-items-center'>
                    Explore

                    <div className="ps-xl-4 mt-xl-0 mt-2 flex-grow-1">
                        <FilterExplore />
                    </div>
                </div>
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

            <div className="load-more">
                <Button variant='border-grad' className='w-100' size="lg"><span>Load More</span></Button>
            </div>

        </div>
    );
};

export default Explore;