import { useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import flowers from '../communication/flowers';
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Home = (props) => {

    const history = useHistory ()
    let goToQuiz = (name) => {
        history.push({pathname:'/quiz', state: {flowerName: name}})
    }
    let getImages = () => {
        return flowers.map(flower => 
        <Col key = {flower.name}>
        <Card onClick = {() => goToQuiz (flower.name)}> 
            <Card.Img variant="top" src={flower.picture} />
            <Card.Body>
                <Card.Text>
                    {flower.name}
                </Card.Text>
            </Card.Body>
        </Card></Col>);
    }
    return (
        <Container>
            <Row xs={1} md={2} className="g-4">
            {getImages()}
            </Row>
        </Container>
    );
    
}

export default Home;