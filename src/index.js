import React from 'react';
import ReactDOM from 'react-dom';

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

ReactDOM.render(
  <App />,
  document.getElementById('root')
);