import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import Menu from './components/Menu';
import {
  HashRouter,
  Switch,
  Route
} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import 'bootstrap/dist/css/bootstrap.min.css';
import Quiz from './components/Quiz'

function App() {
  return (
    <HashRouter>
      <Container>
        <Row>
          <Col>This is the header!</Col>
        </Row>
        <Row>
          <Col><Menu/></Col>
        </Row>
        <Switch>
          <Route exact path='/'>
            <Home/>
          </Route>
          <Route path='/signup'>
            <Register />
          </Route>
          <Route path= '/quiz'>
            <Quiz />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
        </Switch>
        <Row>
          <Col>This is the footer!</Col>
        </Row>
      </Container>
    </HashRouter>
  );
}

export default App;
