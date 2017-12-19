import React from 'react';
import ReactDOM from 'react-dom';
import { CartCalculate } from './CartCalculate.js';

let mockCart = [
	{
		amount: 6,
		id: "2",
		imgSrc: "",
		name: "Soda",
		prize: 3,
	}
];

it('can calculate the total amount', () => {
	let totalPrize = CartCalculate.getTotalAmount(mockCart);
	expect(totalPrize).toBe(18)
});
