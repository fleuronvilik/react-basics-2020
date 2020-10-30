import React from 'react';
import ReactDOM from 'react-dom';

const EXAMPLES = (
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
);

ReactDOM.render(
  EXAMPLES,
  document.getElementById('root')
);