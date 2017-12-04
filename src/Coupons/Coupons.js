import React from 'react'
import axios from 'axios'

class Coupons extends React.Component {
  state = {
    result: ''
  }

  sendForm = (e) => {
    e.preventDefault()
    const _this = this

    axios.get('http://scooterlabs.com/echo')
      .then(
        response => {_this.setState({result: 'Thank You! Your coupon is KBNFD'})},
        error => {_this.setState({result: 'Thank You! Your coupon is KBNFD'})}
      )
  }

  render = () => {
    return (
      <div>
        <h3>Send me a coupon</h3>
        <form onSubmit={this.sendForm}>
          <p>
            <input type="email" placeholder='Your email' required />
          </p>
          <p>
            <input type="submit" value="Send"/>
          </p>
        </form>
        <span>{this.state.result}</span>
      </div>
    )
  }
}

export default Coupons;