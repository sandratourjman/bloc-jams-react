import React, { Component } from 'react';
import './PlayerBar.css';
 
class PlayerBar extends Component {
	render() {
	 return (
    <div className="player ">
	   <section className="player-bar">
      <div className="row justify-content-center align-items-center">
      <div className="col-sm-2 player-controls text-center">
      <section id="buttons">
           <button id="previous" onClick={this.props.handlePrevClick}>
             <span className="ion-md-skip-backward"></span>
           </button>
           <button id="play-pause" onClick={this.props.handleSongClick}>
             <span className={this.props.isPlaying ? 'ion-md-pause' : 'ion-md-play'}></span>
           </button>
           <button id="next" onClick={this.props.handleNextClick}>
             <span className="ion-md-skip-forward"></span>
           </button>
         </section>
      </div>
         <section className="col-sm-5 text-center" id="time-control">
           
           <div className="current-time">{this.props.formatTime(this.props.currentTime)}</div>
           <input 
             type="range" 
             className="seek-bar" 
             value={(this.props.currentTime / this.props.duration) || 0} 
             max="1" 
             min="0" 
             step="0.01" 
             onChange={this.props.handleTimeChange}
             />
           <div className="total-time">{this.props.formatTime(this.props.duration)}</div>
         </section>
         <section className="col-sm-3 text-center" id="volume-control">
           <div className="icon ion-md-volume-low vol-low"></div>
           <input 
             type="range" 
             className="seek-bar" 
             value={this.props.volume}
             max="1"
             min="0"
             step="0.1"
             onChange={this.props.handleVolumeChange}

             />
           <div className="icon ion-md-volume-high vol-high"></div>
         </section>
         </div>
	   </section>
     </div>
	 );
	}
}

export default PlayerBar;