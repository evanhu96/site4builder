import React from 'react';
import { Container } from 'react-bootstrap';

export default function Quarters() {
  return (
    <Container style={{ marginLeft:'100px',height: '800px', width: '800px', display: 'flex', flexWrap: 'wrap' }}>
      <div style={{ width: '50%', height: '50%', border: '1px solid black' }}></div>
      <div style={{ width: '50%', height: '50%', border: '1px solid black' }}></div>
      <div style={{ width: '50%', height: '50%', border: '1px solid black' }}></div>
      <div style={{ width: '50%', height: '50%', border: '1px solid black' }}></div>
    </Container>
  );
}
