import React from 'react';

class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { isOn: false };
  }

  handleClick() {
    const switchClick = this.state.isOn;
    if (switchClick) { return this.setState({ isOn: false }); }
    if (!switchClick) { return this.setState({ isOn: true }); }
  }

  handleSwitch() {
    if (this.state.isOn) { return 'switch-on'; }
    return 'switch-off';
  }

  render() {
    const newClass = this.handleSwitch();
    return (
      <div className="container">
        <div className={ newClass }>
          <button onClick={ this.handleClick }
          className={ newClass }>
          </button>
          <div className="please-get-out" onClick={ this.handleClick }>
            {this.state.isOn ? 'On' : 'Off'}
          </div>
        </div>
      </div>
    );
  }
}

export default ToggleSwitch;
