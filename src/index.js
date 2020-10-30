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

function Item(props) {
  return (
    <article>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <img width="128" alt={props.photo.alt} src={props.photo.src}/>
      <hr/>
      <button>{props.cost}</button>
    </article>
  )
}

function Catalog() {
  return (
    <main>
      <h1 style={{textAlign: "center", textTransform: "uppercase"}}>Catalog</h1>
      <Item
        title="Housing"
        description="Housing provided for out-of-state students or those who can't commute."
        photo={{
          src: "https://upload.wikimedia.org/wikipedia/commons/9/93/Housing_Anywhere_logo.png",
          alt: "Housing Anywhere logo"}}
        cost="Free"
      />
      <Item
        title="Fidget Spinner"
        description="Because we like to pretend we're in high school."
        photo={{
          src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Fidget_spinner_red%2C_cropped.jpg/512px-Fidget_spinner_red%2C_cropped.jpg",
          alt: "Fidget spinner red, cropped"}}
        cost="21.99$"
      />
    </main>
  )
}

ReactDOM.render(
  <Catalog />,
  document.getElementById('root')
);