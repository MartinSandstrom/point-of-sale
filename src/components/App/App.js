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
		imrSrc: ''
	},
	{
		id: '2',
		name: 'Soda',
		imgSrc: ''
	},
	{
		id: '3',
		name: 'Friezz',
		imgSrc: ''
	},
	{
		id: '4',
		name: 'MIlkshake',
		imgSrc: ''
	}
];

class App extends Component {

	constructor() {
		super();
		this.state = {
			cart: []
		}
	}

	addToCart = (id) => {
		//Might wanna do a check here from the server that the item is still in stock etc?
		let product = PRODUCTS.find( product => product.id === id);
		let cart = this.state.cart;
		cart.push(product);
		this.setState({cart});
	}

	renderBadge = () => {
		if (this.state.cart.length > 0) {
			return (<span className="App-number-of-items-badge">{this.state.cart.length}</span>)
		}
	}

	render() {
		let products = PRODUCTS.map(product => <Product key={product.id} addToCart={this.addToCart} id={product.id} name={product.name}></Product>);
		return (
			<div className="App">
				<header className="App-header">
					<h1 className="App-title">Point of sale</h1>
					<img className="App-shopping-cart" src={ShoppingCartLogo} alt="shopping-cart" />
					{this.renderBadge()}
				</header>
				<p className="App-intro">
					To get started, edit <code>src/App.js</code> and save to reload.
				</p>
				<Cart></Cart>
				{products}
				<Modal></Modal>
			</div>
		);
	}
}

export default App;
