import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import albumData from './../data/albums';
import './Library.css';

class Library extends Component {
	constructor(props) {
		super(props);
		this.state = { albums: albumData};
	}

	render() {
		return (	
			<section className='library'>
				<div className="container-fluid">
				<h2 className="library-title">Library</h2>
					<div className="row justify-content-center">
							{
					  		this.state.albums.map( (album, index) =>
							<Link to={`/album/${album.slug}`} key={index}>
					  	 	<img className="album-cover" src={album.albumCover} alt={album.title} />
					  	 	<div className="album-title">{album.title}</div>
					  	 	<div className="album-artist">{album.artist}</div>
					  	  	<div className="album-song-count">{album.songs.length}</div>
					  		</Link>
					  		)
							}
					</div>
				</div>
			</section>
		);
	}
}

export default Library;