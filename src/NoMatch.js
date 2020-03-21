import React from 'react';
import nfjpeg from './assets/404.jpg';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button'

const Styles = styled.div`
.img {
	display: block;
 	margin-left: auto;
  	margin-right: auto;
	width: 60%;
	height: auto;
	border-radius: 50%;
	margin-top: 40px;
	margin-bottom: 40px;
}

.h1 {
	font-family: Tomorrow;
	text-align: center;
	margin-top: 80px;
}
`;

export const NoMatch = () => (
	<Styles>
		<h1 className="h1">Sayfa bulunamadı.</h1>
		<div>
			<img className="img" src={nfjpeg} alt="Logo" />
		</div>
		<div align="center"><Button variant="dark" text-align="center" href="/">Anasayfa</Button></div>
	</Styles>
)