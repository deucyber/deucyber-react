import React from 'react'
import styled from 'styled-components';
import Button from 'react-bootstrap/Button'
import basejpg from './assets/base.jpg';

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
	border-bottom: 1px solid white;
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
	width: 80%;
	margin: auto;
}

.layout {
	width: 80%;
	margin: auto;
}

.button {
	margin-bottom: 40px;
}
`;

export const Anasayfa = () => (
	<Styles>
		<div className="layout">
			<h1 className="h1">Dokuz Eylül Üniversitesi</h1>
			<h2 className="h3-dark">"Gayriresmi"</h2>
			<h2 className="h2line">Siber Güvenlik Topluluğu</h2>
			<div className="info-box">
				<p className="p-center">DEUCYBER, Dokuz Eylül Üniversitesi genelinde siber güvenlik alanında çalışmalar düzenlemek ve bu alanda etkileşim platformu oluşturmak amaçlarını taşıyan bir projedir. Topluluğun 2020-2021 öğretim yılında resmi faaliyetlerine başlaması beklenmektedir.</p>
				<p className="p-center">Daha fazla bilgi için:</p>
				<div align="center" className="button"><Button variant="dark" text-align="center" href="/hakkimizda">Hakkımızda</Button></div>
			</div>
		</div>
	</Styles>
)