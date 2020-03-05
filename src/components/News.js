import React from 'react';
import NewsJson from '../data/News.json';
import styled from 'styled-components';

const Styles = styled.div`
.cards {
	border: 1.5px solid gray;
	border-radius: 30px;
	margin-bottom: 20px;
	padding: 10px;
	background-color: #222223;
	text-align: center;
	width: 100%;
	overflow-wrap: break-word;
}
`;

export const News = () => (
	NewsJson.map((postDetail, index) => {
		return (
			<Styles>
				<div className="cards">
					<h3>{postDetail.Title}</h3>
					<p>{postDetail.Desc}</p>
					<a href={postDetail.Link}>bu da link</a>
					<br />
				</div>
			</Styles>
		)
	})
)