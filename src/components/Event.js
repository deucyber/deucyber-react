import React from 'react';
import styled from 'styled-components';

const Event = props => (
	<Styles>
		<div className="cards">
			<h4 className="header">{props.data.Title}</h4>
			<p className="desc">{props.data.Desc}</p>
			<p className="desc"><b>Yer:</b> {props.data.Location}</p>
			<p className="desc"><b>Zaman:</b> {props.data.Date}, {props.data.Time}</p>
			<a href={props.data.Link}><button type="button" className="btn btn-link">Etkinlik Sayfası</button></a>
		</div>
	</Styles>
)

export default Event;

const Styles = styled.div`
.cards {
	border: 1px solid black;
	border-radius: 5px;
	margin-bottom: 20px;
	padding: 10px;
	background-color: #202020;
	text-align: center;
	width: 100%;
	overflow-wrap: break-word;
}

.desc {
	text-align: left;
}

.header {
	padding-bottom: 10px;
	margin-bottom: 10px;
	border-bottom: 1px solid black;
	font-weight: bold;
}
`;