import React from "react";
import { Dialog } from "@headlessui/react";
import Button from "../Button/Button";
import List from "../List/List";
import "./PriceCard.scss";
import { useState } from "react";
import { useEffect } from "react";
import Form from "../Form/Form";

function PriceCard({ className, plan, features }) {
  const { id, img, name, price, recurrence, cta } = plan;
  let [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
    console.log('close');
  }

  const openModal = () => {
    setIsOpen(true);
    console.log('open');
  }

  useEffect(() => {
    console.log('isOpen', isOpen);
  }, [isOpen])
  

  return (
    <>
      <div class={`cardPrice ${className}`}>
        <img class="cardPrice__img" src={img.url} alt={img.name} />
        <div class="cardPrice__header">
          <p class="cardPrice__name">{name}</p>
          <p class="cardPrice__price">{price}</p>
          <p class="cardPrice__recurrence">{recurrence}</p>
        </div>
        <List className={className} items={features} type={id} />
        <Button className={className} handleClick={openModal} >
          {cta}
        </Button>
      </div>

      <Dialog className="modal" onClose={closeModal} open={isOpen}>
          <div className="modal__content">
            <Button className="modal__close" handleClick={closeModal} >
              <img width="16" height="16" src="/assets/img/icons/close.svg" alt="close" />
            </Button>
            <p class="modal__subtitle cardPrice__name">You have selected:</p>
            <p class="modal__title cardPrice__price">{name} Plan</p>
            <p class="modal__description cardPrice__recurrence">Fill out this form to get more information about this plan.</p>
            <Form/>
          </div>
      </Dialog>
    </>
  );
}

export default PriceCard;
