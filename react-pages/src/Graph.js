import React, {Component} from 'react';
import './Graph.css';

class Graph extends Component{
	constructor(props){
		super(props);
		this.state = {
			firstResponses : 3,
			secondResponses : 8,
			thirdResponses : 20,
			fourthResponses: 6,
			totalResponses: 37
		}
	}

	render(){
		return(
			<div id="graphReturn">
					<div id="actualGraph">
							<div class="barContainer">
								<p class="barLabel">{this.state.firstResponses}</p>
								<div id="barOne" style={{height: (this.state.firstResponses/this.state.totalResponses)*290}}>

								</div>
							</div>

							<div class="barContainer">
								<p class="barLabel">{this.state.secondResponses}</p>
								<div id="barTwo" style={{height: (this.state.secondResponses/this.state.totalResponses)*290}}>

								</div>
							</div>

							<div class="barContainer">
								<p class="barLabel">{this.state.thirdResponses}</p>
								<div id="barThree" style={{height: (this.state.thirdResponses/this.state.totalResponses)*290}}>

								</div>
							</div>

							<div class="barContainer">
								<p class="barLabel">{this.state.fourthResponses}</p>
								<div id="barFour" style={{height: (this.state.fourthResponses/this.state.totalResponses)*290}}>

								</div>
							</div>
					</div>

					<div id="graphLabels">
						<div class="labelContainer">
							<p id="firstLabel">1</p>
						</div>

						<div class="labelContainer">
							<p id="secondLabel">2</p>
						</div>

						<div class="labelContainer">
							<p id="thirdLabel">3</p>
						</div>

						<div class="labelContainer">
							<p id="fourthLabel">4</p>
						</div>
					</div>
			</div>
		);
	}
}

export default Graph;