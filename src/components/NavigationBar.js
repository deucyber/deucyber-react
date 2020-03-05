import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';
import loginwhite from '../assets/loginwhite.png';

const Styles = styled.div`
.navbar {
	background-color: black;
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
	padding: 8px;
	border: 1.5px solid #008080;
	border-radius: 10px;
	letter-spacing: 1px;
}

.blog-style:hover {
	font-family: Tomorrow;
	font-size: 18px;
	font-weight: bold;
	text-align: center;
	color: lime;
	padding: 8px;
	border: 1.5px solid white;
	border-radius: 10px;
	letter-spacing: 1px;
}

.ctf-style {
	font-family: Tomorrow;
	font-size: 18px;
	font-weight: bold;
	text-align: center;
	color: white;
	padding: 8px;
	border: 1.5px solid #FFBF00;
	border-radius: 10px;
	letter-spacing: 0.5px;
}

.ctf-style:hover {
	font-family: Tomorrow;
	font-size: 18px;
	font-weight: bold;
	text-align: center;
	color: red;
	padding: 8px;
	border: 1.5px solid white;
	border-radius: 10px;
	letter-spacing: 0.5px;
}
`;

export const NavigationBar = () => (
	<Styles>
		<Navbar expand="xl" variant="dark">
			<Navbar.Brand href="/">DEUCYBER</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				{/* Flex kullanıp burayı tam olarak ortalamak lazım. */}
				<Nav className="ml-auto">
					<Nav.Link href="/"><div className="mid-link">Anasayfa</div></Nav.Link>
					<Nav.Link href="/hakkimizda"><div className="mid-link">Hakkımızda</div></Nav.Link>
					<Nav.Link href="/duyurular"><div className="mid-link">Duyurular</div></Nav.Link>
					<Nav.Link href="/iletisim"><div className="mid-link">İletişim</div></Nav.Link>
				</Nav>
				<Nav className="ml-auto">
					<Nav.Link href="/blog"><div className="blog-style">Cyber Blog</div></Nav.Link>
					<Nav.Link href="/ctf"><div className="ctf-style">CTF Paneli</div></Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	</Styles>
)