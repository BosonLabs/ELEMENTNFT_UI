import React from 'react';
import Flickity from 'react-flickity-component'
import Card from '../Snippets/Card';

const LiveAuctions = () => {
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
                    Live auctions <img style={{width: '32px', marginLeft: '8px'}} src="https://cdn.jsdelivr.net/npm/emoji-datasource-apple@6.0.1/img/apple/64/1f525.png" alt="fire" />
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
                <div className='carousel-cell carousel-cell-20'><Card timer='19:10' verify={true} title="Wizard Furbiez #26" count="25" subTitle={`<span>Highest bid</span> <span>1/1</span>`} linkText="0.001 WETH" /></div>
                <div className='carousel-cell carousel-cell-20'><Card timer='19:10' verify={true} title="Wizard Furbiez #29" count="8" subTitle={`<span>Auction</span> <span>1/1</span>`} linkText="Buy now" /></div>
                <div className='carousel-cell carousel-cell-20'><Card verify={true} title="Wizard Furbiez #30" count="6" subTitle={`<span>Highest bid</span> <span>1 edition</span>`} linkText="Bid 0.02 WETH" /></div>
                <div className='carousel-cell carousel-cell-20'><Card timer='01:19:10' verify={true} title="Wizard Furbiez #26" count="25" subTitle={`<span>Highest bid</span> <span>1/1</span>`} linkText="0.001 WETH" /></div>
                <div className='carousel-cell carousel-cell-20'><Card verify={true} title="Wizard Furbiez #29" count="8" subTitle={`<span>Auction</span> <span>1/1</span>`} linkText="Buy now" /></div>
                <div className='carousel-cell carousel-cell-20'><Card verify={true} title="Wizard Furbiez #30" count="6" subTitle={`<span>Highest bid</span> <span>1 edition</span>`} linkText="Bid 0.02 WETH" /></div>
                <div className='carousel-cell carousel-cell-20'><Card timer='19:10' verify={true} title="Wizard Furbiez #26" count="25" subTitle={`<span>Highest bid</span> <span>1/1</span>`} linkText="0.001 WETH" /></div>
                <div className='carousel-cell carousel-cell-20'><Card verify={true} title="Wizard Furbiez #29" count="8" subTitle={`<span>Auction</span> <span>1/1</span>`} linkText="Buy now" /></div>
                <div className='carousel-cell carousel-cell-20'><Card timer='19:10' verify={true} title="Wizard Furbiez #30" count="6" subTitle={`<span>Highest bid</span> <span>1 edition</span>`} linkText="Bid 0.02 WETH" /></div>
            </Flickity>

        </div>
    );
};

export default LiveAuctions;