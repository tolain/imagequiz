import { useState } from "react";
import { useLocation } from "react-router";
import Card from 'react-bootstrap/Card';
import flowers from '../communication/data';
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Home = (props) => {

    const location = useLocation();
    let getImages = () => {
        return flowers.map(flower => 
        <Col>
        <Card>
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