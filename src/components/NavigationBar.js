import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavigationBar = () => (
	<Styles>
		<Navbar expand="xl" variant="dark">
			<Navbar.Brand href="/">DEUCYBER</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				{/* Flex kullanıp burayı tam olarak ortalamak lazım. */}
				<Nav className="ml-auto">
					<Link to="/"><div className="mid-link">Anasayfa</div></Link>
					<Link to="/hakkimizda"><div className="mid-link">Hakkımızda</div></Link>
					<Link to="/duyurular"><div className="mid-link">Duyurular</div></Link>
					<Link to="/iletisim"><div className="mid-link">İletişim</div></Link>
				</Nav>
				<Nav className="ml-auto">
					<Link to="/blog"><div className="blog-style">Cyber Blog</div></Link>
					<Link to="/ctf"><div className="ctf-style">CTF Paneli</div></Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	</Styles>
)

const Styles = styled.div`
.navbar {
	background-color: black;
}
.navbar a:hover {
	text-decoration: none;
}

.navbar-brand {
	font-family: Tomorrow;
	font-weight: bold;
	letter-spacing: 14px;
	font-size: 24px;
	color: white;
	text-align: center;
	margin-right: 20px;
}

.navbar-nav .nav-link, .nav-item {
	font-family: Tomorrow;
	font-size: 18px;
	color: white;
	text-align: center;
	letter-spacing: 0.5px;
}

.mid-link {
	font-family: Tomorrow;
	font-size: 18px;
	font-weight: bold;
	text-align: center;
	color: white;
	border-radius: 15px;
	padding-right: 20px;
	padding-left: 20px;
	color: white;
}

.mid-link:hover {
	padding-right: 20px;
	padding-left: 20px;
	color: gold;
}

.blog-style {
	font-family: Tomorrow;
	font-size: 18px;
	font-weight: bold;
	text-align: center;
	color: white;
	border-radius: 15px;
	letter-spacing: 1px;
	padding-left: 8px;
	padding-right: 8px;
}

.blog-style:hover {
	color: lime;
}

.ctf-style {
	font-family: Tomorrow;
	font-size: 18px;
	font-weight: bold;
	text-align: center;
	color: white;
	padding-left: 8px;
	padding-right: 8px;
	border-radius: 15px;
	letter-spacing: 0.5px;
}

.ctf-style:hover {
	color: red;
}
`;