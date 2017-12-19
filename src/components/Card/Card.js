import React from 'react';
import './Card.css';

export const Card = props => (
	<div className="card">
		<div className="card-header">
			<div className="card-heading">
				<strong>{props.title}</strong>
				<span> {props.prize} AUD</span>
			</div>
		</div>
		<div className="card-body">
			{props.children}
		</div>
	</div>
);
