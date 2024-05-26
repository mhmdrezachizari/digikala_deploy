import React from 'react'
import Toast from 'react-bootstrap/Toast';
const Modal = (props) => {
  return (
    <div>
       <Toast autohide={true} onClose={()=>props.setflag(!props.flag)} delay={5000} animation={true} show={props.flag} bg="danger">
      <Toast.Header>
        <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
        <strong className="me-auto">خوش آمدید</strong>
      </Toast.Header>
      <Toast.Body>{props.error}</Toast.Body>
    </Toast>
    </div>
  )
}

export default Modal
