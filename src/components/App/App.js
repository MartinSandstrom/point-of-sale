import React, { Component } from 'react';
import './App.css';
import Cart from '../Cart/Cart.js';
import Product from '../Product/Product.js';
import ShoppingCartLogo from './shopping-cart.svg';
import Modal from '../Modal/Modal.js';

const PRODUCTS = [
	{
		id: '1',
		name: 'Burger',
		imrSrc: '',
		prize: 7
	},
	{
		id: '2',
		name: 'Soda',
		imgSrc: '',
		prize: 3
	},
	{
		id: '3',
		name: 'Friezz',
		imgSrc: '',
		prize: 3
	},
	{
		id: '4',
		name: 'MIlkshake',
		imgSrc: '',
		prize: 4
	}
];

class App extends Component {

	constructor() {
		super();
		this.state = {
			cart: [],
			showCart: false
		}
	}

	addToCart = (id) => {
		//Might wanna do a check here from the server that the item is still in stock etc?
		let product = PRODUCTS.find(product => product.id === id);
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

	showCart = () => {
		this.setState({ showCart: true });
	}

	hideCart = () => {
		this.setState({ showCart: false });
	}

	removeItem = (id) => {
		let cart = this.state.cart.filter(item => item.id !== id);
		this.setState({ cart });
	}

	getAmountOfProducts = () => this.state.cart.reduce((currentValue, item) => currentValue + item.amount, 0);

	render() {
		let products = PRODUCTS.map(product => <Product key={product.id} addToCart={this.addToCart} id={product.id} name={product.name}></Product>);
		return (
			<div className="app">
				<header className="app-header">
					<h1 className="app-title">Point of sale</h1>
					<img className="app-shopping-cart" src={ShoppingCartLogo} alt="shopping-cart" onClick={this.showCart} />
					{this.renderBadge()}
				</header>
				{products}
				<Modal show={this.state.showCart} onClose={this.hideCart}>
					<Cart removeItem={this.removeItem} cart={this.state.cart}></Cart>
				</Modal>
			</div>
		);
	}
}

export default App;
