import { Link } from 'react-router-dom';

const Navbar = ({ children }) => {
	return (
		<>
			<nav>
				<ul>
					<li className="nav-item">
						<Link to="/" className="logo">
							<img src='/imgs/logo_icon.png' alt="Fernando Pessoa" />
						</Link>
					</li>
					<li className="nav-item">
						<Link to="obras" className="nav-link" id="nav-link">Obras</Link>
					</li>
					<li className="nav-item">
						<Link to="vida" className="nav-link" id="nav-link">Vida</Link>
					</li>
					<li className="nav-item">
						<Link to="sobre" className="nav-link" id="nav-link">Sobre</Link>
					</li>
				</ul>

				<div className="search-container">
					<img src="imgs/search-icon.svg" alt="buttonpng"/>
					<input type="text" className="search-input" placeholder="Search..." name="search" />
				</div>    
			</nav>
		</>
		)
}

export default Navbar;