import React from 'react';
import {Row, Col} from 'react-bootstrap'
import {
    Link
  } from "react-router-dom";
import Filter from './filters';
import Activity from '../Activity';

const OnSale = () => {
    
    return (
        <div className='mb-4'>
            <Row>
                <Col md="8" lg="9">
                    <div className="no-found d-none py-5 text-center">
                        <h2>Nothing yet</h2>
                        <p className="lead mb-4">Looks like there's still nothing. Activity will <br />be shown here</p>
                        <Link to="/" className='btn btn-primary'>Explore ELEMENT</Link>
                    </div>

                    <Activity image="https://img.rarible.com/prod/image/upload/t_preview/prod-itemImages/0xf6793da657495ffeff9ee6350824910abc21356c:46386767890875363675912719809176821470837137778525415945768420073840868065291/6bd66461" />
                    <Activity image="https://img.rarible.com/prod/image/upload/t_avatar_big/prod-users/0xca0eb7e3991f5c93ff4ed674cd840f9daa8c5911/avatar/QmU4Eh4EXworX2zdQ7EAhd8qMUgXZa8XNcMNusNJ98d7Ug" />
                    <Activity image="https://img.rarible.com/prod/image/upload/t_preview/prod-itemImages/0xf6793da657495ffeff9ee6350824910abc21356c:46386767890875363675912719809176821470837137778525415945768420073840868065291/6bd66461" />
                    <Activity image="https://img.rarible.com/prod/image/upload/t_avatar_big/prod-users/0xca0eb7e3991f5c93ff4ed674cd840f9daa8c5911/avatar/QmU4Eh4EXworX2zdQ7EAhd8qMUgXZa8XNcMNusNJ98d7Ug" />
                    <Activity image="https://img.rarible.com/prod/image/upload/t_preview/prod-itemImages/0xf6793da657495ffeff9ee6350824910abc21356c:46386767890875363675912719809176821470837137778525415945768420073840868065291/6bd66461" />
                    <Activity image="https://img.rarible.com/prod/image/upload/t_avatar_big/prod-users/0xca0eb7e3991f5c93ff4ed674cd840f9daa8c5911/avatar/QmU4Eh4EXworX2zdQ7EAhd8qMUgXZa8XNcMNusNJ98d7Ug" />
                    <Activity image="https://img.rarible.com/prod/image/upload/t_preview/prod-itemImages/0xf6793da657495ffeff9ee6350824910abc21356c:46386767890875363675912719809176821470837137778525415945768420073840868065291/6bd66461" />
                    <Activity image="https://img.rarible.com/prod/image/upload/t_avatar_big/prod-users/0xca0eb7e3991f5c93ff4ed674cd840f9daa8c5911/avatar/QmU4Eh4EXworX2zdQ7EAhd8qMUgXZa8XNcMNusNJ98d7Ug" />
                    <Activity image="https://img.rarible.com/prod/image/upload/t_preview/prod-itemImages/0xf6793da657495ffeff9ee6350824910abc21356c:46386767890875363675912719809176821470837137778525415945768420073840868065291/6bd66461" />
                    <Activity image="https://img.rarible.com/prod/image/upload/t_avatar_big/prod-users/0xca0eb7e3991f5c93ff4ed674cd840f9daa8c5911/avatar/QmU4Eh4EXworX2zdQ7EAhd8qMUgXZa8XNcMNusNJ98d7Ug" />
                </Col>
                <Col md="4" lg="3">
                    <Filter />
                </Col>
            </Row>
            
        </div>
    );
};

export default OnSale;