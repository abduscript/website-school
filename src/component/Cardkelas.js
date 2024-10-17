import Card from 'react-bootstrap/Card';

const Cardkelas = (props)=> {
    return (
        <Card>
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
            <Card.Text>
            {props.description}
            </Card.Text>
        </Card.Body>
        </Card>
    )
}

export default Cardkelas;