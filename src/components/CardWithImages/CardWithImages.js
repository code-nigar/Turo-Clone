import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardWithImages(props) {
  return (
    <Card style={{ width: '170px' }}>
      <Card.Img variant="top" src={props.imgSrc}/>
      <Card.Body style={{padding: "10px 0px 8px 0px"}}>
        <Card.Title>{props.title}</Card.Title>
      </Card.Body>
    </Card>
  );
}

export default CardWithImages;