import React from 'react';
import HelloWorld from './HelloWorld';

function App() {
  return (
    <main className='App'>
      <HelloWorld who = {['Friend!', 'React!', 'World!']}/>
    </main>
  );
}

export default App;
