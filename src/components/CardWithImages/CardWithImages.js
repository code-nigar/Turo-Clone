import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardWithImages() {
  return (
    <Card style={{ width: '160px' }}>
      <Card.Img variant="top" src="https://resources.turo.com/f/81934/767x420/5d83e7eed9/jeep.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
      </Card.Body>
    </Card>
  );
}

export default CardWithImages;