import React from 'react';
import { MDBFooter, MDBCol, MDBContainer, MDBRow } from 'mdbreact';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';

const FooterStyle = styled.div`
.mdbfooter {
	background-color: black;
	color: white;
	text-align: center;
	box-shadow: 0px 0px 10px 5px black;
	font-family: Tomorrow;
}

.mdbcol{
	padding-top: 6px;
	background-color: black;
	text-align: center;
}

.bottom-text{
	background-color: black;
	text-align: center;
	border-top: 1px solid gray;
	margin-top: 10px;
	padding-top: 10px;
	padding-bottom: 10px;
}

.link-list{
	list-style-type: none;
	padding-left: 0;
}

.single-link {
	border-top: 5px solid rgba(0, 0, 0, 0);
	border-bottom: 5px solid rgba(0, 0, 0, 0);
}

a {
	color: lightgray;
}

.header{
	padding-bottom: 6px;
	font-weight: bold;
}
`;

function ActionLink() {
	function handleClick(e) {
	  e.preventDefault();
	  console.log('The link was clicked.');
	}
	return (
	  <a href="#" onClick={handleClick}>
		Click me
	  </a>
	);
  }

const Footer = (props) => {
	return (
		<FooterStyle>
			<MDBFooter className="mdbfooter" class="fixed-bottom">
				<MDBContainer fluid className="text-center text-md-left">
					<Container>
						{props.children}
						<MDBRow>
							<MDBCol className="mdbcol">
								<h5 className="header">Navigasyon</h5>
								<ul className="link-list">
									<li className="single-link"><a href="/">Anasayfa</a></li>
									<li className="single-link"><a href="/hakkimizda">Hakkımızda</a></li>
									<li className="single-link"><a href="/duyurular">Duyurular</a></li>
									<li className="single-link"><a href="/iletisim">İletişim</a></li>
									<li className="single-link"><a href="/blog">Cyber Blog</a></li>
									<li className="single-link"><a href="/ctf">CTF Paneli</a></li>
								</ul>
					</MDBCol>
							<MDBCol className="mdbcol">
							<h5 className="header">Bağlantılar</h5>
								<ul className="link-list">
									<li className="single-link"><a href="https://www.deu.edu.tr/" target="_blank">Dokuz Eylül Üniversitesi</a></li>
									<li className="single-link"><a href="https://csc.deu.edu.tr/" target="_blank">Bilgisayar Bilimleri</a></li>
								</ul>
					</MDBCol>
							<MDBCol className="mdbcol">
							<h5 className="header">İletişim</h5>
								<ul className="link-list">
									<li className="single-link"><a href="https://www.t.me/deucyber" target="_blank">Telegram</a></li>
									<li className="single-link"><a href="https://www.twitter.com/deucyber" target="_blank">Twitter</a></li>
									<li className="single-link"><a href="https://www.github.com/deucyber" target="_blank">GitHub</a></li>
									<li className="single-link"><a href="mailto:deucyber@gmail.com" target="_blank">E-Posta</a></li>
									<li className="single-link">ActionLink</li>
								</ul>
					</MDBCol>
						</MDBRow>
						<MDBRow>
							<MDBCol className="bottom-text">
								<a>Dokuz Eylül Üniversitesi "Gayriresmi" Siber Güvenlik Topluluğu | 2020</a>
							</MDBCol>
						</MDBRow>
					</Container>
				</MDBContainer>
			</MDBFooter>
		</FooterStyle>
	);
}

export default Footer;