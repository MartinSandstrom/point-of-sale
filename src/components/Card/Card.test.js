import React from 'react';
import ReactDOM from 'react-dom';
import { Card } from './Card.js';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('Card', () => {
	it('renders with the correct header', () => {
		let title = 'Burger';
		let prize = 200;
		let wrapper = shallow(<Card title={title} prize={prize} />);
		expect(wrapper.find('.card-heading').text()).to.contain(title);
		expect(wrapper.find('.card-heading').text()).to.contain(prize);
	});
});
