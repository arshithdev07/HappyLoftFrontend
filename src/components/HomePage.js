import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Container, Row, Col } from 'react-bootstrap';
import './homepage.css';
import SignUp from './SignUp';

class HomePageComponent extends Component {
    render() {
        return ( 
            <>
            <div className="carousel-container">
            <Carousel>
                <Carousel.Item>
                    <img
                        className="carousel-img"
                        src="../assets/hh4.jpg"
                        alt="First slide"
                    />
                    <div className="shade"></div>
                    <Carousel.Caption>
                        <h3 className="carousel-caption-text">Services at your doorstep in no time</h3>
                        
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="carousel-img"
                        src="../assets/hh1.jpg"
                        alt="Second slide"
                    />
                    <div className="shade"></div>
                    <Carousel.Caption>
                        <h3 className="carousel-caption-text">Building a community together</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="carousel-img"
                        src="../assets/house.jpg"
                        alt="Third slide"
                    />
                    <div className="shade"></div>
                    <Carousel.Caption>
                        <h3 className="carousel-caption-text">Happy Loft, Happy We.</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            </div>

            <div className="hl-desc-container">
                <div className="desc-sub-container">
                    <Container>
                        <Row>
                            <Col md={6} className="container-2-col1">
                                <h2 className="hl-heading">Why Happy Loft?</h2>
                                <div className="hl-pts">
                                    <Row>
                                        <img
                                            className="hl-icon"
                                            src="../assets/home-icon.png"
                                            alt="home-icon"
                                        />
                                        <h5 className="icon-text">Easy, reliable way to take care of your home</h5>
                                    </Row>
                                    <Row>
                                        <img
                                            className="hl-icon"
                                            src="../assets/ppl-icon.png"
                                            alt="ppl-icon"
                                        />
                                        <h5 className="icon-text">Trusted, verified customers</h5>
                                    </Row>
                                    <Row>
                                        <img
                                            className="hl-icon"
                                            src="../assets/service-icon.png"
                                            alt="service-icon"
                                        />
                                        <h5 className="icon-text">Request for any service</h5>
                                    </Row>
                                </div>
                            </Col>
                            <Col md={6} className="container-2-col2">
                                <div className="guaranteed-container">
                                    <div className="gc-icon">
                                        <img
                                            className="gc-icon"
                                            src="../assets/hg-icon.png"
                                            alt="hg-icon"
                                        />
                                    </div>
                                    <br/>
                                    <h2 className="gc-heading">Happiness Guaranteed</h2>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>

            <div className="divider"></div>

            <Container>
                <Row>
                    <Col md={6}>
                        <div className="sign-up-form">
                            <SignUp />
                        </div>
                    </Col>
                    <Col md={6}>
                        <img
                            className="sign-up-img"
                            src="../assets/sign-up.jpg"
                            alt="service-icon"
                            width="400"
                        />
                    </Col>
                </Row>
            </Container>
            
            </>
        )
    }
}

export default HomePageComponent;