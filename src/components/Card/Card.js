import React, { Component } from 'react';
import './Card.css';

export const Card = props => (
	<div className="card">
		<div className="card-header">
			<div className="card-heading">
				{props.title}
			</div>
		</div>
		<div className="card-body">
			{props.children}
		</div>
	</div>
);
