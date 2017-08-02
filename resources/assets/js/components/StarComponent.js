import React, { Component } from 'react'
import PropTypes from 'prop-types'
import FontIcon from 'material-ui/FontIcon'

const iconStyles = {
  marginRight: 5,
  color: 'fff',
  fontSize: 18,
}

class StarComponent extends Component {
  constructor(props) {
    super(props)
  }

  starComponent(rate) {
    let comp = []
    let temp = rate
    for (let i = 0; i < 5; i++) {
      if (temp - 1 >= 0) {
        comp.push(<FontIcon key={'star'+i} className="material-icons" style={iconStyles}>star</FontIcon>)
      }
      else if (temp - 0.5 >= 0) {
        comp.push(<FontIcon key={'star'+i} className="material-icons" style={iconStyles}>star_half</FontIcon>)
      }
      else {
        comp.push(<FontIcon key={'star'+i} className="material-icons" style={iconStyles}>star_border</FontIcon>)
      }

      temp--
    }
    return comp
  }

  render() {
    const rate = this.props.rate ? Number.parseFloat(this.props.rate).toString() : '0';
    return (
      <span title={rate}>
        {this.starComponent(this.props.rate)} 
        <span className={this.props.isShowRate ? 'material-icons' : 'hide'} style={{ fontFamily: 'Roboto, sans-serif'}}>
          { rate }
        </span>
      </span>
    )
  }
}

StarComponent.propTypes = {
}

export default StarComponent