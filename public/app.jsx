import React from 'react';
import {render} from 'react-dom';
import $ from 'jquery';
import ReactGridLayout from 'react-grid-layout';
import Column from './columns.jsx'

class MainContainer extends React.Component{

	constructor(props){
		super(props);

		this.state = {
			phone_layout: [

  			],
  			 accessories_layout: [
		        {i: 'a', x: 0, y: 0, w: 1, h: 2},
		        {i: 'b', x: 1, y: 0, w: 1, h: 2},
		        {i: 'c', x: 2, y: 1, w: 1, h: 2},
		        {i: 'd', x: 3, y: 0, w: 1, h: 2},
		        {i: 'e', x: 4, y: 0, w: 1, h: 2},
		        {i: 'f', x: 5, y: 0, w: 1, h: 2},
		        {i: 'g', x: 6, y: 0, w: 1, h: 2},
		        {i: 'h', x: 7, y: 0, w: 1, h: 2},
		        {i: 'i', x: 8, y: 0, w: 1, h: 2},
		        {i: 'j', x: 9, y: 0, w: 1, h: 2}
		    ]

		}
	}


	move(key){
		/*console.log(key)*/
		this.setState({
			 phone_layout: this.state.phone_layout.concat(this.state.accessories_layout.filter(item => item.i === key)),
			 accessories_layout: this.state.accessories_layout.filter(item => item.i != key)
		})
	}

	render(){
		var val = this.state.accessories_layout;

		return(

			<div className="wrapper">
				<div className="phone-container">
				   <ReactGridLayout className="layout" layout={this.state.phone_layout} cols={10} rowHeight={30} width={1200}>
				   		<div key={"a"} id="box1" className="w3-panel w3-card-8 box"></div>
				   </ReactGridLayout>
			 	</div>
			 	<div className="accessories-container">
				   <ReactGridLayout className="layout" layout={this.state.accessories_layout} cols={10} rowHeight={30} width={1200}>
					     <div key={this.state.accessories_layout[0].i} id="box1" className="w3-panel w3-card-8 box" onClick={() => this.move('a')}>1</div>
					     <div key={"b"} id="box2" className="box w3-panel w3-card-8">2</div>
					     <div key={"c"} id="box3" className="box w3-panel w3-card-8">3</div>
					     <div key={"d"} id="box4" className="box w3-panel w3-card-8">1</div>
					     <div key={"e"} id="box5" className="box w3-panel w3-card-8">2</div>
					     <div key={"f"} id="box6" className="box w3-panel w3-card-8">3</div>
					     <div key={"g"} id="box7" className="box w3-panel w3-card-8">1</div>
					     <div key={"h"} id="box8" className="box w3-panel w3-card-8">2</div>
					     <div key={"i"} id="box9" className="box w3-panel w3-card-8">3</div>
					     <div key={"j"} id="box10" className="box w3-panel w3-card-8">3</div>
				   </ReactGridLayout>
			 	</div>
			</div>
		);
	}
}


render(<MainContainer/>, document.getElementById('app'));