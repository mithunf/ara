import React from 'react';
import {render} from 'react-dom';
import $ from 'jquery';
import Card from './cards.jsx'

export default class Column extends React.Component{
	render(){
		return(
			<div className="column">
				<Card/>
			</div>
		);
	}
}