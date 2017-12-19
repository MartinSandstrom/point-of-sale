import React from 'react';
import ReactDOM from 'react-dom';
import { Product } from './Product.js';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('Product', () => {
	it('renders without crash', () => {
		shallow(<Product name={'Burger'} prize={200} />);
	});
});
