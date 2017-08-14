import React, { Component } from 'react'
import PropTypes from 'prop-types'
import FontIcon from 'material-ui/FontIcon'
import IconButton from 'material-ui/IconButton'

const iconStyles = {
  marginRight: 5,
  fontSize: 18,
}

const buttonStyles = {
  width: 34,
  height: 34,
  padding: 5,
}

const iconButtonStyles = {
  width: 24,
  height: 24,
  color: '#FFC107',
}

class StarComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      rate: 0,
    }
  }

  componentDidMount() {
    this.setState({
      rate: this.props.rate,
    })
  }

  onStarClick(e, value) {
    if (this.props.onChange) {
      this.props.onChange(value)
    }
    this.setState({
      rate: this.props.rate,
    })
  }

  onStarMouseEnter(e, value) {
    this.setState({
      rate: value,
    })
  }

  onStarMouseLeave(e) {
    this.setState({
      rate: this.props.rate,
    })
  }

  starComponent(rate) {
    let comp = []
    let temp = rate
    for (let i = 0; i < 5; i++) {
      if (temp - 1 >= 0) {
        comp.push(<FontIcon key={'star'+i} className="material-icons" style={iconStyles} >star</FontIcon>)
      }
      else if (temp - 0.5 >= 0) {
        comp.push(<FontIcon key={'star'+i} className="material-icons" style={iconStyles} >star_half</FontIcon>)
      }
      else {
        comp.push(<FontIcon key={'star'+i} className="material-icons" style={iconStyles} >star_border</FontIcon>)
      }

      temp--
    }
    return comp
  }

  selectStarComponent(rate) {
    let comp = []
    let temp = rate
    for (let i = 0; i < 5; i++) {
      if (temp - 1 >= 0) {
        comp.push(
          <IconButton 
            key={'star'+i}
            tooltip={i + 1} 
            iconClassName="material-icons" 
            touch={true} 
            style={buttonStyles} 
            iconStyle={iconButtonStyles} 
            hoveredStyle={{ color: 'FFD740' }}
            onClick={ (e) => this.onStarClick(e, i + 1) } 
            onMouseEnter={ (e) => this.onStarMouseEnter(e, i + 1) } 
            onMouseLeave={ (e) => this.onStarMouseLeave(e) }
          >
            star
          </IconButton>
        )
      }
      else if (temp - 0.5 >= 0) {
        comp.push(
          <IconButton 
            key={'star'+i}
            tooltip={i + 1} 
            iconClassName="material-icons" 
            touch={true} 
            style={buttonStyles} 
            iconStyle={iconButtonStyles} 
            hoveredStyle={{ color: 'FFD740' }}
            onClick={ (e) => this.onStarClick(e, i + 1) } 
            onMouseEnter={ (e) => this.onStarMouseEnter(e, i + 1) } 
            onMouseLeave={ (e) => this.onStarMouseLeave(e) }
          >
            star_half
          </IconButton>
        )
      }
      else {
        comp.push(
          <IconButton 
            key={'star'+i}
            tooltip={i + 1} 
            iconClassName="material-icons" 
            touch={true} 
            style={buttonStyles} 
            iconStyle={iconButtonStyles} 
            hoveredStyle={{ color: 'FFD740' }}
            onClick={ (e) => this.onStarClick(e, i + 1) } 
            onMouseEnter={ (e) => this.onStarMouseEnter(e, i + 1) } 
            onMouseLeave={ (e) => this.onStarMouseLeave(e) }
          >
            star_border
          </IconButton>
        )
      }

      temp--
    }
    return comp
  }

  render() {
    const rate = this.props.rate ? Number.parseFloat(this.props.rate).toString() : '0';
    return (
      <span>
        {
          this.props.isInput ?
          <span>
            {this.selectStarComponent(this.state.rate)}
          </span>
          :
          <span title={rate}>
            {this.starComponent(this.state.rate)} 
            <span className={this.props.isShowRate ? 'material-icons' : 'hide'} style={{ fontFamily: 'Roboto, sans-serif'}}>
              { rate }
            </span>
          </span>
        }
        
      </span>
    )
  }
}

StarComponent.propTypes = {
}

export default StarComponent