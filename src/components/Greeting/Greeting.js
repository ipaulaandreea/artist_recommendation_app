import react from 'react';
import { Container, Row, Col, Image, Card, Form, Button  } from 'react-bootstrap';
import backgroundImage from '../../bckg3.jpg'
import {classes} from './Greeting.module.css'; 
const Greeting = () => {
    return ( 
       <section className="bg-light text-center h-100 d-flex align-items-center justify-content-center" style={{backgroundImage: `url(${backgroundImage})`,  height: '800px',  backgroundPosition: 'center', backgroundSize: 'cover', }}>
   
        <div className="container-fluid">
        <div className="row text-center">
        <div className="col-md-6 ">
            <h1 className="display-5 fw-bold p-5" style={{color: 'White' }} >Find similar artists. See their gigs.</h1>
            </div>
            <div className="col-md-6">
            <Form>
        <Form.Group className="p-5">
        <Form.Control className="rounded-pill" type="artist-name" placeholder="Artist name" />
      </Form.Group>
      <Button type="submit" style={{fontSize: '1rem', fontWeight: '700', fontSize: '1rem', border: '0', borderRadius: '0', background: '#ff3366', padding: '16px 40px', color: 'White' }}>
        SEARCH
      </Button>
    </Form>
    </div>
    </div>
    </div>
    
         </section>
    
    )
}

export default Greeting;