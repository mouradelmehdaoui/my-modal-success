// src/App.js
import React, { useState } from 'react';
import Modal from './component/Modal';

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="App">
      <button onClick={() => setModalOpen(true)}>Open Modal</button>
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
        {/* Content for your modal */}
        <p>Form submitted successfully!</p>
      </Modal>
    </div>
  );
}

export default App;
