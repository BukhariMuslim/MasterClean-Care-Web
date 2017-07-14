import React, { Component } from 'react'
import { Route, Redirect, NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
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
import Avatar from 'material-ui/Avatar'
import { simpleAuthentication } from '../containers/LoginContainer'
import Header from './Header'

const BgImg = '/img/bg.jpg'
const LockImg = '/img/lock.jpg'

class AppDrawer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            actAddTodo: 'ADD_TODO',
            actHome: 'HOME',
            open: false,
        }
    }

    onAddTodoItemClick(history, action) {
        if (action == this.state.actHome) {
            history.push('/')    
        }
    }

    handleToggle() { this.setState({open: !this.state.open}) }

    handleClose() { this.setState({open: false}) }

    render() {
        const isLoggedIn = this.props.user ? true : false
        return (
            <div>
                {/*iconElementLeft={<IconButton><ActionHome onClick={() => this.onAddTodoItemClick(this.props.history, this.state.actHome)}/></IconButton>}*/}
                <AppBar 
                    title="Master Clean & Care"
                    iconElementLeft={
                        <IconButton onTouchTap={() => this.handleToggle() } ><FontIcon className="material-icons">dehaze</FontIcon></IconButton>
                    }
                    style={{ position: "fixed" }}
                />
                <Drawer 
                    open={ this.state.open } 
                    docked={ false } 
                    onRequestChange={(open) => this.setState({open})}
                >
                    {
                        isLoggedIn ?
                            <Header username={ this.props.user.name } avatarImg={ LockImg } bgImg={ BgImg } />
                        :
                            <MenuItem primaryText="Login" 
                                containerElement={<Link to="/login" />}
                                rightIcon={<FontIcon className="material-icons">receipt</FontIcon>}
                                />
                    }
                    <Divider />
                    <MenuItem primaryText="Tambah Lowongan" 
                        rightIcon={<FontIcon className="material-icons">receipt</FontIcon>}
                        onClick={() => {
                            this.handleClose()
                            this.onAddTodoItemClick(this.props.history, this.state.actAddTodo)
                        }}/>
                    <Divider />
                    <LogoutContainer />
                </Drawer>
                <div className="container" style={{ paddingTop: "75px" }}>
                    {/*<Route exact path="/" component={Main} />*/}
                    {/*<Route path="/Add-Todo" component={AddTodoContainer} />*/}
                </div>
            </div>
        )
    }
}

export default AppDrawer