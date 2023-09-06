import logo from '../resources/images/logo.jpg'
import style from './nav.module.css';
function Navigation(){

    return(
        <header>
		<nav>
            <img src={logo} alt="Logo" className={style.logo}/>
            <a href="#" className={style.name}>Chocolate Café</a>
			<ul className={style['nav-links']}>
				<li><a href="#">Home</a></li>
				<li><a href="#">About</a></li>
				<li><a href="#">Gallery</a></li>
				<li><a href="#">Contact</a></li>
			</ul>
		</nav>
	</header>

    )
}

export default Navigation;