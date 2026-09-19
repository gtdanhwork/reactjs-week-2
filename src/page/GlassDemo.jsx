import React, { useState } from 'react';

const GlassDemo = () => {
	const [glass, setGlass] = useState({
		
	});

	return (
		<div className="glassDemo">
			<div className="container modelDemo">
				<div className="row justify-content-between">
					<div className="col-3 position-relative">
						<img
							className="img-fluid position-relative"
							src="./glassesImage/model.jpg"
							alt="Model"
							id="modelLeft"
						/>
						<img
							className="img-fluid position-absolute"
							src="./glassesImage/v4.png"
							alt="Glass Demo"
							id="overlayGlasses"
						/>
					</div>
					<div className="col-3">
						<img
							className="img-fluid"
							src="./glassesImage/model.jpg"
							alt="modelRight"
						/>
					</div>
				</div>
			</div>
			<div className="container bg-white glassCatalog">
				<div className="row justify-content-center">
					<div className="col-2 m-2 align-content-center">
						<img
							className="img-fluid"
							src="./glassesImage/g1.jpg"
							alt="Glass 1"
						/>
					</div>
					<div className="col-2 m-2 align-content-center">
						<img
							className="img-fluid"
							src="./glassesImage/g2.jpg"
							alt="Glass 2"
						/>
					</div>
					<div className="col-2 m-2 align-content-center">
						<img
							className="img-fluid"
							src="./glassesImage/g3.jpg"
							alt="Glass 3"
						/>
					</div>
					<div className="col-2 m-2 align-content-center">
						<img
							className="img-fluid"
							src="./glassesImage/g4.jpg"
							alt="Glass 4"
						/>
					</div>
					<div className="col-2 m-2 align-content-center">
						<img
							className="img-fluid"
							src="./glassesImage/g5.jpg"
							alt="Glass 5"
						/>
					</div>
					<div className="col-2 m-2 align-content-center">
						<img
							className="img-fluid"
							src="./glassesImage/g6.jpg"
							alt="Glass 6"
						/>
					</div>
					<div className="col-2 m-2 align-content-center">
						<img
							className="img-fluid"
							src="./glassesImage/g7.jpg"
							alt="Glass 7"
						/>
					</div>
					<div className="col-2 m-2 align-content-center">
						<img
							className="img-fluid"
							src="./glassesImage/g8.jpg"
							alt="Glass 8"
						/>
					</div>
					<div className="col-2 m-2 align-content-center">
						<img
							className="img-fluid"
							src="./glassesImage/g9.jpg"
							alt="Glass 9"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default GlassDemo;
