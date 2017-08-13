import React, { Component } from 'react'
import { Route, Redirect, NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Link, withRouter } from 'react-router-dom'
// import AddTodoContainer from '../containers/AddTodoContainer'
// import Main from './Main'
import LogoutContainer from '../containers/LogoutContainer'
import AppBar from 'material-ui/AppBar'
import IconMenu from 'material-ui/IconMenu'
import IconButton from 'material-ui/IconButton'
import MenuItem from 'material-ui/MenuItem'
import Divider from 'material-ui/Divider'
import ActionHome from 'material-ui/svg-icons/action/home'
import FontIcon from 'material-ui/FontIcon'
import Drawer from 'material-ui/Drawer'
import { simpleAuthentication } from '../containers/LoginContainer'
import Header from './Header'

const BgImg = '/img/bg.jpg'
const LockImg = '/img/lock.jpg'
const LogoImg = '/img/logo.png'

class AppDrawer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
    }
  }

  // onAddTodoItemClick(link) {
  //     this.props.history.push(link)    
  // }

  handleToggle() { this.setState({ open: !this.state.open }) }

  handleClose() { this.setState({ open: false }) }

  menuList(collection) {
    return collection.map((obj, idx) => {
      let role_id = 0
      if (this.props.user) {
        role_id = this.props.user.role_id
      }

      if (obj.allowUser.indexOf(role_id) != -1) {
        return (
          <MenuItem primaryText={obj.label}
            key={obj.id}
            containerElement={<Link to={obj.link} />}
            onClick={() => {
              this.handleClose()
            }}
            rightIcon={<FontIcon className="material-icons">{obj.iconLabel}</FontIcon>}
          />
        )
      }
    })
  }

  componentDidMount() {
    if (!this.props.user) {
      this.props.getUserLogin()
    }
  }

  render() {
    const isLoggedIn = this.props.user ? true : false
    return (
      <div>
        {/*iconElementLeft={<IconButton><ActionHome onClick={() => this.onAddTodoItemClick(this.props.history, this.state.actHome)}/></IconButton>}*/}
        <AppBar
          title={
            <div>
              <Link to="/" style={{ color: 'white'}}>
                <img src={LogoImg} style={{height: 32, width: 'auto', verticalAlign: 'middle', marginRight: 10 }} alt="Master Clean &amp; Care"/>
                <span style={{ verticalAlign: 'middle' }}>
                  Master Clean &amp; Care
                </span>
              </Link>
            </div>
          }
          iconElementLeft={
            <IconButton onTouchTap={() => this.handleToggle()} ><FontIcon className="material-icons">dehaze</FontIcon></IconButton>
          }
          style={{ position: "fixed" }}
        />
        <Drawer
          open={this.state.open}
          docked={false}
          onRequestChange={(open) => this.setState({ open })}
        >
          {
            isLoggedIn ?
              <Header username={this.props.user.name} avatarImg={(this.props.user.avatar ? '/image/small/' + this.props.user.avatar : '') || LockImg} bgImg={BgImg} />
              :
              <MenuItem primaryText="Login"
                containerElement={<Link to="/login" />}
                rightIcon={<FontIcon className="material-icons">lock</FontIcon>}
              />
          }
          <Divider />
          {/* containerElement={<Link to="/article" />}                      */}
          {this.menuList(this.props.MenuCollection)}
          <Divider />
          {
            isLoggedIn ?
              <LogoutContainer parent={this} onTouchTap={() => this.handleToggle()} />
              :
              null
          }
        </Drawer>
      </div>
    )
  }
}

export default withRouter(AppDrawer)