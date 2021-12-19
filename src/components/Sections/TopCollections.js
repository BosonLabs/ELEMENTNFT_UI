import React from 'react';
import {Dropdown} from 'react-bootstrap';
import {
    Link
  } from "react-router-dom";
import CollectionItem from '../Snippets/CollectionItem';

const TopCollections = () => {
    return (
        <div className='mb-36'>
            <div className="mb-32 d-flex align-items-center">
                <div className='h2 d-flex align-items-center'>
                    Top collections in

                    <Dropdown>
                        <Dropdown.Toggle variant="reset" className='dropdown-btn-grad'>
                            1 day
                        </Dropdown.Toggle>

                        <Dropdown.Menu className='link-flex'>
                            <Dropdown.Item href="/">1 day <svg viewBox="0 0 14 11" fill="none" width="12" height="12" xlmns="http://www.w3.org/2000/svg" className="sc-bdvvtL sc-hKwDye jVZlpM"><path d="M1 5L5 9L13 1" stroke="#0066ff" strokeWidth="2" strokeLinecap="round"></path></svg></Dropdown.Item>
                            <Dropdown.Item href="/">7 days</Dropdown.Item>
                            <Dropdown.Item href="/">30 days</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>

                <Link to="/" className='btn d-none d-sm-inline-block ms-auto btn-white'>Sign in</Link>
            </div>

            <div className="overflow-auto">
                <ul className='collection-list list-unstyled m-0 d-flex align-items-start'>
                    <li>
                        <CollectionItem count={1} title="adidas Originals: Into the Metaverse" amount="$34,845,758" />
                        <CollectionItem count={2} title="CloneX" amount="$7,418,707" />
                        <CollectionItem count={3} title="My Pet Hooligan" amount="$3,333,156" />
                    </li>
                    <li>
                        <CollectionItem count={4} title="Terraforms" amount="$2,846,949" />
                        <CollectionItem count={5} title="BoredApeYachtClub" amount="$2,225,029" />
                        <CollectionItem count={6} title="Nanopass" amount="$2,097,475" />
                    </li>
                    <li>
                        <CollectionItem count={7} title="Town Star" amount="$1,972,028" />
                        <CollectionItem count={8} title="MutantApeYachtClub" amount="$1,951,451" />
                        <CollectionItem count={9} title="Party Bears" amount="$1,890,233" />
                    </li>
                    <li>
                        <CollectionItem count={10} title="Sandbox's LANDs" amount="$1,777,924" />
                        <CollectionItem count={11} title="RTFKT - CloneX Mintvial" amount="$1,321,900" />
                        <CollectionItem count={12} title="Shiba Social Club" amount="$1,281,425" />
                    </li>
                    <li>
                        <CollectionItem count={13} title="Art Blocks Factory" amount="$1,105,860" />
                        <CollectionItem count={14} title="Doodles" amount="$1,024,316" />
                        <CollectionItem count={15} title="DEGENERATE/REGENERATE" amount="$945,556" />
                    </li>
                </ul>
            </div>

            <Link to="/" className='btn d-block mt-4 d-sm-none ms-auto btn-white'>Sign in</Link>
        </div>
    );
};

export default TopCollections;