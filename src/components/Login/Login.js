import React, { Component } from 'react'
import Axios from 'axios'
import { connect } from 'react-redux'
import { Button, Input } from 'antd'

class Login extends Component {
  constructor () {
    super()
    this.state = {}
  }

  authRequest = () => {
    Axios.post(`/api/verifyPassword`, {
      password: this.props.login.password
    }).then(resp => {
      console.log(resp.data)
      this.props.setAuthentication(resp.data)
    })
  }
  render () {
    console.log(this.props.login)
    return (
      <div>
        <h1>Sign In</h1>
        <Input
        className="logininput"
          placeholder='Enter Password...'
          onChange={e => this.props.setPassword(e)}
          type="password"
        />
        <Button onClick={this.authRequest}>Enter</Button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log('Login State:', state)
  return state
}
const mapDispatchToProps = dispatch => ({
  setAuthentication (val) {
    dispatch({
      type: 'USER_AUTH',
      payload: val
    })
  },
  setPassword (e) {
    dispatch({
      type: 'USER_PASSWORD',
      payload: e.target.value
    })
  }
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)
