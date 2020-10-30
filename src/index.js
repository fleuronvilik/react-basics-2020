import React from 'react';
import ReactDOM from 'react-dom';

import './index.css'

class App extends React.Component {
  render() {
    return (
      <main>
        <h1>Hello, World!</h1>
        <Examples />
      </main>
    )
  }
}

function Examples() {
  return (
    <dl>
      <dt className="c">C</dt>
      <dd>
        <code>printf("Hello, World!\n");</code>
      </dd>
      <dt className="py">Python</dt> {/*; not required*/}
      <dd>
        <code>print("Hello, World!")</code>
      </dd>
      <dt className="js">JavaScript</dt>
      <dd>
        <code>console.log("Hello, World!")</code>
      </dd>
    </dl>
  )
}

function Item({item}) {
  const {title, description, photo: {src, alt}, cost} = item;
  return (
    <article>
      <h2>{title}</h2>
      <p>{description}</p>
      <img width="128" alt={alt} src={src}/>
      <hr/>
      <button>{cost}</button>
    </article>
  )
}

var items = [
  {
    title: "Housing",
    description: "Housing provided for out-of-state students or those who can't commute.",
    photo: {
      src: "https://upload.wikimedia.org/wikipedia/commons/9/93/Housing_Anywhere_logo.png",
      alt: "Housing Anywhere logo"},
    cost: "Free"
  },
  {
    title: "Fidget Spinner",
    description: "Because we like to pretend we're in high school.",
    photo: {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Fidget_spinner_red%2C_cropped.jpg/512px-Fidget_spinner_red%2C_cropped.jpg",
      alt: "Fidget spinner red, cropped"},
    cost: "21.99$"
  },
  {
    title: "Rubber Duckies",
    description: "To help you solve your hardest coding problems.",
    photo: {
      alt: "Rubber duck assisting with debugging",
      src: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Rubber_duck_assisting_with_debugging.jpg"},
  cost: "3.50$"
  }
]

function Catalog() {
  return (
    <main>
      <h1 style={{textAlign: "center", textTransform: "uppercase"}}>Catalog</h1>
      {items.map(item => <Item item={item} />)}
    </main>
  )
}

ReactDOM.render(
  <Catalog />,
  document.getElementById('root')
);