import React from 'react';
import Nav from './components/Nav';
import About from './components/About';
import ContactForm from './components/Contact';
import './App.css';

function App() {
  return (
    <div>
      <Nav
        // contactSelected={contactSelected}
        // setContactSelected={setContactSelected}
      ></Nav>
      <main>

          <>
            <About></About>
          </>

          <ContactForm></ContactForm>

      </main>
    </div>
  );
}

export default App;
