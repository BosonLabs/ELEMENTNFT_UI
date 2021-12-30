import React from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import AllIcon from '../../../assets/images/cate-all-icon.svg';
import {Dropdown, Row, Col, Button} from 'react-bootstrap';
import {
    Link
  } from "react-router-dom";
const animatedComponents = makeAnimated();

const OnSale = () => {
    const colourStyles = {
        option: (styles, { isFocused }) => {
          // const color = chroma(data.color);
        //   console.log({ data, isDisabled, isFocused, isSelected });
          return {
            ...styles,
            backgroundColor: isFocused ? "rgba(4, 4, 5, 0.05)" : null,
          };
        }
    };

    const CategoryOptions = [
        { value: 'all', label: 'All', icon: AllIcon },
        { value: 'art', label: '🌈  Art' },
        { value: 'photography', label: '📸  Photography' },
        { value: 'games', label: '🕹  Games' },
        { value: 'metaverses', label: '👾  Metaverses' },
        { value: 'music', label: '🎵  Music' },
        { value: 'domains', label: '🏷  Domains' },
        { value: 'deFi', label: '💰  DeFi' },
        { value: 'memes', label: '🤡  Memes' },
        { value: 'punks', label: '🤘  Punks' },
        { value: 'NSFW', label: '🔞  NSFW' }
    ]

    const saleTypeOptions = [
        { value: 'auction', label: 'Timed auction' },
        { value: 'price', label: 'Fixed price' },
        { value: 'sale', label: 'Not for sale' },
        { value: 'offers', label: 'Open for offers' }
    ]

    const PriceList = [
        { value: 'ETH', label: 'ETH', icon: 'https://raw.githubusercontent.com/rarible/public-assets/main/tokens/ETH.png' },
        { value: 'WETH', label: 'WETH', icon: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScyNCcgaGVpZ2h0PScyNCcgc3R5bGU9J2JhY2tncm91bmQtY29sb3I6cmdiYSgyNDYsMjQ2LDI0NiwxKTsnPjxnIHN0eWxlPSdmaWxsOnJnYmEoMTU4LDM4LDIxNywxKTsgc3Ryb2tlOnJnYmEoMTU4LDM4LDIxNywxKTsgc3Ryb2tlLXdpZHRoOjAuMTI7Jz48cmVjdCAgeD0nMTEnIHk9JzcnIHdpZHRoPScyJyBoZWlnaHQ9JzInLz48cmVjdCAgeD0nMTEnIHk9JzknIHdpZHRoPScyJyBoZWlnaHQ9JzInLz48cmVjdCAgeD0nMTEnIHk9JzExJyB3aWR0aD0nMicgaGVpZ2h0PScyJy8+PHJlY3QgIHg9JzExJyB5PScxMycgd2lkdGg9JzInIGhlaWdodD0nMicvPjxyZWN0ICB4PScxMScgeT0nMTUnIHdpZHRoPScyJyBoZWlnaHQ9JzInLz48cmVjdCAgeD0nOScgeT0nNycgd2lkdGg9JzInIGhlaWdodD0nMicvPjxyZWN0ICB4PScxMycgeT0nNycgd2lkdGg9JzInIGhlaWdodD0nMicvPjxyZWN0ICB4PSc5JyB5PSc5JyB3aWR0aD0nMicgaGVpZ2h0PScyJy8+PHJlY3QgIHg9JzEzJyB5PSc5JyB3aWR0aD0nMicgaGVpZ2h0PScyJy8+PHJlY3QgIHg9JzknIHk9JzExJyB3aWR0aD0nMicgaGVpZ2h0PScyJy8+PHJlY3QgIHg9JzEzJyB5PScxMScgd2lkdGg9JzInIGhlaWdodD0nMicvPjxyZWN0ICB4PSc3JyB5PSc5JyB3aWR0aD0nMicgaGVpZ2h0PScyJy8+PHJlY3QgIHg9JzE1JyB5PSc5JyB3aWR0aD0nMicgaGVpZ2h0PScyJy8+PHJlY3QgIHg9JzcnIHk9JzExJyB3aWR0aD0nMicgaGVpZ2h0PScyJy8+PHJlY3QgIHg9JzE1JyB5PScxMScgd2lkdGg9JzInIGhlaWdodD0nMicvPjwvZz48L3N2Zz4=' },
        { value: 'FLOW', label: 'FLOW', icon: 'https://raw.githubusercontent.com/rarible/public-assets/main/tokens/FLOW.png' },
        { value: 'FUSD', label: 'FUSD', icon: 'https://raw.githubusercontent.com/rarible/public-assets/main/tokens/FUSD.png' },
        { value: 'XTZ', label: 'XTZ', icon: 'https://raw.githubusercontent.com/rarible/public-assets/main/tokens/XTZ.png' },
        { value: 'DAI', label: 'DAI', icon: 'https://raw.githubusercontent.com/rarible/public-assets/main/tokens/DAI.png' },
        { value: 'USDC', label: 'USDC', icon: 'https://raw.githubusercontent.com/rarible/public-assets/main/tokens/USDC.png' },
        { value: 'RARI', label: 'RARI', icon: 'https://raw.githubusercontent.com/rarible/public-assets/main/tokens/RARI.png' },
        { value: 'ASH', label: 'ASH', icon: 'https://raw.githubusercontent.com/rarible/public-assets/main/tokens/ASH.png' },
        { value: 'ATRI', label: 'ATRI', icon: 'https://raw.githubusercontent.com/rarible/public-assets/main/tokens/ASH.png' },
        { value: 'FIRST', label: 'FIRST', icon: 'https://raw.githubusercontent.com/rarible/public-assets/main/tokens/ATRI.png' },
        { value: 'ABST', label: 'ABST', icon: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScyNCcgaGVpZ2h0PScyNCcgc3R5bGU9J2JhY2tncm91bmQtY29sb3I6cmdiYSgyNDYsMjQ2LDI0NiwxKTsnPjxnIHN0eWxlPSdmaWxsOnJnYmEoMTIxLDIxNywzOCwxKTsgc3Ryb2tlOnJnYmEoMTIxLDIxNywzOCwxKTsgc3Ryb2tlLXdpZHRoOjAuMTI7Jz48cmVjdCAgeD0nMTEnIHk9JzcnIHdpZHRoPScyJyBoZWlnaHQ9JzInLz48cmVjdCAgeD0nMTEnIHk9JzknIHdpZHRoPScyJyBoZWlnaHQ9JzInLz48cmVjdCAgeD0nMTEnIHk9JzE1JyB3aWR0aD0nMicgaGVpZ2h0PScyJy8+PHJlY3QgIHg9JzknIHk9JzknIHdpZHRoPScyJyBoZWlnaHQ9JzInLz48cmVjdCAgeD0nMTMnIHk9JzknIHdpZHRoPScyJyBoZWlnaHQ9JzInLz48cmVjdCAgeD0nOScgeT0nMTEnIHdpZHRoPScyJyBoZWlnaHQ9JzInLz48cmVjdCAgeD0nMTMnIHk9JzExJyB3aWR0aD0nMicgaGVpZ2h0PScyJy8+PHJlY3QgIHg9JzknIHk9JzEzJyB3aWR0aD0nMicgaGVpZ2h0PScyJy8+PHJlY3QgIHg9JzEzJyB5PScxMycgd2lkdGg9JzInIGhlaWdodD0nMicvPjxyZWN0ICB4PSc3JyB5PSc5JyB3aWR0aD0nMicgaGVpZ2h0PScyJy8+PHJlY3QgIHg9JzE1JyB5PSc5JyB3aWR0aD0nMicgaGVpZ2h0PScyJy8+PHJlY3QgIHg9JzcnIHk9JzE1JyB3aWR0aD0nMicgaGVpZ2h0PScyJy8+PHJlY3QgIHg9JzE1JyB5PScxNScgd2lkdGg9JzInIGhlaWdodD0nMicvPjwvZz48L3N2Zz4=' },
        { value: 'ADORs', label: 'ADORs', icon: 'https://raw.githubusercontent.com/rarible/public-assets/main/tokens/ADORs.png' },
        { value: 'ARKE', label: 'ARKE', icon: 'https://raw.githubusercontent.com/rarible/public-assets/main/tokens/ARKE.png' },
    ]
    return (
        <div className='mb-4'>
            <div className='d-flex mb-4 filter-list flex-wrap align-items-center'>
                <div className="filter-item filter-category">
                    <Select
                        styles={colourStyles}
                        closeMenuOnSelect={true}
                        components={animatedComponents}
                        // defaultValue={[colourOptions[4], colourOptions[5]]}
                        placeholder="Category"
                        options={CategoryOptions}
                        formatOptionLabel={option => (
                            <div className="custom-select-option d-flex align-items-center">
                                {option.icon && <img src={option.icon} alt="icon" />}
                                {option.label}
                            </div>
                        )}
                    />
                </div>

                <div className="filter-item filter-sale-type">
                    <Select
                        styles={colourStyles}
                        closeMenuOnSelect={false}
                        components={animatedComponents}
                        // defaultValue={[colourOptions[4], colourOptions[5]]}
                        placeholder="Sale Type"
                        isMulti
                        options={saleTypeOptions}
                        formatOptionLabel={option => (
                            <div className="custom-select-option d-flex align-items-center">
                                {option.icon && <img src={option.icon} alt="icon" />}
                                {option.label}
                            </div>
                        )}
                    />
                </div>

                <div className="filter-dropdown">
                    <Dropdown className='dropdown-noarrow'>
                        <Dropdown.Toggle variant="outline-gray">
                            <svg viewBox="0 0 10 16" fill="none" width="16" height="16" xlmns="http://www.w3.org/2000/svg" className="me-1"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.99992 0.333313C5.36811 0.333313 5.66659 0.63179 5.66659 0.99998V2.66665H8.33325C8.70144 2.66665 8.99992 2.96512 8.99992 3.33331C8.99992 3.7015 8.70144 3.99998 8.33325 3.99998H5.66659V7.33331H6.66659C7.46224 7.33331 8.2253 7.64938 8.78791 8.21199C9.35052 8.7746 9.66659 9.53766 9.66659 10.3333C9.66659 11.129 9.35052 11.892 8.78791 12.4546C8.2253 13.0172 7.46224 13.3333 6.66659 13.3333H5.66659V15C5.66659 15.3682 5.36811 15.6666 4.99992 15.6666C4.63173 15.6666 4.33325 15.3682 4.33325 15V13.3333H0.999919C0.631729 13.3333 0.333252 13.0348 0.333252 12.6666C0.333252 12.2985 0.631729 12 0.999919 12H4.33325V8.66665H3.33325C2.5376 8.66665 1.77454 8.35058 1.21193 7.78797C0.649323 7.22536 0.333252 6.4623 0.333252 5.66665C0.333252 4.871 0.649323 4.10793 1.21193 3.54533C1.77454 2.98272 2.5376 2.66665 3.33325 2.66665H4.33325V0.99998C4.33325 0.63179 4.63173 0.333313 4.99992 0.333313ZM4.33325 3.99998H3.33325C2.89122 3.99998 2.4673 4.17557 2.15474 4.48814C1.84218 4.8007 1.66659 5.22462 1.66659 5.66665C1.66659 6.10867 1.84218 6.5326 2.15474 6.84516C2.4673 7.15772 2.89122 7.33331 3.33325 7.33331H4.33325V3.99998ZM5.66659 8.66665V12H6.66659C7.10861 12 7.53254 11.8244 7.8451 11.5118C8.15766 11.1993 8.33325 10.7753 8.33325 10.3333C8.33325 9.89128 8.15766 9.46736 7.8451 9.1548C7.53254 8.84224 7.10861 8.66665 6.66659 8.66665H5.66659Z" fill="#828282"></path></svg>
                            Price
                        </Dropdown.Toggle>
                        <Dropdown.Menu className='price-dropdown'>
                            <div className="filter-item mb-3">
                            <Select
                                styles={colourStyles}
                                closeMenuOnSelect={true}
                                components={animatedComponents}
                                defaultValue={[PriceList[0]]}
                                placeholder="Category"
                                options={PriceList}
                                formatOptionLabel={option => (
                                    <div className="custom-select-option d-flex align-items-center">
                                        {option.icon && <img src={option.icon} alt="icon" />}
                                        {option.label}
                                    </div>
                                )}
                            />
                            </div>
                            <Row className='gx-2'>
                                <Col>
                                    <input type="text" placeholder='From' className='form-control' />
                                </Col>
                                <Col>
                                    <input type="text" placeholder='To' className='form-control' />
                                </Col>
                            </Row>

                            <Dropdown.Divider className='my-3' />
                            <Row className='gx-2'>
                                <Col>
                                    <Button variant='default' className='w-100'>Clear</Button>
                                </Col>
                                <Col>
                                    <Button variant='default' className='w-100' disabled>Apply</Button>
                                </Col>
                            </Row>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>

                <div className="filter-dropdown ms-auto">
                    <Dropdown className='dropdown-noarrow'>
                        <Dropdown.Toggle variant="outline-gray">
                            <div className="btn-lagend">Sort</div>
                        <svg viewBox="0 0 14 10" fill="none" width="16" height="16" xlmns="http://www.w3.org/2000/svg" className="sc-bdvvtL me-2 sc-hKwDye jsnDXb sc-egiyK fFvuv"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.333252 0.99998C0.333252 0.63179 0.631729 0.333313 0.999919 0.333313H12.9999C13.3681 0.333313 13.6666 0.63179 13.6666 0.99998C13.6666 1.36817 13.3681 1.66665 12.9999 1.66665H0.999919C0.631729 1.66665 0.333252 1.36817 0.333252 0.99998ZM1.66659 4.99998C1.66659 4.63179 1.96506 4.33331 2.33325 4.33331H11.6666C12.0348 4.33331 12.3333 4.63179 12.3333 4.99998C12.3333 5.36817 12.0348 5.66665 11.6666 5.66665H2.33325C1.96506 5.66665 1.66659 5.36817 1.66659 4.99998ZM2.99992 8.99998C2.99992 8.63179 3.2984 8.33331 3.66659 8.33331H10.3333C10.7014 8.33331 10.9999 8.63179 10.9999 8.99998C10.9999 9.36817 10.7014 9.66665 10.3333 9.66665H3.66659C3.2984 9.66665 2.99992 9.36817 2.99992 8.99998Z" fill="currentColor"></path></svg>

                        Recently added  
                        </Dropdown.Toggle>
                        <Dropdown.Menu className='dropdown-menu-right link-flex'>
                            <Dropdown.ItemText>Sort by</Dropdown.ItemText>
                            <Dropdown.Item href="/">
                                Recently added
                                <svg viewBox="0 0 14 11" fill="none" width="12" height="12" xlmns="http://www.w3.org/2000/svg" className="sc-bdvvtL sc-hKwDye jVZlpM"><path d="M1 5L5 9L13 1" stroke="#0066ff" strokeWidth="2" strokeLinecap="round"></path></svg>
                            </Dropdown.Item>
                            <Dropdown.Item href="/">
                                Price: Low to High
                            </Dropdown.Item>
                            <Dropdown.Item href="/">
                                Price: High to Low
                            </Dropdown.Item>
                            <Dropdown.Item href="/">
                                Auction ending soon
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </div>

            <div className="no-found py-5 text-center">
                <h2>No items found</h2>
                <p className="lead mb-4">Come back soon! Or try to browse <br />something for you on our marketplace</p>
                <Link to="/" className='btn btn-primary'>Browse marketplace</Link>
            </div>
        </div>
    );
};

export default OnSale;