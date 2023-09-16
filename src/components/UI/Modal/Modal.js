import React from 'react'
import { Fragment } from 'react'
import classes from './Modal.module.css'
import ReactDOM from 'react-dom'
import {Row, Col } from 'react-bootstrap'

const Backdrop = props => {
  return <div className={classes.backdrop} onClick={props.onClose}></div>
};
const ModalOverlay=props=>{
  return <div className={classes.modal}>
          <Row>
        <Col> <div className={classes.content}>{props.children}</div></Col>
      </Row>
      <button
            className={classes.button}
            type='submit'
            onClick={props.onClose}
          >
            LOOK UP ANOTHER ARTIST
          </button>


  </div>
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
