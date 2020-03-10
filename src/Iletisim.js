import React from 'react';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import telegramlogo from './assets/telegram.png';
import twitterlogo from './assets/twitter.png';

const Styles = styled.div`
.button {
	margin-bottom: 40px;
}

.header{
	font-weight: bold;
}

.logo {
	height: 30px;
	weight: 30px;
	float: left;
	margin-right: 8px;
	margin-top: 3px;
}

.logo-top {
	height: 30px;
	weight: 30px;
	float: left;
	margin-right: 8px;
	margin-top: 3px;
}

.splitter {
	padding-top: 10px;
	padding-bottom: 15px;
}
`;

export const Iletisim = () => (
	<Styles>
		<div>
			<div className="splitter">
			<a href="https://www.t.me/deucyber">
				<img className="logo-top" src={telegramlogo} alt="Telegram Logo" />
				<h2 className="header">Telegram</h2>
			</a>
			<p>Grup içi iletişimimizi herkese açık telegram grubumuz ile sağlıyoruz.</p>
			</div>
			<div className="splitter">
			<a href="https://www.t.me/deucyber">
				<img className="logo" src={twitterlogo} alt="Twitter Logo" />
				<h2 className="header">Twitter</h2>
			</a>
			<p>Grup içi iletişimimizi herkese açık telegram grubumuz ile sağlıyoruz.</p>
			</div>
		</div>
	</Styles>
)