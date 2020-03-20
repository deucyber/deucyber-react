import React from 'react';
import nfjpeg from './assets/404.jpg';
import styled from 'styled-components';

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
	margin-bottom: 40px;
}
`;

export const Testpage = () => (
	<Styles>
		<h1 className="h1">This is a test page.</h1>
	</Styles>
)