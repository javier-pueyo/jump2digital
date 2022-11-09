import React from 'react'
import { Dialog } from "@headlessui/react";
import Button from "../Button/Button";
import Form from "../Form/Form";
import './ModalForm.scss'


function ModalForm({openModal, handleCloseModal, title}) {

  const closeModal = () => {
    handleCloseModal(false);
  }

  return (
    <Dialog className="modal" onClose={closeModal} open={openModal}>
        <div className="modal__content">
          <Button className="modal__close" handleClick={closeModal} >
              <img width="16" height="16" src="/assets/img/icons/close.svg" alt="close" />
          </Button>
          <p class="modal__subtitle">You have selected:</p>
          <p class="modal__title">{title} Plan</p>
          <p class="modal__description">Fill out this form to get more information about this plan.</p>
          <Form/>
        </div>
    </Dialog>
  )
}

export default ModalForm