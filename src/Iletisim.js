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
				<a href="https://www.t.me/deucyber">
					<img className="logo" src={telegramlogo} alt="Telegram Logo" />
					<h2 className="header">Telegram</h2>
				</a>
				<p>İletişimimizi herkese açık telegram grubumuz ile sağlıyoruz. Sohbet etmek, tartışmak veya soru sormak isterseniz aramıza katılabilirsiniz.</p>
			</div>
			<div className="split">
				<a href="https://www.twitter.com/deucyber">
					<img className="logo" src={twitterlogo} alt="Twitter Logo" />
					<h2 className="header">Twitter</h2>
				</a>
				<p>Şimdilik aktif olarak kullanmadığımız bir twitter hesabımız var. Gelecekteki duyurularımız için takip edebilirsiniz.</p>
			</div>
		</div>
	</Styles>
)