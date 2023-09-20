import React from 'react'
import { Fragment } from 'react'
import classes from './Modal.module.css'
import ReactDOM from 'react-dom'
import {Row, Col, Container } from 'react-bootstrap'

const Backdrop = props => {
  return <div className={classes.backdrop} onClick={props.onClose}></div>
};
const ModalOverlay=props=>{
  return <Container fluid="md" className={classes.container}>

  <Row className={classes.modal}>
    <Col>
        {props.children}
        </Col>
{/*         
        <Col>

      <button
            className={classes.button}
            type='submit'
            onClick={props.onClose}
          >
            LOOK UP ANOTHER ARTIST
          </button>
          </Col> */}
          </Row>
  </Container>
};

const portalElement=document.getElementById('overlays');
const Modal = props => {
return (
 <Fragment>
  {ReactDOM.createPortal(<Backdrop onClose={props.onClose}/>, portalElement )}
  {ReactDOM.createPortal(<ModalOverlay onClose={props.onClose}> {props.children} </ModalOverlay>, portalElement)}
  
  </Fragment>
)
}

export default Modal
