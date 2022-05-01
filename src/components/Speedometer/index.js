// Write your code here
import {Component} from 'react'

import './index.css'

class SpeedMeter extends Component {
  state = {speed: 0}

  increment = () => {
    this.setState(prevState =>
      prevState.speed >= 200 ? 200 : {speed: prevState.speed + 10},
    )
  }

  decrement = () => {
    this.setState(prevState =>
      prevState.speed <= 0 ? 0 : {speed: prevState.speed - 10},
    )
  }

  render() {
    const {speed} = this.state

    return (
      <div className="container">
        <h1>SPEEDOMETER</h1>
        <img
          className="image1"
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
        />
        <h1>Speed is {speed}mph</h1>
        <p>Min Limit is 0mph, Max Limit is 200mph</p>
        <button onClick={this.increment} type="button">
          Accelerate
        </button>
        <button onClick={this.decrement} type="button">
          Apply Brake
        </button>
      </div>
    )
  }
}

export default SpeedMeter
