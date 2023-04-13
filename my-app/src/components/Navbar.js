import { Component } from "react";
class Navbar extends Component {
  render() {
    return (
      <nav className="NavbarItems">
        <h1>
          React<i className="fab fa-react"></i>
        </h1>
        <ul>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Projects</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
        </ul>
        <button>Resume</button>
      </nav>
    );
  }
}

export default Navbar;
