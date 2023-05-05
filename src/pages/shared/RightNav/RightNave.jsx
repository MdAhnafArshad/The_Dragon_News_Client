import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';
import QZone from '../Qzone/QZone';

const RightNave = () => {
    return (
        <div>
            <h2>Login with</h2>
            <div>
                <Button className='my-3' variant="outline-success"><FaGoogle />Login with google</Button>
                <Button variant="outline-secondary"><FaGithub />login with github</Button>
            </div>
            <div className='my-3'>
                <ListGroup>
                    <ListGroup.Item><FaFacebook></FaFacebook>Facebook</ListGroup.Item>
                    <ListGroup.Item><FaInstagram></FaInstagram>instaGram</ListGroup.Item>
                    <ListGroup.Item><FaTwitter></FaTwitter>Twitter</ListGroup.Item>
                </ListGroup>
            </div>
            <QZone></QZone>

        </div>
    );
};

export default RightNave;