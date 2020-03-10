import React from 'react';
import { Events } from './components/Events';
import styled from 'styled-components';
{/*import { News } from './components/News';*/}

const Styles = styled.div`
.events-box{
	width: 49%;
	float: center;
}
`;

export const Duyurular = () => (
	<Styles>
			<div className="events-box">
				<Events />
			</div>
	</Styles>
)