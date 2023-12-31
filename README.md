## My Modal Success Component
A simple React modal component for displaying success messages.

## Features

Display and quit modale
### Download

[modale-react](https://www.npmjs.com/package/my-modal-success)

### Requirements

- React 17.0.2+

### Installation

- using NPM
  `npm install my-modal-success`

### Usage

To use the plugin, import it in your React component.
It needs useState default false: `modalOpen`

_MyComponent.js_

```javascript
import React, { useState } from 'react';
import Modal from 'my-modal-success';

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="App">
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
        <p>Form submitted successfully!</p>
      </Modal>
    </div>
  );
}

export default App;

```


### .babelrc
- {
    "presets": ["@babel/preset-env", "@babel/preset-react"]
  }
  
### published to npm 
- npm publish --access public

### packake.json 

```javascript
"scripts": {
    "start": "react-scripts start",
    "build": "set NODE_ENV=production && rm -rf dist && babel src/component --out-dir dist --copy-files",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  ```