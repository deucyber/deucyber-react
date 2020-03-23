import React from 'react';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import telegramlogo from './assets/telegram.png';
import twitterlogo from './assets/twitter.png';
import emaillogo from './assets/email.png';
import githublogo from './assets/github.png';

const Styles = styled.div`
.button {
	margin-bottom: 40px;
}

.header{
	font-weight: bold;
	margin-bottom: 20px;
	text-align: left;
}

.logo {
	height: 30px;
	weight: 30px;
	float: left;
	margin-right: 8px;
	margin-top: 3px;
}

.split {
	padding-top: 10px;
	padding-bottom: 20px;
	margin-bottom: 20px;
	border-bottom: 1px solid #333;
}

.split:last-child {
	border-bottom: 0;
}

.main-box {
	margin-top: 0px;
	max-width: 450px;
	margin-left: auto;
	margin-right: auto;
}
`;

export const Iletisim = () => (
	<Styles>
		<div className="main-box">
			<div className="split">
				<a href="https://www.t.me/deucyber" target="_blank">
					<img className="logo" src={telegramlogo} alt="Telegram Logo" />
					<h2 className="header">Telegram</h2>
				</a>
				<p>Genel iletişimimizi şimdilik "herkese açık" telegram grubumuz ile sağlıyoruz. İleride yalnızca topluluk üyelerinin bulunduğu telegram grupları kuracağız.</p>
				<a href="https://www.t.me/deucyber" target="_blank">t.me/deucyber</a>
			</div>
			<div className="split">
				<a href="https://www.twitter.com/deucyber" target="_blank">
					<img className="logo" src={twitterlogo} alt="Twitter Logo" />
					<h2 className="header">Twitter</h2>
				</a>
				<p>Henüz aktif olarak kullanmadığımız bir twitter hesabımız var. Gelecekteki duyurularımız için takip edebilirsiniz.</p>
				<a href="https://www.twitter.com/deucyber" target="_blank">@deucyber</a>
			</div>
			<div className="split">
				<a href="https://www.github.com/deucyber" target="_blank">
					<img className="logo" src={githublogo} alt="GitHub Logo" />
					<h2 className="header">GitHub</h2>
				</a>
				<p>Dökümantasyonlarımızı ve açık kaynak kod projelerimizi GitHub profilimizde paylaşıyor olacağız.</p>
				<a href="https://www.github.com/deucyber" target="_blank">github.com/deucyber</a>
			</div>
			<div className="split">
				<a href="#">
					<img className="logo" src={emaillogo} alt="E-Mail Logo" />
					<h2 className="header">E-Posta</h2>
				</a>
				<p>Bize E-Posta gönderebilirsiniz.</p>
				<a>deucyber [at] gmail [dot] com</a>
			</div>
		</div>
	</Styles>
)