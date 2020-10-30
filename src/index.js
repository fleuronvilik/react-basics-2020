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

function Item() {
  return (
    <article>
      <h2>Housing</h2>
      <p>Housing provided for out-of-state students or those who can't commute.</p>
      <img width="128" alt="Housing Anywhere logo" src="https://upload.wikimedia.org/wikipedia/commons/9/93/Housing_Anywhere_logo.png"/>
      <hr/>
      <button>Free</button>
    </article>
  )
}

function Catalog() {
  return (
    <main>
      <h1 style={{textAlign: "center", textTransform: "uppercase"}}>Catalog</h1>
      <Item />
      <Item />
    </main>
  )
}

ReactDOM.render(
  <Catalog />,
  document.getElementById('root')
);