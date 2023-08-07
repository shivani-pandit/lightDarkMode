import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {isModeOn: true}

  modeLight = () => {
    this.setState(preState => ({isModeOn: !preState.isModeOn}))
  }

  render() {
    const {isModeOn} = this.state
    const modeClassName = isModeOn ? 'dark-mode' : 'light-mode'
    const buttonText = isModeOn ? 'Light Mode' : 'Dark Mode'

    return (
      <div className="bg-container">
        <div className={`card ${modeClassName}`}>
          <h1 className="heading">Click To Change Mode</h1>
          <button type="button" className="bone" onClick={this.modeLight}>
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}
export default LightDarkMode
