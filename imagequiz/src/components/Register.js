import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import { useState} from 'react';
import customers from '../communication/customers';

const Register = () => {
        const [username, setUsername] = useState('');
        const [password, setPassword] = useState('');

        let saveCustomer = (e) => {
            e.preventDefault();
            customers.push({username: username, password: password})
    }

    let onUsernameChanged = (e) => {
        setUsername(e.target.value);
    }

    let onPasswordChanged = (e) => {
        setPassword(e.target.value);
    }
    return (
        <Form onSubmit={saveCustomer}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Choose a username(your email address):</Form.Label>
                <Form.Control type="email" placeholder="Enter email" value={username} onChange={onUsernameChanged}/>
               
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Choose a password</Form.Label>
                <Form.Control type="password" placeholder="Password" value={password} onChange={onPasswordChanged}/>
            </Form.Group>
            
            <Button variant="primary" type="submit">
                Sign Up
            </Button>
        </Form>
    );
}

export default Register;