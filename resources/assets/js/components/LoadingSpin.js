import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CircularProgress from 'material-ui/CircularProgress'

const style = {
    marginLeft: '15px', 
    color: '#fff',
}

class LoadingSpin extends Component {
    constructor(props){
        super(props)
    }

    print(){
        console.log(this.props.show);
    }

    render() {
        return (
            <div className={ (this.props.show ? '' : 'hide ') + "loading"} >
                <div className="loadingSpin">
                    <CircularProgress />
                    <div style={ style } >Sedang membaca data...</div>
                </div>
            </div>
        )
    }
}

LoadingSpin.propTypes = {
    show: PropTypes.bool.isRequired,
}

export default LoadingSpin