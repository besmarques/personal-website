import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-dark border-bottom-black">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">
						<img src={logo}></img>
					</span>
				</Link>
				<Link to="/">
					Sobre mim
				</Link>
				<Link to="/">
					Projectos
				</Link>
				<Link to="/">
					Certificações
				</Link>
				<Link to="/">
					Stack
				</Link>

				<div className="ml-auto">
					<Link to="/demo">
						<button className="btn btn-primary">Check the Context in action</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};
