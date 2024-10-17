import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Cardkegiatan = (props)=> {
    return (
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
        <Card.Title>{props.kegiatan}</Card.Title>
        <Card.Text>
        {props.description}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
        </Card.Body>
    </Card>
    )
}

export default Cardkegiatan;