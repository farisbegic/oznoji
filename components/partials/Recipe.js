import React from 'react';
import Link from 'next/link';

const Recipe = (props) => {
	return (
		<div className='recipe'>
			<div className='recipe-card'>
				<img alt='sups' src={`${props.image}`} className="recipe-image"/>
				<div className="recipe-information">
					<h5 className='recipe-card-heading'>{props.name}</h5>
					<ul className="recipe-nutrients">
						<li className="recipe-nutrient"><strong>Protein:</strong> {props.protein.toFixed(0)}g</li>
						<li className="recipe-nutrient"><strong>Carbs:</strong> {props.carbohydrates.toFixed(0)}g</li>
						<li className="recipe-nutrient"><strong>Fat:</strong> {props.fat.toFixed(0)}g</li>
					</ul>
					<Link href={`/supplements/${props.id}`}>
						<a className='supplement-link'>Read More</a>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Recipe;
