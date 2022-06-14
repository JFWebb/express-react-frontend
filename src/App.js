import './App.css';

// import react components
import {Route} from 'react-router-dom';

// import custom components
import Header from './components/Header.component'
import Footer from './components/Footer.component'

// import pages
import HomePage from './pages/Home.page';
import ProjectsPage from './pages/Projects.page';
import AboutPage from './pages/About.page';

function App() {

  // url for our api
  const URL = 'https://jfw-er-backend.herokuapp.com/';

  return (
    <div className="App">
      <Header />
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route path="/projects">
        <ProjectsPage URL={URL}/>
      </Route>
      <Route path="/about">
        <AboutPage URL={URL}/>
      </Route>
      <Footer />
    </div>
  )
}

export default App;
