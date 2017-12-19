import React from 'react';
import ReactDOM from 'react-dom';
import Modal from './Modal.js';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('Modal', () => {
	it('renders with the correct header', () => {
		let title = 'Cart';
		let wrapper = shallow(<Modal title={title} show={true}/>);
		expect(wrapper.find('.modal-header').text()).to.contain(title);
	});
});
