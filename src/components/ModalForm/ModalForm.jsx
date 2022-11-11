import React from 'react'
import { Dialog } from "@headlessui/react";
import { Button, Form } from "../index";
import './ModalForm.scss'


function ModalForm({openModal, handleCloseModal, title}) {

  const closeModal = () => {
    handleCloseModal(false);
  }

  return (
    <Dialog className="modal" onClose={closeModal} open={openModal}>
        <div className="modal__content">
          <Button className="modal__close" onClick={closeModal} >
              <img width="16" height="16" src="/assets/img/icons/close.svg" alt="close" />
          </Button>
          <p className="modal__subtitle">You have selected:</p>
          <p className="modal__title">{title} Plan</p>
          <p className="modal__description">Fill out this form to get more information about this plan.</p>
          <Form/>
        </div>
    </Dialog>
  )
}

export default ModalForm