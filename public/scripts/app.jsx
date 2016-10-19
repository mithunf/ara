import React from 'react';
import {render} from 'react-dom';
import $ from 'jquery';
import ReactGridLayout from 'react-grid-layout';

class MainContainer extends React.Component{

	constructor(props){
		super(props);

		this.state = {
			phone_layout: [

  			],
  			 accessories_layout: [
		        {i: 'a', x: 0, y: 0, w: 1, h: 2, id:'box1'},
		        {i: 'b', x: 1, y: 0, w: 1, h: 2, id:'box2'},
		        {i: 'c', x: 2, y: 0, w: 1, h: 2, id:'box3'},
		        {i: 'd', x: 0, y: 1, w: 1, h: 2, id:'box4'},
		        {i: 'e', x: 1, y: 1, w: 1, h: 2, id:'box5'},
		        {i: 'f', x: 2, y: 1, w: 1, h: 2, id:'box6'},
		        {i: 'g', x: 0, y: 2, w: 1, h: 2, id:'box7'},
		        {i: 'h', x: 1, y: 2, w: 1, h: 2, id:'box8'},
		        {i: 'i', x: 2, y: 2, w: 1, h: 2, id:'box9'},
		        {i: 'j', x: 0, y: 3, w: 1, h: 2, id:'box10'}
		    ]
		}
	}


	move(key){
		this.setState({
			 phone_layout: this.state.phone_layout.concat(this.state.accessories_layout.filter(item => item.i === key)),
			 accessories_layout: this.state.accessories_layout.filter(item => item.i != key)
		})
	}

	render(){
		var acc_val = this.state.accessories_layout;
		var phone_val = this.state.phone_layout;
		return(

			<div className="wrapper">
				<div className="phone-container">
				   <ReactGridLayout className="phone-layout" layout={this.state.phone_layout} cols={2} rowHeight={30} width={300}>
				   		{
				   			phone_val.map(items => (<div
				   				key={items.i}
				   				id={items.id}
				   				className="w3-panel w3-card-8 box"
				   				/>))
				   		}
				   </ReactGridLayout>
			 	</div>
			 	<div className="accessories-container">
				   <ReactGridLayout className="layout" layout={this.state.accessories_layout} cols={5} rowHeight={30} width={600}>
				   		{
				   			acc_val.map(item => (<div 
					   			key={item.i} 
					   			id={item.id}
					   			className="w3-panel w3-card-8 box" 
					   			onClick={() => this.move(item.i)}
					   			/>))
					     }
				   </ReactGridLayout>
			 	</div>
			</div>
		);
	}
}


render(<MainContainer/>, document.getElementById('app'));