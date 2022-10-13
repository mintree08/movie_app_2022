import React, { Component } from 'react'

class Cake extends Component {

  state = {
    price : 10000,
    salePrice : 0,
  };
  
  sale = () => {
    this.setState({
      salePrice : this.state.price * 0.7
    });
  }

  render() {
    return (
      <div>
        <h1>Cake 가격 : {this.state.price}</h1>
        <h2>할인가 : {this.state.salePrice}</h2>
        <button onClick={this.sale}>할인</button>
      </div>
    )
  }
}

export default Cake;
