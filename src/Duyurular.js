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
	font-family: Tomorrow;
	padding-top: 10px;
	padding-bottom: 15px;
	margin-bottom: 20px;
	border: 1px solid black;
	letter-spacing: 1px;
	background-color: #151515;
}
`;

export const Duyurular = () => (
	<Styles>
		<div className="out-border">
			<div className="news-box">
				<h3 className="box-header">Haberler</h3>
				<News />
			</div>
			<div className="events-box">
				<h3 className="box-header">Etkinlikler</h3>
				<Events />
			</div>
		</div>
	</Styles>
)