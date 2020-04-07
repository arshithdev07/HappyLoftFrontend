import React from 'react';
import { Container,Row, Image } from 'react-bootstrap';
import CardLayout from '../common/CardLayout';
import './aboutUs.css';

const AboutUsPage = () => {
    return (
        <div className="about-us-section">
            <div className="about-us-container">
                <Container>
                    <Row>
                        <Image className="img-mascot" src="../assets/mascot.jpg" fluid />
                        <h1 className="about-us">About Us</h1>
                    </Row>
                </Container>
            </div>

            <div className="about-desc-container">
                <Container>
                    <Row>
                        <h2 className="about-heading">What is HappyLoft?</h2>
                        <div className="about-content">
                        Our team has built a platform to bridge the gap between the individuals who are in need
                        of help and the individuals who are ready to help. HappyLoft will help users to request for any
                        service by posting it on the website or find the appropriate individual who is ready to help out with
                        what they need. Be it a fitness instructor, plumbing job, helping with the garden, decorating the
                        house for parties, or in need of a photographer, our website will be a sure shot destination for all the
                        services. As many students and working-class prefer to request or search for such requests on the
                        go, we envision our website catering to desktop users, tablets and mobile phone users.
                        </div>
                    </Row>

                    <Row>
                        <h2 className="about-heading">Meet The Team</h2>
                    </Row>
                    <Row>
                        <CardLayout img={'../assets/mascot1.jpg'} title="Arshith Devanand" text="About Arshith"/>
                        <CardLayout img={'../assets/mascot2.jpg'} title="Jayshil Patel" text="About Jayshil"/>
                        <CardLayout img={'../assets/mascot3.jpg'} title="Praveen Kumar" text="About Praveen"/>
                        <CardLayout img={'../assets/mascot4.jpg'} title="Tanshi Arora" text="About Tanshi"/>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default AboutUsPage;