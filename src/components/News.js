import React from 'react';
import NewsJson from '../data/News.json';
import styled from 'styled-components';

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

export const News = () => (
	NewsJson.map((postDetail, index) => {
		return (
			<Styles>
				<div className="cards">
					<h4 className="header">{postDetail.Title}</h4>
					<p className="desc">{postDetail.Desc}</p>
					<a href={postDetail.Link}><button type="button" class="btn btn-link">Devamını Oku</button></a>
				</div>
			</Styles>
		)
	})
)