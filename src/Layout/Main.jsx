import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Footer from '../shared/footer/Footer';
import Header from '../shared/Header/Header';
import LeftNav from '../shared/LeftNav/LeftNav';
import RightNave from '../shared/RightNav/RightNave';

const Main = () => {
    return (
        <div>
            <Header />
            <Container>
                <Row>
                    <Col lg={3}><LeftNav></LeftNav></Col>
                    <Col lg={6}>Main component......</Col>
                    <Col lg={3}><RightNave></RightNave></Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;