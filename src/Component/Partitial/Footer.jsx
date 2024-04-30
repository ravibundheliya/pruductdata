import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';

function Footer() {
    return (
        <>
            <Container fluid className='pt-5 pb-5 ps-0 pe-0 footerclr'>
                <Container>
                    <Row className='g-2 '>
                        <Col md={6} xl={4} className='p-2'>
                            <div className='p-2 f1'>
                                <div className='ft'>SIGN UP NOW & GET 10% OFF</div>
                                <div className='fd pt-3'>Get timely updates from your favorite products</div>
                                <div className='fb'>
                                    <input type="text" placeholder='Enter Address*' />
                                    <input type="submit" value={'SUBSCRIBE'} className='fsbt' />
                                </div>
                            </div>
                        </Col>
                        <Col md={6} xl={4} className='p-2'>
                            <div className='p-2 f1'>
                                <div className='ft'>CONTACT INFO</div>
                                <div className='fd pt-3'>Phone: 888-999-000-1425</div>
                                <div className='fd'>Email: azedw@mail.com</div>
                                <div className='fd'>Address: 22/1 natinoal city austria, dreem land, Huwai</div>
                            </div>
                        </Col>
                        <Col md={6} xl={2} className='p-2'>
                            <div className='p-2 f1'>
                                <div className='ft'>COMPANY</div>
                                <div className='fd pt-3'><a href="index.html">About us</a></div>
                                <div className='fd'><a href="index.html">Best services</a></div>
                                <div className='fd'><a href="index.html">Recent insight</a></div>
                                <div className='fd'><a href="index.html">Shipping guid</a></div>
                                <div className='fd'><a href="index.html">Privacy policy</a></div>
                            </div>
                        </Col>
                        <Col md={6} xl={2} className='p-2'>
                            <div className='p-2 f1'>
                                <div className='ft'>PAYMENT & SHIPPING</div>
                                <div className='fd pt-3'><a href="index.html">Payment method</a></div>
                                <div className='fd'><a href="index.html">Tearms of use</a></div>
                                <div className='fd'><a href="index.html">Shipping policy</a></div>
                                <div className='fd'><a href="index.html">Shipping guide</a></div>
                                <div className='fd'><a href="index.html">Return policy</a></div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    )
}

export default Footer
