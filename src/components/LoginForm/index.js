import {Component} from 'react'

import './index.css'

class LoginForm extends Component {
  state = {
    userName: '',
    password: '',
  }

  onInputChange = event => {
    console.log(event.target.value)
    this.setState({userName: event.target.value})
  }

  onPasswordInput = event => {
    console.log(event.target.value)
    this.setState({password: event.target.value})
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const url = 'https://apis.ccbp.in/login'
    const {userName, password} = this.state
    const userDetails = {userName, password}
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const responce = await fetch(url, options)

    console.log(responce)
  }

  render() {
    const {userName, password} = this.state
    const websiteLogo =
      'https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png'

    return (
      <div className="login-form-container">
        <img
          alt="website login"
          className="login-image"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png "
        />
        <div className="login-container">
          <img className="website-logo " alt="website logo" src={websiteLogo} />
          <form onSubmit={this.onSubmitForm} className="form-conatiner">
            <label htmlFor="user-name">USERNAME</label>
            <input
              value={userName}
              onChange={this.onInputChange}
              className="input-box"
              placeholder="USERNAME"
              id="user-name"
            />
            <label htmlFor="user-password">PASSWORD</label>
            <input
              value={password}
              onChange={this.onPasswordInput}
              className="input-box"
              placeholder="PASSWORD"
              id="user-password"
              type="password"
            />
            <button className="submit-botton" type="submit">
              Login
            </button>
          </form>
        </div>
      </div>
    )
  }
}
export default LoginForm
