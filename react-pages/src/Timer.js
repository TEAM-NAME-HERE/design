import React, {Component} from 'react';

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { seconds: 30 };
  }

  tick() {
  	const currentSeconds = this.state.seconds
  	if(currentSeconds == 0){
  		this.setState(prevState => ({
      	seconds: 30
    	}));
  	}else{
  		this.setState(prevState => ({
      	seconds: prevState.seconds - 1
    	}));
  	}
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }


  render() {
    return (
      <div>
        {this.state.seconds} seconds left
      </div>
    );
  }
}

export default Timer;