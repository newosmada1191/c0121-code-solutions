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
    if (this.state.isOn) { return 'on'; }
    return 'off';
  }

  render() {
    const newClass = this.handleSwitch();
    return (
      <div className="container">
        <div className={ newClass }>
          <button onClick={ this.handleClick } className={ newClass }></button>
        </div>
      </div>
    );
  }
}

export default ToggleSwitch;
