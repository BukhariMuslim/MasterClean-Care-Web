import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link, withRouter } from 'react-router-dom'
import Paper from 'material-ui/Paper'
import App from './App'

class NotFound extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <App>
                <div className="row">
                    <Paper className="col s12" zDepth={1} style={{ margin: "10px auto", padding: "10px" }}>
                        Maaf, halaman yang anda cari tidak tersedia. <Link to="/">Kembali</Link>
                    </Paper>
                </div>
            </App>
        )
    }
}

export default withRouter(NotFound)
