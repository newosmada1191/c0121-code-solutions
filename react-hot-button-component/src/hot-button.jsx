import React from 'react';

class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { clicks: 0 };
  }

  handleClick() {
    return this.setState({ clicks: this.state.clicks + 1 });
  }

  changeColor() {
    const color = this.state.clicks;
    if (color >= 0 && color < 3) { return 'absolute-zero'; }
    if (color >= 3 && color < 6) { return 'freezing'; }
    if (color >= 6 && color < 9) { return 'cold'; }
    if (color >= 9 && color < 12) { return 'warm'; }
    if (color >= 12 && color < 15) { return 'hot'; }
    if (color >= 15 && color < 18) { return 'burning'; }
    if (color >= 18) { return 'praise-the-sun'; }
  }

  render() {
    return (
    <button onClick={ this.handleClick } className={ this.changeColor() }>
      Hot Button
    </button>
    );
  }
}

export default CustomButton;
