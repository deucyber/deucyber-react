import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';

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

export const NavigationBar = () => (
	<Styles>
		<Navbar expand="xl" variant="dark">
			<Navbar.Brand href="/">DEUCYBER</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				{/* Flex kullanıp burayı tam olarak ortalamak lazım. */}
				<Nav className="ml-auto">
					<Nav.Link href="/anasayfa"><div className="mid-link">Anasayfa</div></Nav.Link>
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