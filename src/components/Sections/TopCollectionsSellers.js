import React,{useState,useEffect} from 'react';
import {Dropdown, DropdownButton} from 'react-bootstrap';
import {
    Link
  } from "react-router-dom";
import CollectionItem from '../Snippets/CollectionItem';

const TopCollectionsSelles = () => {
    const dateOptions = ["1", "7", "30"];
    const directionOptions = ["Sellers", "Buyers"];
    const [date, setDate] = useState(dateOptions[2]);
    const [direction, setDirection] = useState(directionOptions[0]);
    console.log("ses",direction);
    console.log("sesd",date);
    //options={direction} onChange={(e) => setDirection(e.target.value)} value={direction}
    const handleSelect=(e)=>{
        console.log(e);
        setDirection(e)
      }
    const handleSelect2=(e)=>{
        console.log(e);
        setDate(e)
    }
    return (

        <div className='mb-36'>
            <div className="mb-32 d-flex align-items-center">
                <div className='h2 d-flex align-items-center'>
                    Top 
                    &nbsp;
                    {direction}
                    <DropdownButton onSelect={handleSelect}>                                                
                            <Dropdown.Item eventKey="Sellers" variant="reset" className='dropdown-btn-grad'>Sellers                         
                            </Dropdown.Item>
                            <Dropdown.Item eventKey="Buyers" variant="reset" className='dropdown-btn-grad'>Buyers
                            </Dropdown.Item>                        
                    </DropdownButton>

                     in
                     &nbsp;
                     {date} day
                    <DropdownButton onSelect={handleSelect2}>                        
                            <Dropdown.Item eventKey="1" variant="reset" className='dropdown-btn-grad'>1 day                                 
                            </Dropdown.Item>
                            <Dropdown.Item eventKey="7" variant="reset" className='dropdown-btn-grad'>7 days</Dropdown.Item>
                            <Dropdown.Item eventKey="30" variant="reset" className='dropdown-btn-grad'>30 days</Dropdown.Item>                        
                    </DropdownButton>
                </div>
            </div>

            <div className="overflow-auto">
                <ul className='collection-list list-unstyled m-0 d-flex align-items-start'>
                    <li>
                        <CollectionItem verify={true} count={1} title="adidas Originals: Into the Metaverse" amount="$34,845,758" />
                        <CollectionItem verify={true} count={2} title="CloneX" amount="$7,418,707" />
                        <CollectionItem verify={true} count={3} title="My Pet Hooligan" amount="$3,333,156" />
                    </li>
                    <li>
                        <CollectionItem verify={true} count={4} title="Terraforms" amount="$2,846,949" />
                        <CollectionItem verify={true} count={5} title="BoredApeYachtClub" amount="$2,225,029" />
                        <CollectionItem verify={true} count={6} title="Nanopass" amount="$2,097,475" />
                    </li>
                    <li>
                        <CollectionItem verify={true} count={7} title="Town Star" amount="$1,972,028" />
                        <CollectionItem verify={true} count={8} title="MutantApeYachtClub" amount="$1,951,451" />
                        <CollectionItem verify={true} count={9} title="Party Bears" amount="$1,890,233" />
                    </li>
                    <li>
                        <CollectionItem verify={true} count={10} title="Sandbox's LANDs" amount="$1,777,924" />
                        <CollectionItem verify={true} count={11} title="RTFKT - CloneX Mintvial" amount="$1,321,900" />
                        <CollectionItem verify={true} count={12} title="Shiba Social Club" amount="$1,281,425" />
                    </li>
                    <li>
                        <CollectionItem verify={true} count={13} title="Art Blocks Factory" amount="$1,105,860" />
                        <CollectionItem verify={true} count={14} title="Doodles" amount="$1,024,316" />
                        <CollectionItem verify={true} count={15} title="DEGENERATE/REGENERATE" amount="$945,556" />
                    </li>
                </ul>
            </div>

            <Link to="/" className='btn d-block mt-4 d-sm-none ms-auto btn-white'>Sign in</Link>
        </div>
    );
};

export default TopCollectionsSelles;