import React,{useState,useEffect} from 'react';
import {Tabs, Tab} from 'react-bootstrap'
import OnSale from '../Snippets/tabs/OnSale';
import Created from '../Snippets/tabs/Created';
import Liked from '../Snippets/tabs/Liked';
import Collection from '../Snippets/tabs/Collection';
import Activity from '../Snippets/tabs/Activity';
import Owned from '../Snippets/tabs/Owned';
//import firebase from '../../firebase';
import Card from '../Snippets/Card';
import OnSaleLike from '../Snippets/tabs/OnSaleLike';
import OnSaleOther from '../Snippets/tabs/OnSaleOther';
import CreatedViewOther from '../Snippets/tabs/CreatedViewOther';


const ProfileTabsOther = (create) => {
    // React.useEffect(() => {
    // window.scrollTo(0, 0);     
    // });

    // console.log("bcreate",create.create)    
    // console.log("bsale",create.sale) 
    // console.log("bbuyed",create.buyed) 
    // console.log("Logp",create.owner)
    
    return (
        <Tabs defaultActiveKey="onSale" id="profile-tabs" className="mb-4">
        <Tab eventKey="onSale" title="On sale">
            <OnSaleOther data={create.sale}/>
        </Tab>
        <Tab eventKey="owned" title="Owned">
            <OnSale data={create.buyed}/>
        </Tab>                        
        <Tab eventKey="created" title="Created">                
            <CreatedViewOther data={create.create}/>
        </Tab>                
        {/* <Tab eventKey="collections" title={<span>Collections <span class="badge badge-new">new</span></span>}>
            <Collection />
        </Tab> */}
        <Tab eventKey="liked" title="Liked">
            <OnSaleLike data={create.likes}/>
        </Tab>        
        <Tab eventKey="activity" title="Activity">
            <Activity datas={create.create} other={"other"} ownersend={create.owner}/>
        </Tab>
    </Tabs>
 
    );
};

export default ProfileTabsOther;