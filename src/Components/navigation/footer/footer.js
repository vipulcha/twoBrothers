import React from 'react';
import './footer.css';
import { Container, Col, Row } from 'reactstrap';
import fb from '../../../Assests/icons/footer/fb.png';
import insta from '../../../Assests/icons/footer/insta.png';
import wordpress from '../../../Assests/icons/footer/word.png';
import google from '../../../Assests/icons/footer/google.png';
import tweet from '../../../Assests/icons/footer/tweet.png';

const footer = () => {
    return (
        <footer id="footer" className="footer">
            <Container>
                <Row>
                    <Col>
                        <div className="storage">
                            <a href='/'>About Us</a>
                            <a href="/">Blog</a>
                            <a href="/">Pages</a>
                            <a href="/">Map</a>
                        </div>
                    </Col>
                    <Col>
                        <div className="storage2">
                            <a href="/" ><img src={insta} alt="Icon" /></a>
                            <a href="/" ><img src={fb} alt="Icon" /></a>
                            <a href="/" ><img src={wordpress} alt="Icon" /></a>
                            <a href="/" ><img src={tweet} alt="Icon" /></a>
                            <a href="/" ><img src={google} alt="Icon" /></a>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p className="footer-text">Contact: 8700066792<br />Order: 8700066792 <br />
                            &copy; COPYRIGHT 2022 reserved by 2 Brother Pizza and Burger<br /><br/>
                            Made by Vipul Chauhan(2K20/SE/159) and Tushar Bhatia(2K20/SE/147)</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}
export default footer;