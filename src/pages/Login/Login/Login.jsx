import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';

const Login = () => {

    const { signIn } = useContext(AuthContext);

    const location = useLocation();
    const navigate = useNavigate();
    const form = location?.state?.form?.pathname || './category/0'
    console.log(location);

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then(res => {
                
                console.log(res.user)
                navigate('/');
                 navigate(form, { replace: true })  
                 form.reset(); 
            })
            .catch(err => console.log(err))
    };

    return (
        <Container>
            <h1 className='text-center m-5'>Please-Login....</h1>
            <Form onSubmit={handleLogin} className='w-50 p-5 border my-5 mx-auto'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Login
                </Button>
                <Form.Text className="text-muted">
                    {/* We'll never share your email with anyone else. */}
                    don't have an Account? <Link to='/register' className='mx-3'>Register</Link>
                </Form.Text>
            </Form>
        </Container>
    );
};

export default Login;