import React from 'react'
import styled from 'styled-components';
import Button from 'react-bootstrap/Button'

const Styles = styled.div`
.button {
	margin-bottom: 40px;
}

.header{
	font-weight: bold;
	margin-top: 30px;
}

.header-top{
	font-weight: bold;
}
`;

export const Iletisim = () => (
	<Styles>
		<div>
			<h2 className="header-top">will do.</h2>
		</div>
	</Styles>
)