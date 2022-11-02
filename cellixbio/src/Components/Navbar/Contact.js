import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Contact(){
    return(
        <div>
            <h3 className='CUh3'>CONTACT US</h3>
            <div className='CUFormContainer'>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>NAME</Form.Label>
                        <Form.Control type="text" placeholder="Enter your Name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>EMAIL</Form.Label>
                        <Form.Control type="email" placeholder="Enter your email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>PHONE</Form.Label>
                        <Form.Control type="number" placeholder="Enter your Phone Number" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>SUBJECT</Form.Label>
                        <Form.Control type="text" placeholder="Enter Subject"/>
                    </Form.Group>
                    
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>MESSAGE</Form.Label>
                        <Form.Control type="text" placeholder="Enter your Message" />
                    </Form.Group>
                
                    <Button variant="outline-primary" type="submit" className='mt-1'>
                        SEND MESSAGE
                    </Button>
                </Form>
            </div> 
        </div>
    )
}

export default Contact;