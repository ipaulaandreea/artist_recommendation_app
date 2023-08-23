import React from 'react'
import { Fragment } from 'react'
import classes from './Modal.module.css'
import ReactDOM from 'react-dom'
import {Row, Col, Button} from 'react-bootstrap'

const Backdrop = props => {
  return <div className={classes.backdrop} onClick={props.onClose}></div>
};
const ModalOverlay=props=>{
  return <div className={classes.modal}>
          <Row>
        <Col> <div className={classes.content}>{props.children}</div></Col>
      </Row>



  </div>
};

const portalElement=document.getElementById('overlays');
const Modal = props => {
return (
 <Fragment>
  {ReactDOM.createPortal(<Backdrop onClose={props.onClose}/>, portalElement )}
  {ReactDOM.createPortal(<ModalOverlay> {props.children} </ModalOverlay>, portalElement)}
  
  </Fragment>
)
}

export default Modal
