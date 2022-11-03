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
            <h3 className='CUh2'>CONTACT US</h3>

            <div className='CUContainer'>
                <div className='CUOOA'>
                    <h3 className='CUh3'>Our Office Address</h3>
                    <h4 className='CUh4'>Cellix Bio Private Limited</h4>
                    <ul className='CUOOAUL'>
                        <li>Plot No.1177 B, Road No.56,</li>
                        <li>Jubilee Hills, Hyderabad,</li>
                        <li>Pin: 500033, <span className='CUSpan'>India.</span></li>
                    </ul>
                    <h4 className='CUh4'>Cellix Biosciences Inc,</h4>
                    <ul className='CUOOAUL'>
                        <li>NJIT-Enterprise Development Center,</li>
                        <li>211 Warren Street, Newark, NJ 07103,</li>
                        <li><span className=''>USA.</span></li>
                    </ul>
                </div>
       
                <div className='CUCN'>
                   <h3 className='CUh3'>Contact No.</h3>
                   <ul className='CUCNUL'>
                        <li>Phone: (+91) 40 23545946</li>
                        <li>Fax: (+91) 40 23545949</li>
                        <li>Email: info@cellixbio.com</li> <br></br><br></br><br></br>
                        <li>Phone: +1 862 485 7489</li> 
                        <li>Email: info@cellixbio.com</li>
                   </ul> 
                </div>

                <div className='CUBH'>
                    <h3 className='CUh3'>Business Hours</h3>
                    <ul className='CUBHUL'>
                        <li><span>Monday - Saturday</span></li>
                        <li>9:30am to 6pm</li>
                        <li>Sunday - Closed</li>
                    </ul>
                </div>
            </div>
            
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