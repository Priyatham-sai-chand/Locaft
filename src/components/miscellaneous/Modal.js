import {Modal, Button} from 'react-bootstrap';
import React, {useState} from 'react';

export const  CustomModal = (props) => {

  const handleClose = () => props.setShow(false);
  const handleShow = () => props.setShow(true);

  return (
    <>

      <Modal show={props.show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.desc}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Log In
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}