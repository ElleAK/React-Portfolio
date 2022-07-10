import React from 'react';
import Nav from './components/Nav';
import About from './components/About';
import ContactForm from './components/Contact';
import Portfolio from './components/Portfolio';


import './App.css';

function App() {
  return (
    <div>
      <Nav
        // contactSelected={contactSelected}
        // setContactSelected={setContactSelected}
      ></Nav>
      <main>

            <About></About>
            <Portfolio></Portfolio>
            <ContactForm></ContactForm>

      </main>
    </div>
  );
}

export default App;
