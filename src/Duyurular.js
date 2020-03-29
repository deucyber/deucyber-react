import React from 'react';
import styled from 'styled-components';
import News from './components/News';
import Event from './components/Event';

class Duyurular extends React.Component{
	constructor(props){
        super(props);
        this.state = {
			isEventsLoaded: false,
			isNewsLoaded: false,
			isAnnouncementsLoaded: false,
            announcements: [],
			news: [],
			events: []
        };
	}

	componentDidMount() {
		var th = this;
		const API_URL="//deucyber.com/static/";

		fetch(API_URL + "events")
			.then(response => response.json())
			.then((data) => {
				th.setState({
					events: data,
					isEventsLoaded: true
				});
				this.fillAnnouncementsState();
			})
			.catch((error) => {
				console.error(error)
			});
			
		fetch(API_URL + "news")
			.then(response => response.json())
			.then((data) => {
				th.setState({
					news: data,
					isNewsLoaded: true
				});
				this.fillAnnouncementsState();
			})
			.catch((error) => {
				console.error(error)
			});

		
	}
	fillAnnouncementsState(){
		if (this.state.isEventsLoaded && this.state.isNewsLoaded) {
			let announcements = [];
			this.state.news.forEach(element => {
				element.Type="news";
				announcements.push(element);
			});
			
			this.state.events.forEach(element => {
				element.Type="event"
				announcements.push(element);
			});
			
			announcements.sort((b,a) => {
				if (a.PublishTime < b.PublishTime)
				return -1;
				if (a.PublishTime > b.PublishTime)
				return 1;
				return 0;
			});
			
			this.setState({
				announcements,
				isAnnouncementsLoaded: true
			});
		}
	}

	render(){
		if(!this.state.isAnnouncementsLoaded){
			return <div style={{textAlign:"center"}}>Loading ...</div>
		}else{
			let i=0;
			return(
				<div>
					<h1 style={{textAlign:"center", padding:10}}>Duyurular</h1>
					{ this.state.announcements.map(
						post => {
							i++;
							return post.Type == "news" ? <News data={post} key={"news"+i}/> : <Event data={post}  key={"event"+i}/>
						}
					)}
				</div>
			);
		}    
	}
}

export default Duyurular;