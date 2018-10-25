import React from 'react';
import './Landing.css';
import headphones from '../images/headphones.svg';
import dashboard from '../images/dashboard.svg';
import phone from '../images/phone.svg';

const Landing = () => (
	<section className="landing">
		<div className="d-flex align-items-center text-center align-text-center">
			<div className="container-fluid">
				<div className="row justify-content-center hero-header">
					<div className="hero-div col-12 col-sm-10 col-md-8">
						<h1 className="hero-title">Turn the music up</h1>
					</div>
				</div>
			</div>
		</div>

		<div className="container-fluid">
			<section className="selling-points py-4">	
				<div className="row justify-content-center">
				  <div className="col-12 col-sm-4">
				  	<div className="point">
				  		<img className="layout-icons" src={headphones} alt="headphones icon" />
						<h2 className="point-title">Choose your music</h2>
						<p className="point-description">The world is full of music; why should you have to listen to music someone else chose?</p>
					</div>

					</div>

					<div className="col-12 col-sm-4">
						<div className="point">
							<img className="layout-icons" src={dashboard} alt="dashboard icon" />
							<h2 className="point-title">Unlimited, streaming, ad-free</h2>
							<p className="point-description">No arbitrary limits. No distractions.</p>
						</div>
					</div>

					<div className="col-12 col-sm-4">
						<div className="point">
							<img className="layout-icons" src={phone} alt="phone icon" />
							<h2 className="point-title">Mobile enabled</h2>
							<p className="point-description">Listen to your music on the go. This streaming service is available on all mobile platforms.</p>
						</div>
					</div>
				</div>
		</section>
		</div>
		<footer className="site-footer text-light container-fluid d-flex justify-content-center">
			<section className="py-5 ">
				<p className="">{new Date().getFullYear()} | Created by Sandra Tourjman</p>
			</section>
			
		</footer>
	</section>
);

export default Landing;