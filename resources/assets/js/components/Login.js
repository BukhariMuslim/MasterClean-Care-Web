import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import Paper from 'material-ui/Paper'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentClear from 'material-ui/svg-icons/content/clear'
import NotificationContainer from '../containers/NotificationContainer'
import LoadingSpinContainer from '../containers/LoadingSpinContainer'
import history from '../modules/history'
import RegisterOption from './RegisterOption'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
    }
  }

  loginHandler(e) {
    e.preventDefault()
    let locErrMessage = ''

    if (this.state.email == '' && this.state.password == '') {
      locErrMessage = 'Username & Password cannot be empty!'
    }
    else if (this.state.email == '') {
      locErrMessage = 'Username cannot be empty!'
    }
    else if (this.state.password == '') {
      locErrMessage = 'Password cannot be empty!'
    }

    if (locErrMessage != '') {
      this.props.onUpdateSnack(true, locErrMessage)
    }
    else {
      this.props.onLogin({
        email: this.state.email,
        password: this.state.password,
      })
    }

  }

  onChangeHandler(e) {
    const target = e.target
    const value = target.value
    const name = target.name

    this.setState({ [name]: value })
  }

  componentDidMount() {
    this.props.getUserLogin()
  }

  render() {
    return (
      <div>
        <div className="row" style={{ marginTop: '15px' }}>
          <FloatingActionButton
            containerElement={<Link to="/" />}
            mini={true}
            backgroundColor="#fff"
            iconStyle={{ fill: '#555' }}
            style={{
              margin: 0,
              top: -5,
              right: 20,
              bottom: 'auto',
              left: 'auto',
              position: 'relative',
            }}>
            <ContentClear />
          </FloatingActionButton>
          <div className="col m3 xl4 hide-on-small-only"></div>
          <Paper className="col s12 m6 xl4" zDepth={1} style={{ margin: "10px auto", padding: "10px" }}>
            <form onSubmit={(e) => this.loginHandler(e)}>
              <input type="hidden" name="_token" value={document.querySelector('meta[name="csrf-token"]').getAttribute('content')} />
              <div className="row">
                <div className="col s12">
                  <h4 className="center-align">Login</h4>
                </div>
                <div className="col s12">
                  <TextField
                    hintText="Email"
                    floatingLabelText="Email"
                    fullWidth={true}
                    name="email"
                    onChange={(e) => this.onChangeHandler(e)}
                    autoComplete={false}
                  />
                </div>
                <div className="col s12">
                  <TextField
                    hintText="Password"
                    floatingLabelText="Password"
                    type="password"
                    fullWidth={true}
                    name="password"
                    onChange={(e) => this.onChangeHandler(e)}
                  />
                </div>
                <div className="input-field col s12 m6">
                  <RegisterOption />
                </div>
                <div className="input-field col s12 m6">
                  <RaisedButton
                    label="Login"
                    primary={true}
                    fullWidth={true}
                    type="submit" />
                </div>
              </div>
            </form>
          </Paper>
        </div>
        <NotificationContainer />
        <LoadingSpinContainer />
      </div>
    )
  }
}

Login.propTypes = {
  onLogin: PropTypes.func.isRequired,
}

export default Login;