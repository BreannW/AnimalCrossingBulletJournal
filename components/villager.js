import React, { Component } from 'react';
import styled from 'styled-components'


class Villager extends Component {
	  constructor(props) {
        super(props);
        this.name = props.name;
        this.img = props.img
        this.personality = props.personality;
        this.birthday = props.birthday;

        this.randomBg = this.randomBg.bind(this);

        this.state = {
            data: [],
            bgColor:this.randomBg()
        };


    }

    randomBg(){
    	var BGColors = ['#98d2e3', '#82d7aa', '#f39e64']
    	var color = BGColors[Math.floor(Math.random()*BGColors.length)];
    	this.setState({bgColor:color})
    	return color;
    } 

    	
    	render(){	

        return (
            <div className="villager" id="villager-1">
						<img src={this.img} className="villagerImage" style={{background: this.state.bgColor }} />
						<div className="villagerInfo">
							<p className="villagerName"> {this.name} </p>
							<p className="villagerclassName">{this.personality}</p>
							<p className="villagerMoveIn">{this.birthday}</p>
						</div>
					</div>
            )}

    }

    export default Villager