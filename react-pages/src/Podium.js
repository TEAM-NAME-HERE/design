import React, {Component} from 'react';
import './Podium.css';

class Podium extends Component{
	constructor(props){
		super(props);
		this.state = {
			firstPlace : 'first place',
			firstScore : 500,
			secondPlace : 'second place',
			secondScore : 300,
			thirdPlace : 'third place',
			thirdScore : 200
		}
	}
	
	render(){
		return(
			<div id="podiumReturn">
				<div id="secondOuter">
					<p class="nameTag" id="secondNameTag">{this.state.secondPlace}</p>
					<div class="innerDiv" id="secondInner">
						<p class="scoreTag">{this.state.secondScore}</p>
					</div>
				</div>

				<div id="firstOuter">
					<p class="nameTag" id="firstNameTag">{this.state.firstPlace}</p>
					<div class="innerDiv" id="firstInner">
						<p class="scoreTag">{this.state.firstScore}</p>
					</div>
				</div>

				<div id="thirdOuter">
					<p class="nameTag" id="thirdNameTag">{this.state.thirdPlace}</p>
					<div class="innerDiv" id="thirdInner">
						<p class="scoreTag">{this.state.thirdScore}</p>
					</div>
				</div>
			</div>
		);
	}
}

export default Podium;