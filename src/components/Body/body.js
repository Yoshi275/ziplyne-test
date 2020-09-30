import React from 'react';
import './body.css';
import Computer from '../../assets/Untitled design (15).png'
import Diamond from '../../assets/Diamond.png'
import { Container, Image, Col, Row } from 'react-bootstrap'

const body = props => (
    <body className="body-content">
        <div className="body-image">
            <Container>
                <Row>
                    <Col>
                        <p className="body-image_text">Lorem Ipsum Dolor Lorem</p>
                        <p className="body-image_text_2">Ipsum dolor Amet</p>
                        <Image className="body-image_computer" src={Computer} fluid style={{height: 'auto', width: '70%', left: '0px'}} alt="Computer" />
                        <Image className="body-image_diamond" src={Diamond} fluid style={{height: 'auto', width: '25%'}} alt="Diamond" />
                    </Col>
                </Row>
            </Container>
        </div>
    </body>
);

export default body;