import React, { Component } from 'react';
import './Button.css';

export default class Button extends Component {
	render() {
		return (
			<input type="button" className="btn" value={this.props.value} onClick={this.props.onClick}/>
		)
	}
}
