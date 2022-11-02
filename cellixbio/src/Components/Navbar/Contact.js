import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Contact(){
    let [state, setState] = useState({
        user: {
            name: '',
            email: '',
            phone: '',
            subject: '',
            message: ''
        }
    });
    
    let updateInput = (event) => {
        setState({
            ...state,
            user: {
                ...state.user,
                [event.target.name] : event.target.value
            }
        })
    };
    
    let register = (event) => {
        event.preventDefault();
        console.log(state.user);
    };

    return(
        <div>
            <h3 className='CUh3'>CONTACT US</h3>
            <div className='CUFormContainer'>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>NAME</Form.Label>
                        <Form.Control 
                        name= "name" onChange={updateInput} className='shadow-lg'
                        type="text" placeholder="Enter your Name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>EMAIL</Form.Label>
                        <Form.Control 
                        name="email" onChange={updateInput} className='shadow-lg'
                        type="email" placeholder="Enter your email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>PHONE</Form.Label>
                        <Form.Control
                        name="phone" onChange={updateInput} className='shadow-lg'
                        type="text" placeholder="Enter your Phone Number" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>SUBJECT</Form.Label>
                        <Form.Control 
                        name="subject" onChange={updateInput} className='shadow-lg'
                        type="text" placeholder="Enter Subject"/>
                    </Form.Group>
                    
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>MESSAGE</Form.Label>
                        <Form.Control
                        name="message" onChange={updateInput} as="textarea" className='shadow-lg'
                        type="text" placeholder="Enter your Message" />
                    </Form.Group>
                
                    <Button 
                    onClick={register} 
                    variant="outline-primary" type="submit" className='mt-1 shadow-lg'>
                        SEND MESSAGE
                    </Button>
                </Form>
            </div>
             {/* <pre>{JSON.stringify(state)}</pre>  */}
        </div>
    )
}
export default Contact;