import React from 'react';
import Nav from './components/Nav';
import About from './components/About';
import ContactForm from './components/Contact';
import Portfolio from './components/Projects';
import Resume from './components/Resume';


function App() {
  return (
    <div>
      <header>
      <Nav
        // contactSelected={contactSelected}
        // setContactSelected={setContactSelected}
      ></Nav>
      </header>
      <main>

            <About></About>
            <Portfolio></Portfolio>
            <Resume></Resume>
            <ContactForm></ContactForm>
            

      </main>
      <footer></footer>
    </div>
  );
}

export default App;
