import React, { Component } from 'react';
import './Cart.css';
import spinner from './fruits-grape.gif';
import garbageSvg from './garbage.svg';
import { Button } from '../Button/Button.js';

export default class Cart extends Component {
	renderFooter = () => {
		if (this.props.cart.length > 0) {
			return (
				<div className="cart-footer">
					<Button value="Pay" disabled={this.props.isWaitingForPayment} onClick={this.props.pay}></Button>
				</div>
			);
		}
	}

	renderSpinner = () => {
		if (this.props.isWaitingForPayment) {
			return (
				<div className="cart-spinner">
					<img src={spinner} alt="loading spinner"/>
				</div>
			)
		}
	}

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
					{this.renderSpinner()}
				</div>
				{this.renderFooter()}
			</div>
		);
	}
}
