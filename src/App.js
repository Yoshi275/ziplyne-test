import React from 'react';
import './App.css';
import Toolbar from './components/Toolbar/Toolbar.js'
import Hero from './components/Hero/Hero.js'
import Body from './components/Body/body.js'
import { Container, Row, Image } from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <Container fluid>
        <Row>
          <Toolbar />
        </Row>
        <Row>
          <Hero />
        </Row>
        <Row>
          <Body />
        </Row>
        <Row>
          <Image src="holder.js/171x180" thumbnail />
        </Row>
      </Container>
    </div>
  );
}

export default App;
