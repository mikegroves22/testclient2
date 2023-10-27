import React from 'react';
import { Link } from "react-router-dom";

 function Home() {

  return (
    <div> Home Page
    <div>
            <nav>
              <ul id="navigation">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                <Link to="/login">Login</Link>
                </li>
                <li>
                <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </nav>
          </div>
     
     </div>
  )
}
export default Home