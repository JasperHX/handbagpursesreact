import React from 'react';
import './App.css';
import Button from "./assets/components/Button";

function App() {
  return (
      <>
      <h1>Handbags & Purses</h1>
      <nav>
        <button>to the collection</button>
        <button>shop all bags</button>
        <button disabled={true}>pre-orders</button>
      </nav>
      </>

  );
}

export default App;



