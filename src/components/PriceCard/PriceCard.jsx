import React from "react";

import Button from "../Button/Button";
import List from "../List/List";
import "./PriceCard.scss";
import { useState } from "react";
import ModalForm from "../ModalForm/ModalForm";

function PriceCard({ className, plan, features }) {
  const { id, img, name, price, recurrence, cta } = plan;
  const [activeModal, setStateModal] = useState(false);

  const changeStateModal = (boolean) => {
    setStateModal(boolean);
  }

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
        <Button className={className} handleClick={changeStateModal} >
          {cta}
        </Button>
      </div>
      <ModalForm openModal={activeModal} handleCloseModal={changeStateModal} title={name} />
    </>
  );
}

export default PriceCard;
