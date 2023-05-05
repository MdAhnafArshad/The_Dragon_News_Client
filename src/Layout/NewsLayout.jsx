import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/shared/footer/Footer';
import Header from '../pages/shared/Header/Header';
import RightNave from '../pages/shared/RightNav/RightNave';

const NewsLayout = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col lg={9}><Outlet></Outlet></Col>
                    <Col lg={3}><RightNave></RightNave></Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default NewsLayout;