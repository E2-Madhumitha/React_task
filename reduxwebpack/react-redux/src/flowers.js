import React from 'react';
import Component from "react"
class FlowerShop extends Component
 {
  
  constructor(props) 
  {
    super(props);
    this.state = {
      roses: 100
    }
    this.buyRose = this.buyRose.bind(this);
  }
  
  buyRose()
   {
    this.setState({
      roses: this.state.roses + 1
    })
  }
  
  render()
   {
    return (
      <div>
        <button
          onClick={ this.buyRose }>
          Buy Rose
        </button>
        { this.state.roses }
      </div>
    )
  }
  
}
export default FlowerShop