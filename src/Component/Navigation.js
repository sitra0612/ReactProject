import logo from '../resources/images/logo.jpg'
import style from '../css/nav.module.css';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
function Navigation(){
	const [isOpen, setOpen] = useState(false);
    return(
        // <header>
		<nav>
            <img src={logo} alt="Logo" className={style.logo}/>
            <a href="#" className={style.name}>Chocolate Café</a>
			<ul className={style['nav-links']}>
			<div className="navbar-brand">
          <a
            role="button"
            className={`navbar-burger burger ${isOpen && "is-active"}`}
            aria-label="menu"
            aria-expanded="false"
            onClick={() => setOpen(!isOpen)}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
		<div className={`navbar-menu ${isOpen && "is-active"}`}>
          <div className="navbar-start">
				<li><NavLink activeClassName="is-active" to="/">Home</NavLink></li>
				<li><NavLink activeClassName="is-active" to="/about">About</NavLink></li>
				<li><NavLink activeClassName="is-active" to="/gallery">Gallery</NavLink></li>
				<li><NavLink activeClassName="is-active" to="/contact">Contact</NavLink></li>

				</div>
		</div>			
			</ul>
		
		</nav>
	// </header>

    )
}

export default Navigation;