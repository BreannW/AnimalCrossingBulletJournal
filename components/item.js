import React, { Component } from "react";
import styled from "styled-components";
import Checkbox from "./checkbox";

class Item extends Component {
	constructor(props) {
		super(props);
		this.item = props.item;
		this.handleCheckboxChange = this.handleCheckboxChange.bind(this);

		this.state = {
			checked: false,
			name: this.props.name.name
		};

	console.log()
	}

	

	handleCheckboxChange(event) {
		this.setState({checked: event.target.checked})
	
		
		
	}

	

	render(){
		return (
			<div>
				<label>
					<Checkbox
						checked={this.state.checked}
						onChange={this.handleCheckboxChange}
						id={this.id}
						name={this.state.name}
					/>
					
				</label>
				
			</div>

		);
	}
}

export default Item;