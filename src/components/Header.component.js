import {Link} from 'react-router-dom';

function Header(props) {

  return (
      <header>
          <h1 className="display-1">My Portfolio Page</h1>
          <nav className="navbar-nav navbar-dark bg-dark">
              <Link to ="/" className="nav-link">
                  HOME
              </Link>
              <Link to ="/about" className="nav-link">
                  ABOUT
              </Link>
              <Link to ="/projects" className="nav-link">
                  PROJECTS
              </Link>
          </nav>
      </header>
  )
}


export default Header;