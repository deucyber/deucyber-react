import React from 'react'
import { News } from './components/News';
import { Events } from './components/Events';
import styled from 'styled-components';

const Styles = styled.div`
.news-box{
	width: 49%;
	float: left;
}

.events-box{

	width: 49%;
	float: right;
}

.out-border{

}

.box-header{
	text-align: center;
	padding-top: 10px;
	padding-bottom: 10px;
	margin-bottom: 20px;
	border-bottom: 1px solid white;
}
`;

export const Duyurular = () => (
	<Styles>
		<div className="out-border">
			<div className="news-box">
				<h2 className="box-header">Haberler</h2>
				<News />
			</div>
			<div className="events-box">
				<h2 className="box-header">Etkinlikler</h2>
				<Events />
			</div>
		</div>
	</Styles>
)