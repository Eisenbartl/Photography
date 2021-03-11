import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

// components
import Home from './components/Home';
import MobileNav from './components/mobileNavigation';
import Navigation from './components/Navigation';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {
  // state
  const [devWidth, setDevWidth] = useState(window.innerWidth);
  const [contactVis, setContactVis] = useState(false);

  // track device width
  useEffect(() => {
    const handleResize = () => {
      setDevWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize)
    
    return () => window.removeEventListener('resize', handleResize)
  }, []) // setting a delay and removing event listener necessary to avoid too many re-renders

  // show contact form
  const toggleContact = () => { setContactVis(!contactVis); }

  return (
    <Router>
      <div className="App">
        { devWidth > 767 ? 
          <Navigation 
            contactVis={ contactVis }
            toggleContact={ toggleContact }
            /> : 
          <MobileNav 
            contactVis={ contactVis }
            toggleContact={ toggleContact } 
          /> 
        }
          <Switch>
            <Route 
              path='/' exact component={ Home }
            />
            <Route 
              path='/about' component={ About }
            />
            <Route 
              path='/portfolio' component={ Portfolio }
            />
            
          </Switch>
          <Contact 
            contactVis={ contactVis }
            toggleContact={ toggleContact }
          />
      </div>
    </Router>
  );
}

export default App;
