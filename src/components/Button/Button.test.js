import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from './Button.js';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('Button', () => {
	it('renders with the correct value', () => {
		let value = 'Click me';
		let wrapper = shallow(<Button value={value} />);
		expect(wrapper.find('input').props().value).to.contain(value);
	});
});
