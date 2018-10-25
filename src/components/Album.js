import React, { Component } from 'react';
import albumData from './../data/albums';
import PlayerBar from './PlayerBar';
import './Album.css';

class Album extends Component {
	constructor(props) {
		super(props);

		const album = albumData.find( album =>{
			return album.slug === this.props.match.params.slug
		});

		this.state = {
			album: album,
			currentSong: album.songs[0],
			currentTime: 0,
			duration: album.songs[0].duration,
			volume: 0.5,
			isPlaying: false,
			isHovered: false
		};

		this.audioElement = document.createElement('audio');
		this.audioElement.src = album.songs[0].audioSrc;
	}

	play() {
		this.audioElement.play();
		this.setState({ isPlaying: true });
	}

	pause() {
		this.audioElement.pause();
		this.setState({ isPlaying: false });
	}

	formatTime(seconds) {
		if(isNaN(seconds)){return "-:--";}
		const minutes = Math.floor((seconds / 60));
		const wholeSeconds = parseInt((seconds % 60).toFixed(0));
		return (minutes + ":" + (wholeSeconds < 10 ? '0' + wholeSeconds: wholeSeconds));
	}

	componentDidMount() {
		this.eventListeners = {
			timeupdate: e => {
				this.setState({ currentTime: this.audioElement.currentTime });
			},
			durationchange: e => {
				this.setState({ duration: this.audioElement.duration });
			},
		};
		this.audioElement.addEventListener('timeupdate', this.eventListeners.timeupdate);
		this.audioElement.addEventListener('durationchange', this.eventListeners.durationchange);
	}

	componentWillUnmount() {
		this.audioElement.src = null;
		this.audioElement.removeEventListener('timeupdate', this.eventListeners.timeupdate);
		this.audioElement.removeEventListener('durationchange', this.eventListeners.durationchange);
	}

	setSong(song) {
		this.audioElement.src = song.audioSrc;
		this.setState({ currentSong: song });
	}

	handleSongClick(song) {
		const isSameSong = this.state.currentSong === song;
		if (this.state.isPlaying && isSameSong) {
			this.pause();
		} else {
			if (!isSameSong) { this.setSong(song); }
			this.play();
		}
	}

	handlePrevClick(song) {
	  const currentIndex = this.state.album.songs.findIndex(song => this.state.currentSong === song);
      const newIndex = Math.max(0, currentIndex - 1);
      const newSong = this.state.album.songs[newIndex];
      this.setSong(newSong);
      this.play();
	}

	handleNextClick(song) {
	  const currentIndex = this.state.album.songs.findIndex(song => this.state.currentSong === song);
	  const newIndex = Math.min((this.state.album.songs.length - 1), currentIndex + 1);
	  const newSong = this.state.album.songs[newIndex];
	  this.setSong(newSong);
	  this.play();
	}

	handleTimeChange(e) {
		const newTime = this.audioElement.duration * e.target.value;
		this.audioElement.currentTime = newTime;
		this.setState({ currentTime: newTime });
	}

	handleVolumeChange(e) {
		const newVolume = e.target.value;
		this.audioElement.volume = newVolume;
		this.setState({ volume: newVolume });
	}

	render() {
		return (
		<div className="album-layout">
			<div className="container-fluid py-5 album-container">
				<div className="row justify-content-center">
					<div className="col-sm-6">
						<img id="album-cover-art" src={this.state.album.albumCover} alt={this.state.album.title}/>
					</div>

					<div className="col-sm-6 text-div">
						<section className="album">
					   <section id="album-info">
			           <div className="album-details ">
			             <h1 id="album-title">{this.state.album.title}</h1> 
			             <h2 className="artist">{this.state.album.artist}</h2> 
			             <div id="release-info">{this.state.album.releaseInfo}</div>
			           </div>
					   </section>
					   <div className="songs-container d-flex">
					   	<table id="song-list" className="table">
						     <colgroup>
						     	<col id="song-number-column" />
						     	<col id="song-title-column" />
						     	<col id="song-duration-column" className="justify-content-end" />
						     </colgroup>
						     <tbody>
						     	{this.state.album.songs.map((song, index) => {
						       	return (
						       		<tr className="row song" key={index} onClick={() => this.handleSongClick(song)} 
						       		onMouseEnter={() => this.setState({ isHovered: index+1 })} 
						       		onMouseLeave={() => this.setState({ isHovered: false })} >
						       			<td className="song-number-col">
						       			{ (this.state.currentSong.title === song.title && this.state.isPlaying) 
				                        ? <span className={this.state.isPlaying ? "ion-md-pause" : "ion-md-play"}></span>
				                        : ((this.state.isHovered === index+1) 
				                        	? <span className="ion-md-play"></span> 
				                        	: <span className="song-number">{index+1}</span>
				                        	)
				                      	}
						       			</td>
						       			<td className="song-title">{song.title}</td>
						       			<td className="song-duration">{this.formatTime(song.duration)}</td>
						       		</tr>
						       	  )}
						       	)}
						     </tbody>
						   </table>
					   </div>
					   </section>
					</div>
					
				</div>
		   	</div>
		   
		   <footer className="player-footer text-light container-fluid d-flex justify-content-center">
			   <div className="py-4 player-bar">
			   	<PlayerBar 
				   	isPlaying={this.state.isPlaying} 
				   	currentSong={this.state.currentSong}
				   	currentTime={this.state.currentTime}
				   	duration={this.audioElement.duration}
				   	volume={this.state.volume}
				   	handleSongClick={() => this.handleSongClick(this.state.currentSong)}
				   	handlePrevClick={() => this.handlePrevClick()} 
				   	handleNextClick={() => this.handleNextClick()}
				   	handleTimeChange={(e) => this.handleTimeChange(e)} 
				   	handleVolumeChange={(e) => this.handleVolumeChange(e)}
				   	formatTime={(e) => this.formatTime(e)}
				   	/>
			   </div>	
		   </footer>
		  </div>
		);
	}
}

export default Album;