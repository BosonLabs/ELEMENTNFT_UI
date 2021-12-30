import React from 'react';
import Flickity from 'react-flickity-component'
import Card from '../Snippets/Card';

const HotBids = () => {
    const flickityOptions = {
        initialIndex: 0,
        groupCells: true,
        pageDots: false,
        contain: true
    }

    return (
        <div className='mb-36'>
            <div className="mb-16 d-flex align-items-center">
                <div className='h2 d-flex align-items-center'>
                    Hot bids
                </div>
            </div>

            <Flickity
                className={'carousel'} // default ''
                elementType={'div'} // default 'div'
                options={flickityOptions} // takes flickity options {}
                disableImagesLoaded={false} // default false
                reloadOnUpdate // default false
                static // default false
            >
                <div className='carousel-cell carousel-cell-20'><Card title="LAND (-98, 129)" count="65" subTitle={`6.5 ETH <span>1/1</span>`} linkText="Buy now" /></div>
                <div className='carousel-cell carousel-cell-20'><Card title="Untitled" count="109" subTitle={`6.5 ETH <span>1/1</span>`} linkText="Buy now" /></div>
                <div className='carousel-cell carousel-cell-20'><Card title="Phunk #9379" count="109" subTitle={`<span>Not for sale</span> <span>1 edition</span>`} linkText="Bid 0.02 WETH" /></div>
                <div className='carousel-cell carousel-cell-20'><Card title="LAND (-98, 129)" count="65" subTitle={`6.5 ETH <span>1/1</span>`} linkText="Buy now" /></div>
                <div className='carousel-cell carousel-cell-20'><Card title="Untitled" count="109" subTitle={`6.5 ETH <span>1/1</span>`} linkText="Buy now" /></div>
                <div className='carousel-cell carousel-cell-20'><Card title="Phunk #9379" count="109" subTitle={`<span>Not for sale</span> <span>1 edition</span>`} linkText="Bid 0.02 WETH" /></div>
                <div className='carousel-cell carousel-cell-20'><Card title="LAND (-98, 129)" count="65" subTitle={`6.5 ETH <span>1/1</span>`} linkText="Buy now" /></div>
                <div className='carousel-cell carousel-cell-20'><Card title="Untitled" count="109" subTitle={`6.5 ETH <span>1/1</span>`} linkText="Buy now" /></div>
                <div className='carousel-cell carousel-cell-20'><Card title="Phunk #9379" count="109" subTitle={`<span>Not for sale</span> <span>1 edition</span>`} linkText="Bid 0.02 WETH" /></div>
            </Flickity>

        </div>
    );
};

export default HotBids;