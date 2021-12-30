import React from 'react';
import Layout from './Layout';
import {Container, Tabs, Tab, Row, Col} from 'react-bootstrap';
import Filter from './Snippets/tabs/filters';
import Activity from './Snippets/Activity';
import {
    Link
  } from "react-router-dom";


function ActivityPage() {
    // React.useEffect(() => {
    //     window.scrollTo(0, 0);
    // });

    return (
        <Layout>
            <Container>
                <div className="page-spacer">
                    <div className='h1 w-100 d-flex align-items-center'>
                        Activity
                    </div>

                    <Tabs defaultActiveKey="onSale" id="profile-tabs" className="mb-4 nav-tabs-start">
                        <Tab eventKey="onSale" title="All">
                            <Row>
                                <Col md={7}>
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
                                <Col md={5}>
                                    <Filter />
                                </Col>
                            </Row>
                        </Tab>
                        <Tab eventKey="owned" title="Following">
                            <Row>
                                <Col md={7}>
                                    <div className="no-found py-5p text-center">
                                        <h2>Nothing yet</h2>
                                        <p className="lead mb-4">Looks like there's still nothing. Activity will <br />be shown here</p>
                                        <Link to="/" className='btn btn-primary'>Explore Element</Link>
                                    </div>
                                </Col>
                                <Col md={5}>
                                    <Filter />
                                </Col>
                            </Row>
                        </Tab>
                        <Tab eventKey="created" title="My activity">
                            <Row>
                                <Col md={7}>
                                    <div className="no-found py-5p text-center">
                                        <h2>Nothing yet</h2>
                                        <p className="lead mb-4">Looks like there's still nothing. Activity will <br />be shown here</p>
                                        <Link to="/" className='btn btn-primary'>Explore Element</Link>
                                    </div>
                                </Col>
                                <Col md={5}>
                                    <Filter />
                                </Col>
                            </Row>
                        </Tab>
                        <Tab eventKey="activity" title="My bids">
                            <div className="no-found py-5p text-center">
                                <h2>Nothing yet</h2>
                                <p className="lead mb-4">Looks like there's still nothing. Activity will <br />be shown here</p>
                                <Link to="/" className='btn btn-primary'>Explore Element</Link>
                            </div>
                        </Tab>
                    </Tabs>
                </div>
            </Container>
        </Layout>
    );
}

export default ActivityPage;