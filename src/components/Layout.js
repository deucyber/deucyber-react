import React from 'react';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';

const Layout = (props) => (
	<Styles>
		<Container>
			{props.children}
		</Container>
	</Styles>
)

export default Layout;

const Styles = styled.div`
.container {
	background-color: #282828;
	padding-top:20px;
	padding-bottom:50px;
	min-height: 100vh;
	color: #DDDDDD;
	display: flex;
	flex-direction: column;
	font-family: "Quicksand"
}
`;