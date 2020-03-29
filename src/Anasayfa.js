import React from 'react'
import styled from 'styled-components';
import Button from 'react-bootstrap/Button'
import basejpg from './assets/base.jpg';
import { Link } from 'react-router-dom';

const Anasayfa = () => (
	<Styles>
		<div className="layout">
			<h1 className="h1">Dokuz Eylül Üniversitesi</h1>
			<h2 className="h3-dark">"Gayriresmi"</h2>
			<h2 className="h2line">Siber Güvenlik Topluluğu</h2>
			<div className="info-box">
				<p className="p-center">DEUCYBER, Dokuz Eylül Üniversitesi genelinde siber güvenlik alanında çalışmalar düzenlemek ve bu alanda etkileşim platformu oluşturmak amaçlarını taşıyan bir projedir. Topluluğun 2020-2021 öğretim yılında resmi faaliyetlerine başlaması beklenmektedir.</p>
				<p className="p-center">Daha fazla bilgi için:</p>
				<div align="center" className="button">
					<Link to="/hakkimizda">
						<Button variant="dark" text-align="center">Hakkımızda</Button>
					</Link>
				</div>
			</div>
		</div>
	</Styles>
)

export default Anasayfa;

const Styles = styled.div`
.h1 {
	font-family: Tomorrow;
	text-align: center;
	margin-top: 30px;
	font-weight: lighter;
}

.h2line {
	font-family: Tomorrow;
	text-align: center;
	margin-top: 10px;
	font-weight: lighter;
	border-bottom: 1px solid #333;
	padding-bottom: 40px;
	margin-bottom: 40px;
}

.h3-dark {
	font-family: Tomorrow;
	text-align: center;
	margin-top: 10px;
	font-weight: lighter;
	margin-bottom: 10px;
	font-size: 26px;
	color: gray;
}

.p-center {
	text-align: center;
}

.info-box {
	margin: auto;
	max-width: 800px;
}

.layout {
	margin: auto;
}
`;