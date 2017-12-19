import React, { Component } from 'react';
import Card from '../Card/Card.js';
import Button from '../Button/Button.js';


export default class Product extends Component {
	render() {
		return (
			<Card title={`${this.props.name} ${this.props.prize} AUD`} style={{ width: 300 }}>
				<Button value="Add to cart" onClick={() => this.props.addToCart(this.props.id)}></Button>
			</Card>
		)
	}
}
