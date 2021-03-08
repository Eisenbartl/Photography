import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// components
import Home from './components/Home';
import Navigation from './components/Navigation';
import About from './components/About';
import Portfolio from './components/Portfolio';

function App() {
  const blah = () => {
    console.log('blah blah blah')
  }
  return (
    <Router>
      <div className="App">
        <Navigation blah={ blah } />
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
      </div>
    </Router>
  );
}

export default App;
