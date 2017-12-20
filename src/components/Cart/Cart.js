import React, { Component } from 'react';
import './Cart.css';
import spinner from './fruits-grape.gif';
import garbageSvg from './garbage.svg';
import { Button } from '../Button/Button.js';
import { CartCalculate } from '../../utils/CartCalculate.js';

export default class Cart extends Component {
	renderFooter = () => {
		if (this.props.cart.length > 0) {
			return (
				<div className="cart-footer">
					<div className="cart-total">
						<strong>Total: {CartCalculate.getTotalAmount(this.props.cart)} AUD</strong>
					</div>
					<Button value="Pay" disabled={this.props.isWaitingForPayment} onClick={this.props.pay}></Button>
				</div>
			);
		}
		return (
			<p>
				There are no items in the cart
			</p>
		)
	}

	renderSpinner = () => {
		if (this.props.isWaitingForPayment) {
			return (
				<div className="cart-spinner">
					<img src={spinner} alt="loading spinner" />
				</div>
			)
		}
	}

	render() {
		let cartItems = this.props.cart.map(item => {
			return (
				<div key={item.id} className="cart-item">
					<p className="cart-item-name">
						{item.amount} x {item.name}
					</p>
					<span>
						<strong>
							{item.amount * item.prize} AUD
						</strong>
					</span>
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
