import React, { useEffect, useState } from 'react';

import { Col, Container, Row } from 'react-bootstrap';
import ChefsCard from './ChefsCard';

const Chefs = () => {
  const [chefs, setChefs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/chefs")
      .then(res => res.json())
      .then(data => setChefs(data))
    .catch( error=>console.error(error))
  },[])

  return (
    <Container>
      <h3 className="text-center">Our Top Chefs</h3>
      <Row>
        {chefs.map((chef) => (
          <Col md={4} key={chef.id}>
            <ChefsCard chef={chef} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Chefs;