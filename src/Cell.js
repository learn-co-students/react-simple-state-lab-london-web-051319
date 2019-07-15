import React from 'react';

export default class Cell extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      color: props.values
    }
  }

  changeColor = () => {
    this.setState({color: '#333'})
  }

  render() {
    // return (
    //   <div className="cell" style={{backgroundColor: this.state.color, cursor: 'pointer'}} onClick={() => {
    //     console.log("I have been clicked!");
    //     this.changeColor();
    //   }
    // }
    // ></div> // double braces because we're inserting JSC and we're using a key-value pair which is an object
    // );
    return (
      <div className="cell" style={{backgroundColor: this.state.color}} onClick={() => {
        console.log("I have been clicked!");
        this.changeColor();
      }
    }
    ></div> // double braces because we're inserting JSC and we're using a key-value pair which is an object
    );
  };
};