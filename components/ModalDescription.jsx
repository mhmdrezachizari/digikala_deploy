import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import styles from './ModalDescription.module.css'

function ModalDescription(props) {
  const [lgShow, setLgShow] = useState(false);

  return (
    <>
      <Button onClick={() => setLgShow(true)}>توضیحات</Button>
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
             توضیحات محصول 
          </Modal.Title>
        </Modal.Header>
        <Modal.Body><p className={styles.paragragh}>{props.data}</p></Modal.Body>
      </Modal>
    </>
  );
}

export default ModalDescription;