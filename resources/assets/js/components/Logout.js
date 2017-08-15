import React, { Component } from 'react'
import PropTypes from 'prop-types'
import MenuItem from 'material-ui/MenuItem'
import FontIcon from 'material-ui/FontIcon'
import FlatButton from 'material-ui/FlatButton'
import Dialog from 'material-ui/Dialog'

class Logout extends Component {
    constructor(props) {
        super(props)

        this.state = {
            openModal: false
        }
    }

    handleOpen() {
        this.setState({openModal: true});
    }

    handleClose(confirmation) {
        this.setState({openModal: false});
        if (confirmation) {
            this.props.onClick()
        }
    }

    render() {
        const actions = [
            <FlatButton
                label="Tidak"
                onTouchTap={() => this.handleClose()}
            />,
            <FlatButton
                label="Ya"
                primary={true}
                onTouchTap={() => this.handleClose(true)}
            />
        ]

        return (
            <div>
                <MenuItem 
                    primaryText="Logout" 
                    rightIcon={<FontIcon className="material-icons">power_settings_new</FontIcon>}
                    onClick={ () => this.handleOpen() }/>
                <Dialog
                        title="Konfirmasi Logout"
                        actions={ actions }
                        modal={ true }
                        open={ this.state.openModal }
                    >
                    Logout?
                </Dialog>
            </div>
        )

    }
}

{/*<a href="#" className="waves-effect waves-light btn red" onClick={(e) => {
        e.preventDefault()
        onClick()
    }}>Logout
    </a>*/}

Logout.propTypes = {
    onClick: PropTypes.func.isRequired
}

export default Logout