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

.single-link{
	color: lightgray;
	border-top: 4px solid rgba(0, 0, 0, 0);
	border-bottom: 4px solid rgba(0, 0, 0, 0);
}

.header{
	padding-bottom: 6px;
	font-weight: bold;
}
`;

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
									<li className="single-link"><a>Anasayfa</a></li>
									<li className="single-link"><a>Hakkımızda</a></li>
									<li className="single-link"><a>Duyurular</a></li>
									<li className="single-link"><a>İletişim</a></li>
									<li className="single-link"><a>Cyber Blog</a></li>
									<li className="single-link"><a>CTF Paneli</a></li>
								</ul>
					</MDBCol>
							<MDBCol className="mdbcol">
							<h5 className="header">Bağlantılar</h5>
								<ul className="link-list">
									<li className="single-link"><a>Dokuz Eylül Üniversitesi</a></li>
									<li className="single-link"><a>Fen Fakültesi</a></li>
									<li className="single-link"><a>Bilgisayar Bilimleri</a></li>
									<li className="single-link"><a>Siber Şakşukalanma</a></li>
								</ul>
					</MDBCol>
							<MDBCol className="mdbcol">
							<h5 className="header">İletişim</h5>
								<ul className="link-list">
									<li className="single-link"><a>Twitter</a></li>
									<li className="single-link"><a>Facebook</a></li>
									<li className="single-link"><a>Mastodon</a></li>
									<li className="single-link"><a>Github</a></li>
								</ul>
					</MDBCol>
						</MDBRow>
						<MDBRow>
							<MDBCol className="bottom-text">
								<a>Her şey her an MIT lisansına falan bağlı olabilir. Dikkat et.</a>
							</MDBCol>
						</MDBRow>
					</Container>
				</MDBContainer>
			</MDBFooter>
		</FooterStyle>
	);
}

export default Footer;