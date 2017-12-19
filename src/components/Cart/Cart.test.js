import React from 'react';
import ReactDOM from 'react-dom';
import Cart from './Cart.js';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

let mockCart = [
	{
		amount: 6,
		id: "2",
		imgSrc: "",
		name: "Soda",
		prize: 3,
	},
	{
		amount: 2,
		id: "1",
		imgSrc: "",
		name: "Burger",
		prize: 7,
	}
];

describe('Cart', () => {
	it('renders with correct items', () => {
		let wrapper = shallow(<Cart cart={mockCart} />);
		expect(wrapper.find('.cart-body').text()).to.contain('6 x Soda18 AUD');
		expect(wrapper.find('.cart-body').text()).to.contain('2 x Burger14 AUD');
	});
});
