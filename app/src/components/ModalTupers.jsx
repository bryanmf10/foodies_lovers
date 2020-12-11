import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Tuppers from './Profile/MisTuppers'

const ModalTupers = (props) => {
  const {
      modal,
      setModal,
     buttonLabel
  } = props;


  const toggle = () => setModal(!modal);

  return (
    <div>
     
      <Modal isOpen={modal} toggle={toggle}>
      <Button color="danger" onClick={toggle}>{buttonLabel}</Button>
        <ModalHeader toggle={toggle}>Tus tuppers</ModalHeader>
        <ModalBody>
{<Tuppers />}
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>Ofrecer</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancelar</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalTupers;