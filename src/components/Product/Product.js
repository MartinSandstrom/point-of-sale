import React from 'react';
import { Card } from '../Card/Card.js';
import { Button } from '../Button/Button.js';

export const Product = props => (
	<Card title={props.name} prize={props.prize} style={{ width: 300 }}>
		<Button value="Add to cart" onClick={() => props.addToCart(props.id)}></Button>
	</Card>
)
