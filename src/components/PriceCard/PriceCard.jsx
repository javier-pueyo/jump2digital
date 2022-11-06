import React from 'react'
import Button from '../Button/Button'
import List from '../List/List'
import './PriceCard.scss'

function PriceCard({className, plan, features}) {
  const {id, img, name, price, recurrence, cta} = plan;
  return (
    <div class={`cardPrice ${className}`}>
      <img class="cardPrice__img" src={img.url} alt={img.name} />
      <div class="cardPrice__header">
        <p class="cardPrice__name">{name}</p>
        <p class="cardPrice__price">{price}</p>
        <p class="cardPrice__recurrence">{recurrence}</p>
      </div>
      <List className={className} items={features} type={id} />
      <Button className={className}>{cta}</Button>
    </div>
  )
}

export default PriceCard