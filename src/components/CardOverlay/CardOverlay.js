import React from 'react'
import Card from 'react-bootstrap/Card';
import './Card.css'

function CardOverlay() {
  return (
    <Card className="bg-dark text-white">
      <Card.Img src="https://resources.turo.com/f/81934/1984x800/493e2d1fde/hp_ny_992x400-2x_2.jpg" alt="Card image" className='card-image'/>
      <Card.ImgOverlay>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </Card.Text>
        <Card.Text>Last updated 3 mins ago</Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
}

export default CardOverlay;