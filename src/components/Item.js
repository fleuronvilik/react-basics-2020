import React from 'react'

function Item({item}) {
  const {title, description, photo: {src, alt}, cost} = item;

  const clickHandler = () => {
    var qty = Number(prompt("Quantity", "1")), total = 0
    if (Number.isNaN(qty) || qty <= 0) return
    if (cost === "Free") {
      total = 0
    } else {
      let price = (cost.slice(0, -1))
      total = qty * price
    }
    window.confirm(`Item Total: ${total}$`)
  }

  return (
    <article>
      <h2>{title}</h2>
      <p>{description}</p>
      <img width="128" alt={alt} src={src}/>
      <hr/>
      <button onClick={clickHandler}>{cost}</button>
    </article>
  )
}

export default Item