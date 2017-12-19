import React, { Component } from 'react';
import './Modal.css';

export default class Modal extends Component {
	render() {
		if (!this.props.show) {
			return null;
		}
		return (
			<div className="modal-wrap">
				<div className="modal">
					<div className="modal-close" onClick={this.props.onClose}>X</div>
					<div className="modal-header">
						{this.props.title}
					</div>
					<div className="modal-body">
						{this.props.children}
					</div>
				</div>
			</div>
		)
	}
}
