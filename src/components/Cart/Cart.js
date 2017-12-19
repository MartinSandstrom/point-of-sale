import React, { Component } from 'react';
import './Cart.css';
import garbageSvg from './garbage.svg';
import Button from '../Button/Button.js';

export default class Cart extends Component {
	renderFooter = () => {
		if (this.props.cart.length > 0) {
			return (
				<div className="cart-footer">
					<Button value="Pay" onClick={this.pay}></Button>
				</div>
			);
		}
	}

	pay = () => {
		let totalAmount = this.calculateAmount();
		console.log(totalAmount);
	}

	calculateAmount = () => this.props.cart.reduce( (currentValue, item) => currentValue + (item.prize * item.amount), 0);

	render() {
		let cartItems = this.props.cart.map(item => {
			return (
				<div key={item.id} className="cart-item">
					{item.name} x {item.amount}
					<img src={garbageSvg} alt="garbage" className="cart-garbage" onClick={() => this.props.removeItem(item.id)} />
				</div>
			);
		});
		return (
			<div className="cart">
				<div className="cart-body">
					{cartItems}
				</div>
				{this.renderFooter()}
			</div>
		)
	}
}
