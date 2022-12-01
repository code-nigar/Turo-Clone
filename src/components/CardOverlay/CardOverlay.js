import React from 'react'
import Card from 'react-bootstrap/Card';
import './Card.css'
import FloatingOptions from '../FloatingOptions/FloatingOptions';

function CardOverlay() {
  return (
    <Card className="bg-dark text-white">
      <Card.Img src="https://resources.turo.com/f/81934/1984x800/493e2d1fde/hp_ny_992x400-2x_2.jpg" alt="Card image" className='card-image'/>
      <Card.ImgOverlay>
        <Card.Text>
          <FloatingOptions/>
        </Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
}

export default CardOverlay;