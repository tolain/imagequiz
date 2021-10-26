import {useLocation, Link} from 'react-router-dom'
import quizzes from '../communication/data'
import Col from "react-bootstrap/Col";
// import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import {useState} from 'react';
import { Row, Image, Container, Button } from 'react-bootstrap';

let Quiz = () => {
    const [currentIndex, setCurrentIndex] = useState (0); 
    const [quizFinished, setQuizFinished] = useState (0);
    const [gameOver, setGameOver] = useState(false);

    const location = useLocation ()
    const questions = quizzes.find (x => x.find (y => y.answer === location.state.flowerName))
    let nextQuestion = (selectedChoice) => {
        if (currentIndex < questions.length - 1) {setCurrentIndex (currentIndex + 1);}
        else {
            setGameOver(true);
        }
        if (questions[currentIndex].answer === selectedChoice) {
            setQuizFinished(quizFinished + 1);
        }
    }

    let restartQuiz = () => {
        console.log(currentIndex);
        setCurrentIndex(0);
        setGameOver(false);
        setQuizFinished(0);
    }

    function shuffle(array) {
        let places  = array.map((item, index) => index);
        return array.map((item, index, array) => {
            const random_index = Math.floor(Math.random() * places.length);
            const places_value = places[random_index];
            places.splice(random_index, 1);
            return array[places_value];
        })
}

    return (
        <Container>
            {!gameOver ?
            <Row>
                <Col>
                    <Image src={questions[currentIndex].picture}></Image>
                </Col>
                <Col>
                    <ListGroup>
                        {shuffle(questions[currentIndex].choices).map(choice =>
                            <ListGroup.Item key={choice} onClick={() => nextQuestion(choice)} action variant="light">
                            {choice}
                        </ListGroup.Item>
                            )}
                    </ListGroup>
                </Col>
            </Row>
            :''}
            <Row>
                <Col>
                    score: {quizFinished}
                </Col>
            </Row>
            {gameOver ?
            <Row>
                <Col>
                    <Button onClick={restartQuiz}>Restart</Button>
                </Col>
                <Col>
                    <Link to="/"><Button>Go Home</Button></Link>
                </Col>
            </Row>
            :''}
        </Container>
    );
}
export default Quiz;
/*
    )
    return (<div>
        <Col>
        <Card> 
            <Card.Img variant="top" src={questions[currentIndex].picture} />
            <Card.Body>
                <Card.Text>
                </Card.Text>
            </Card.Body>
        </Card></Col>
        <Col>
        <ListGroup>
        {questions[currentIndex].choices.map(choice => <ListGroup.Item onClick={nextQuestion} action variant="secondary">
            {choice}
  </ListGroup.Item>)}
  </ListGroup>
        </Col>
    </div>)
}
export default Quiz
*/