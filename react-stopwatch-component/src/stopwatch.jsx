import React from 'react';

class StopWatch extends React.Component {
  constructor(prosp) {
    super(prosp);
    this.state = {
      timePassed: 0,
      isRunning: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (!this.state.isRunning) {
      this.interval = setInterval(() =>
        this.setState({ timePassed: this.state.timePassed + 1 }),
      1000
      );
      return this.setState({ isRunning: true });
    }
    clearInterval(this.interval);
    return this.setState({ timePassed: 0, isRunning: false });
  }

  render() {
    return (
      <>
        <div className="watch">
          <div className="time">
            { this.state.timePassed }
          </div>
        </div>
        <i onClick={ this.handleClick } className={ this.state.isRunning
          ? 'fas fa-pause'
          : 'fas fa-play'
          }></i>
      </>
    );
  }
}

export default StopWatch;
