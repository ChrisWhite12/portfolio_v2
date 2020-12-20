import './App.css';
import './css/main.scss'

import Projects from './components/Projects'
import About from './components/About'
import Home from './components/Home'
import Nav from './components/Nav'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Router>
          <Nav />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/projects' component={Projects} />
            <Route path='/about' component={About} />
          </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
