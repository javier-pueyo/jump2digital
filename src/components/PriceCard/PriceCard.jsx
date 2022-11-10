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
      <div className={`cardPrice ${className}`}>
        <img className="cardPrice__img" src={img.url} alt={img.name} />
        <div className="cardPrice__header">
          <p className="cardPrice__name">{name}</p>
          <p className="cardPrice__price">{price}</p>
          <p className="cardPrice__recurrence">{recurrence}</p>
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
