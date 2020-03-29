import React from 'react';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button'


const Cyberblog = () => (
	<Styles>
		<h1 className="h1">Yapım aşamasında.</h1>
		<div align="center"><Button variant="dark" text-align="center" href="/">Anasayfa</Button></div>
	</Styles>
)

export default Cyberblog;

const Styles = styled.div`

.h1 {
	font-family: Tomorrow;
	text-align: center;
	margin-top: 80px;
	margin-bottom: 40px;
}
`;