import React from 'react';
import Nav from './components/Nav';
import About from './components/About';
import ContactForm from './components/Contact';
import Portfolio from './components/Projects';
import Resume from './components/Resume';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
 
  return (
    <div>
      <Header>
      <Nav
        // contactSelected={contactSelected}
        // setContactSelected={setContactSelected}
      ></Nav>
      </Header>
      <main>

            <About></About>
            <Portfolio></Portfolio>
            <Resume></Resume>
            <ContactForm></ContactForm>
            

      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
