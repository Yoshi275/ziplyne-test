import React from 'react';
import './Hero.css';
import Desk from '../../assets/ZL-Sample Desk.png'
import { Container, Image, Col } from 'react-bootstrap'
import Wave from './wave.svg'

const hero = props => (
    <header className="hero">
        <div className="hero">
            <div className="hero-image">
                <Container>
                    <Col>
                        <Image src={Desk} responsive className="hero-image"/>
                        <Image src={Wave} responsive className="hero-overlay"/>
                    </Col>
                </Container>
            </div>
        </div>
    </header>
)

export default hero;