import logo from '../resources/images/logo.jpg'
function Navigation(){

    return(
        <header>
		<nav>
            <img src={logo} alt="Logo" class="logo"/>
            <a href="#" class="name">Chocolate Café</a>
			<ul class="nav-links">
				<li><a href="../index.html">Home</a></li>
				<li><a href="#">About</a></li>
				<li><a href="../views/gallery.html">Gallery</a></li>
				<li><a href="../views/contact.html">Contact</a></li>
			</ul>
		</nav>
	</header>

    )
}

export default Navigation;