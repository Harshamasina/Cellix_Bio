import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Contact() {

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
  return (
    <div>
      <h2 className='CUh2'>Contact Us</h2>
        <CardGroup>
        <Card>
          <Card.Body>
              <Card.Title className='CUCT'>Our Office Address:</Card.Title>
              <Card.Text>
                  <ul className='CUUL'>
                    <li className='CULI'>Cellix Bio Private Limited,</li>
                    <li>Plot No.1177 B, Road No.56,</li>
                    <li>Jubilee Hills, Hyderabad,</li>
                    <li>Pin: 500033, <span className='CUSpan'>India.</span></li>
                  </ul>
                  <ul className='CUUL'>
                    <li className='CULI'>Cellix Biosciences Inc,</li>
                    <li>NJIT-Enterprise Development Center, 211 Warren Street, Newark, NJ 07103, <span className='CUSpan'>USA.</span></li>
                  </ul>
              </Card.Text>
          </Card.Body>
        </Card>
        
        <Card>
          <Card.Body>
            <Card.Title className='CUCT'>Contact No:</Card.Title>
            <Card.Text>
              <ul className='CUUL'>
                  <li><span className='CUSpan'>Phone: </span>(+91) 40 23545946</li>
                  <li><span className='CUSpan'>Fax: </span>(+91) 40 23545949</li>
                  <li><span className='CUSpan'>Email: </span>info@cellixbio.com</li>
              
              </ul>
              <ul className='CUUL'>
                  <li><span className='CUSpan'>phone: </span>+1 862 485 7489</li>
                  <li><span className='CUSpan'>Email: </span>info@cellixbio.com</li>
              </ul>
            </Card.Text>
          </Card.Body>
        </Card>
        
        <Card>
          <Card.Body>
            <Card.Title className='CUCT'>Business Hours:</Card.Title>
            <Card.Text>
              <ul className='CUUL'>
                <li className='CUSpan'>Monday - Saturday</li>
                <li>9:30am to 6pm</li>
                <li>Sunday - Closed</li>
              </ul>
            </Card.Text>
          </Card.Body>
        </Card>
       </CardGroup>
       <h3 className='CUh3'>Send Us an Email</h3>
       <div className='CUFormContainer'>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>NAME<sup>*</sup></Form.Label>
                        <Form.Control 
                        name= "name" onChange={updateInput} className='shadow-lg'
                        type="text" placeholder="Enter your Name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>EMAIL<sup>*</sup></Form.Label>
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
                        <Form.Label>SUBJECT<sup>*</sup></Form.Label>
                        <Form.Control 
                        name="subject" onChange={updateInput} className='shadow-lg'
                        type="text" placeholder="Enter Subject"/>
                    </Form.Group>
                    
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>MESSAGE<sup>*</sup></Form.Label>
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
    </div>
  );
}
export default Contact;