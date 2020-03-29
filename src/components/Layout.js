import React from 'react';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
.container {
	background-color: #282828;
	padding-top:20px;
	padding-bottom:50px;
	color: #DDDDDD;
	display: flex;
	flex-direction: column;
	font-family: "Quicksand"
}
`;

export const Layout = (props) => (
	<Styles>
			<Container>
				{props.children}
			</Container>
	</Styles>
)