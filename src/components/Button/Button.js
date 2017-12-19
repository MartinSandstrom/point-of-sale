import React, { Component } from 'react';
import './Button.css';

export const Button = (props) => (
	<input type="button" className="btn" disabled={props.disabled} value={props.value} onClick={props.onClick} />
)
