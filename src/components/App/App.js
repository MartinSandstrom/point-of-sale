import React, { Component } from 'react';
import './App.css';
import Cart from '../Cart/Cart.js';
import { Product } from '../Product/Product.js';
import ShoppingCartLogo from './shopping-cart.svg';
import Modal from '../Modal/Modal.js';
import { Products } from '../../data.js';
import { CartCalculate } from '../../utils/CartCalculate.js';
const websocket = new WebSocket('ws://demos.kaazing.com/echo');

class App extends Component {

	constructor() {
		super();
		this.state = {
			cart: [],
			showCart: false,
			isWaitingForPayment: false,
			isPaymentDone: false
		}
		websocket.onmessage = this.onPurchaseDone;
	}

	onPurchaseDone = event => {
		let jsObj = JSON.parse(event.data);
		this.setState({
			isWaitingForPayment: false,
			isPaymentDone: true,
			showCart: false,
			cart: [],
			recieptTotal: jsObj.amount
		});
	}

	addToCart = (id) => {
		//Might wanna do a check here from the server that the item is still in stock etc?
		let product = Products.find(product => product.id === id);
		let cart = this.state.cart;
		let productInCart = this.getProductFromCart(cart, product)
		if (productInCart) {
			productInCart.amount++;
		} else {
			product.amount = 1;
			cart.push(product);
		}
		this.setState({ cart });
	}

	getProductFromCart = (cart, product) => cart.find(cartItem => cartItem.id === product.id);

	renderBadge = () => {
		if (this.state.cart.length > 0) {
			return (
				<span className="app-number-of-items-badge" onClick={this.showCart}>
					{this.getAmountOfProducts()}
				</span>
			);
		}
	}

	showCart = () => this.setState({ showCart: true });

	hideCart = () => this.setState({ showCart: false });

	removeItem = (id) => {
		let cart = this.state.cart.filter(item => item.id !== id);
		this.setState({ cart });
	}

	getAmountOfProducts = () => this.state.cart.reduce((currentValue, item) => currentValue + item.amount, 0);

	pay = () => {
		let amount = CartCalculate.getTotalAmount(this.state.cart);
		let json = JSON.stringify({
			amount,
			event: 'purchase'
		});
		websocket.send(json);
		this.setState({ isWaitingForPayment: true });
	}

	renderProductsOrReciept = () => {
		if (this.state.isPaymentDone) {
			return (
				<div>
					<h1>Thank you for your order</h1>
					<p>Amount {this.state.recieptTotal} AUD</p>
				</div>
			);
		}
		let products = Products.map(product => <Product key={product.id} addToCart={this.addToCart} id={product.id} prize={product.prize} name={product.name}></Product>);
		return (
			products
		)
	}

	render() {
		return (
			<div className="app">
				<header className="app-header">
					<h1 className="app-title">Point of sale</h1>
					<img className="app-shopping-cart" src={ShoppingCartLogo} alt="shopping-cart" onClick={this.showCart} />
					{this.renderBadge()}
				</header>
				{this.renderProductsOrReciept()}
				<Modal title="Cart" show={this.state.showCart} onClose={this.hideCart}>
					<Cart isWaitingForPayment={this.state.isWaitingForPayment} removeItem={this.removeItem} cart={this.state.cart} pay={this.pay}></Cart>
				</Modal>
			</div>
		);
	}
}

export default App;
