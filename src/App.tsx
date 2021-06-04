import React from 'react';
import { Col, Container, Row } from './styles/grid-system';

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col xs={2} sm={3} md={4} lg={5} xl={2}>
            Col 1
          </Col>
          <Col xs={2} sm={3} md={4} lg={5} xl={2}>
            Col 1
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
