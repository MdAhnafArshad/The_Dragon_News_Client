import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';

const Register = () => {

    const [show, setShow] = useState(false);
    const {signUp} = useContext(AuthContext);





    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target
        const name = form.name.value;
        const photoUrl = form.url.value;
        const email = form.email.value;
        const password = form.password.value;


        signUp(email, password)
            .then(res => console.log(res))
            .catch(err => console.log(err))

        // console.log(name, photoUrl, email, password);
    };

    return (
        <div>
            <Container>
                <h1 className='text-center m-5'>register....</h1>
                <Form onSubmit={handleRegister} className='w-50 p-5 border my-5 mx-auto'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" name='name' placeholder="Name" required/>
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Photo url</Form.Label>
                        <Form.Control type="url" name='url' placeholder="photo" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name='email' placeholder="Enter email" required/>
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type={show?'text':'password'} name='password' placeholder="Password" required/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check onClick={()=>{setShow(!show)}} type="checkbox" label={show?'hide':'show'} />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>

                    <Form.Text className="text-muted">
                        {/* We'll never share your email with anyone else. */}
                        Have an Account? <Link to='/login' className='mx-3'>Login</Link>
                    </Form.Text>
                </Form>
            </Container>
        </div>
    );
};

export default Register;