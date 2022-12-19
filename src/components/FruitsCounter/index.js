// Write your code here

import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {MangoCount: 0, BananaCount: 0}

  onIncrementEatMango = () => {
    this.setState(prevState => ({MangoCount: prevState.MangoCount + 1}))
  }

  onIncrementEatBananas = () => {
    this.setState(prevState => ({BananaCount: prevState.BananaCount + 1}))
  }

  render() {
    const {MangoCount, BananaCount} = this.state
    return (
      <div className="container">
        <div className="card">
          <h1 className="heading">
            Bob ate <span className="MangoCount">{MangoCount}</span> mangoes
            <span className="BananaCount">{BananaCount} </span> bananas
          </h1>
          <div className="image-Container">
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
                className="images"
              />
              <div>
                <button
                  type="button"
                  className="button"
                  onClick={this.onIncrementEatMango}
                >
                  Eat Mango
                </button>
              </div>
            </div>
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
                className="images"
              />
              <div>
                <button
                  type="button"
                  className="button"
                  onClick={this.onIncrementEatBananas}
                >
                  Eat Banana
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
