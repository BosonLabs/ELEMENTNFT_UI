import React,{useState,useEffect} from 'react';
import {Tabs, Tab} from 'react-bootstrap'
import OnSale from '../Snippets/tabs/OnSale';
import OnSaleLike from '../Snippets/tabs/OnSaleLike';
import Created from '../Snippets/tabs/Created';
import Liked from '../Snippets/tabs/Liked';
import Collection from '../Snippets/tabs/Collection';
import Activity from '../Snippets/tabs/Activity';
import Owned from '../Snippets/tabs/Owned';
import firebase from '../../firebase';
import Card from '../Snippets/Card';

const ProfileTabs = (create) => {

    console.log("bcreate",create.create)    
    console.log("bsale",create.sale) 
    console.log("bbuyed",create.buyed)     
    return (
        <Tabs defaultActiveKey="onSale" id="profile-tabs" className="mb-4">
            <Tab eventKey="onSale" title="On sale">
                <OnSale data={create.sale}/>
            </Tab>
            <Tab eventKey="owned" title="Owned">
                <Owned data={create.buyed}/>
            </Tab>                        
            <Tab eventKey="created" title="Created">                
                <Created data={create.create}/>
            </Tab>                
            <Tab eventKey="collections" title={<span>Collections <span class="badge badge-new">new</span></span>}>
                <Collection />
            </Tab>
            <Tab eventKey="liked" title="Liked">
                <OnSaleLike data={create.sale}/>
            </Tab>
            {/* <Tab eventKey="liked" title="Liked">
                <Liked data={create.create}/>
            </Tab> */}
            <Tab eventKey="activity" title="Activity">
                <Activity data={create.create}/>
            </Tab>
        </Tabs>
    );
};

export default ProfileTabs;