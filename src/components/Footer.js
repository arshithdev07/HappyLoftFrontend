import React from 'react';
import './footer.css';
import {Container, Row, Col} from 'react-bootstrap';

const FooterComponent = (props) => {
    return(
        <Container className="footer-sub-container">
            <Row className="footer-row">
                <Col>
                    HappyLoft
                </Col>
                <Col style={{textAlign: "center"}}>
                    &#169; Powered by Team 05
                </Col>
                <Col>
                    <a className="contact-link nav-link" href="/contact-us">Contact Us</a>
                </Col>
            </Row>
        </Container>
    )
}

export default FooterComponent;