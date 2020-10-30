import React from 'react'

import Article from './Item'
import {allItems} from '../allItems'

export default function Catalog() {
  return (
    <main>
      <h1 style={{textAlign: "center", textTransform: "uppercase"}}>Catalog</h1>
      {allItems.map(item => <Article key={item.id} item={item} />)}
    </main>
  )
}