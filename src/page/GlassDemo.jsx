import React, { useState } from 'react';

const glassData = [
	{
		id: 1,
		price: 30,
		name: 'GUCCI G8850U',
		url: './glassesImage/v1.png',
		demoUrl: './glassesImage/g1.jpg',
		desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ',
	},
	{
		id: 2,
		price: 50,
		name: 'GUCCI G8759H',
		url: './glassesImage/v2.png',
		demoUrl: './glassesImage/g2.jpg',
		desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ',
	},
	{
		id: 3,
		price: 30,
		name: 'DIOR D6700HQ',
		url: './glassesImage/v3.png',
		demoUrl: './glassesImage/g3.jpg',
		desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ',
	},
	{
		id: 4,
		price: 70,
		name: 'DIOR D6005U',
		url: './glassesImage/v4.png',
		demoUrl: './glassesImage/g4.jpg',
		desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ',
	},
	{
		id: 5,
		price: 40,
		name: 'PRADA P8750',
		url: './glassesImage/v5.png',
		demoUrl: './glassesImage/g5.jpg',
		desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ',
	},
	{
		id: 6,
		price: 60,
		name: 'PRADA P9700',
		url: './glassesImage/v6.png',
		demoUrl: './glassesImage/g6.jpg',
		desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ',
	},
	{
		id: 7,
		price: 80,
		name: 'FENDI F8750',
		url: './glassesImage/v7.png',
		demoUrl: './glassesImage/g7.jpg',
		desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ',
	},
	{
		id: 8,
		price: 100,
		name: 'FENDI F8500',
		url: './glassesImage/v8.png',
		demoUrl: './glassesImage/g8.jpg',
		desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ',
	},
	{
		id: 9,
		price: 60,
		name: 'FENDI F4300',
		url: './glassesImage/v9.png',
		demoUrl: './glassesImage/g9.jpg',
		desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ',
	},
];

const GlassDemo = () => {
	const [glass, setGlass] = useState({
		id: '',
		name: '',
		desc: '',
		url: '',
		demoUrl: '',
		price: '',
	});

	return (
		<div className="glassDemo">
			<div className="container w-100 mx-auto modelDemo">
				<div className="row justify-content-center">
					<div className="col-4 position-relative">
						<img
							className="img-fluid position-relative"
							src="./glassesImage/model.jpg"
							alt="Model"
							id="modelLeft"
						/>
						<img
							className="img-fluid overlayGlasses position-absolute"
							src={glass.url}
							alt={glass.name}
							id={glass.id}
						/>
						<div
							className={`glassInfo bg-success text-white p-2 rounded-2 position-absolute ${glass.id !== '' ? `` : `d-none`}`}
						>
							<h4>{glass.name}</h4>
							<p>{glass.desc}</p>
							<p>Price: {glass.price}</p>
						</div>
					</div>
				</div>
			</div>
			<div className="container bg-white glassCatalog">
				<div className="row justify-content-center">
					{glassData.map((glass) => {
						return (
							<div
								id={glass.id}
								className="col-2 m-2 align-content-center"
							>
								<img
									className="img-fluid glassesShow"
									src={glass.demoUrl}
									alt={glass.name}
									onClick={() => setGlass(glass)}
								/>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default GlassDemo;
