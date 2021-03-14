import React,{ useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import './Header.css'
import MenuIcon from '@material-ui/icons/Menu';


const Header = () => {
  const [isSticky, setSticky] = useState(false);
  
   useEffect(() => {
      window.addEventListener("scroll", () => {
         if(window.scrollY > 60){
           setSticky(true)
         }else{
            setSticky(false)
         }
      })
   }, []);
   const [isCollapsed , setCollapsed] = useState(null);

  return (
      <nav  className={ (isSticky || isCollapsed) ? "shadow-md navbar navbar-expand-md bg-light shadow-lg navbar-light py-3 fixed-top" : "navbar navbar-expand-md py-3 fixed-top"}>
        <div className="container navBar">
          <Link className="navbar-brand" to="/">
            POWER <strong style={{color:'orange'}}>X</strong>
          </Link>
          <button 
            onClick={() => setCollapsed(!isCollapsed ? 'show' : null )}
            className={!isCollapsed ? 'borderWhite navbar-toggler d-lg-none' : "navbar-toggler d-lg-none"} 
            data-toggle="collapse" 
            data-target="#collapsibleNavId" 
            aria-controls="collapsibleNavId"
            aria-expanded="false" 
            aria-label="Toggle navigation"
          >
            <span className={!isCollapsed && 'text-white'}>
              <MenuIcon />
            </span>
          </button>

          <div className={`collapse navbar-collapse ${isCollapsed}`} id="collapsibleNavId">
            <ul className="navbar-nav mt-2 mt-lg-0">
              <li className="nav-item active">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link"  to="/our-training">Our Trainings</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link"  to="/about-us">About Us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link"  to="/pricing">Pricing</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link"  to="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
   );
};

export default Header;