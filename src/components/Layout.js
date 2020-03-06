import React from 'react';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
.container {
	background-color: #282828;
	border-top: 10px solid rgba(0, 0, 0, 0);
	border-bottom: 10px solid rgba(0, 0, 0, 0);
	min-height: 100vh;
	box-shadow: 0px 0px 100px 20px black;
	color: #DDDDDD;
	display: flex;
	flex-direction: column;
}
`;

export const Layout = (props) => (
	<Styles>
			<Container>
				{props.children}
			</Container>
	</Styles>
)