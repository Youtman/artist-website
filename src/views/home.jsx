import React from 'react';

const Home = () => {
	return (
		<div class='demo-cont'>
			{/* slider start */}
			<div class='fnc-slider example-slider'>
				<div class='fnc-slider__slides'>
					{/* slide start */}
					<div class='fnc-slide m--blend-green m--active-slide'>
						<div class='fnc-slide__inner'>
							<div class='fnc-slide__mask'>
								<div class='fnc-slide__mask-inner'></div>
							</div>
							<div class='fnc-slide__content'>
								<h2 class='fnc-slide__heading'>
									<div class='fnc-slide__heading-line'>
										<span>Kevoh</span>
									</div>
									<div class='fnc-slide__heading-line'>
										<span>Yout</span>
									</div>
								</h2>
								<button type='button' class='fnc-slide__action-btn'>
									About
									<span data-text='About'>About</span>
								</button>
							</div>
						</div>
					</div>
					{/* slide end */}
					{/* slide start */}
					<div class='fnc-slide m--blend-dark'>
						<div class='fnc-slide__inner'>
							<div class='fnc-slide__mask'>
								<div class='fnc-slide__mask-inner'></div>
							</div>
							<div class='fnc-slide__content'>
								<h2 class='fnc-slide__heading'>
									<div class='fnc-slide__heading-line'>
										<span>Dancehall</span>
									</div>
									<div class='fnc-slide__heading-line'>
										<span>Don</span>
									</div>
								</h2>
								<button type='button' class='fnc-slide__action-btn'>
									Music
									<span data-text='Music'>Music</span>
								</button>
							</div>
						</div>
					</div>
					{/* slide end */}
					{/* slide start */}
					<div class='fnc-slide m--blend-red'>
						<div class='fnc-slide__inner'>
							<div class='fnc-slide__mask'>
								<div class='fnc-slide__mask-inner'></div>
							</div>
							<div class='fnc-slide__content'>
								<h2 class='fnc-slide__heading'>
									<div class='fnc-slide__heading-line'>
										<span>Funk inna de</span>
									</div>
									<div class='fnc-slide__heading-line'>
										<span>Function</span>
									</div>
								</h2>
								<button type='button' class='fnc-slide__action-btn'>
									Videos
									<span data-text='Videos'>Videos</span>
								</button>
							</div>
						</div>
					</div>
					{/* slide end */}
					{/* slide start */}
					<div class='fnc-slide m--blend-blue'>
						<div class='fnc-slide__inner'>
							<div class='fnc-slide__mask'>
								<div class='fnc-slide__mask-inner'></div>
							</div>
							<div class='fnc-slide__content'>
								<h2 class='fnc-slide__heading'>
									<div class='fnc-slide__heading-line'>
										<span>The Life of</span>
									</div>
									<div class='fnc-slide__heading-line'>
										<span>the Party</span>
									</div>
								</h2>
								<button type='button' class='fnc-slide__action-btn'>
									Shows
									<span data-text='Shows'>Shows</span>
								</button>
							</div>
						</div>
					</div>
					{/* slide end */}
				</div>
				<nav class='fnc-nav'>
					<div class='fnc-nav__bgs'>
						<div class='fnc-nav__bg m--navbg-green m--active-nav-bg'></div>
						<div class='fnc-nav__bg m--navbg-dark'></div>
						<div class='fnc-nav__bg m--navbg-red'></div>
						<div class='fnc-nav__bg m--navbg-blue'></div>
					</div>
					<div class='fnc-nav__controls'>
						<button class='fnc-nav__control'>
							About
							<span class='fnc-nav__control-progress'></span>
						</button>
						<button class='fnc-nav__control'>
							Music
							<span class='fnc-nav__control-progress'></span>
						</button>
						<button class='fnc-nav__control'>
							Videos
							<span class='fnc-nav__control-progress'></span>
						</button>
						<button class='fnc-nav__control'>
							Shows
							<span class='fnc-nav__control-progress'></span>
						</button>
					</div>
				</nav>
			</div>
			{/* slider end */}
		</div>
	);
};

export default Home;
