import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Paper from 'material-ui/Paper'
import App from './App'
import ArtContainer from '../containers/ArtContainer'
import ArtDetailContainer from '../containers/ArtDetailContainer'

class ArtPage extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return (
            <App>
                <div className="row">
                    {
                        this.props.match.params.artId 
                        ?
                        <div>
                            <ArtDetailContainer id={ this.props.match.params.artId  }/>
                        </div>
                        :
                        <Paper className="col s12" zDepth={1} style={{ padding: "10px" }}>
                            <div>
                                <h5>Daftar ART</h5>
                                <ArtContainer />
                            </div>
                        </Paper>
                    } 
                </div>
            </App>
        )
    }
}

export default ArtPage
