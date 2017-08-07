import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Card, CardActions, CardHeader, CardTitle, CardText } from 'material-ui/Card'
import { GridList, GridTile } from 'material-ui/GridList'
import StarComponent from './StarComponent'
import Slider from 'react-slick'

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  gridList: {
    display: 'flex',
    flexWrap: 'nowrap',
    overflowX: 'auto',
  },
  gridListVertical: {
    overflowY: 'auto',
    flexWrap: 'wrap',
  },
  titleStyle: {
    color: 'rgb(255, 255, 255)',
  },
}

const settings = {
  autoplay: true,
  autoplaySpeed: 5000,
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 5,
  pauseOnHover: true,
  draggable: false,
}

const defaultImg = '/img/profile.png'

class Art extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.getArt()
  }

  artList(collection) {

    if (this.props.sortBy) {
      let sort = this.props.sortBy
      collection.sort(function (a, b) {
        return parseFloat(b[sort]) - parseFloat(a[sort])
      })
    }


    return collection.map((obj, idx) => {
      if (idx < this.props.maxItem || !this.props.maxItem) {
        const calculateAge = (birthday) => {
          birthday = new Date(birthday)
          let ageDifMs = Date.now() - birthday.getTime()
          let ageDate = new Date(ageDifMs)
          return Math.abs(ageDate.getUTCFullYear() - 1970)
        }

        let age = calculateAge(obj.born_date)
        return (
          <GridTile
            key={idx}
            title={<span>{obj.name}</span>}
            subtitle={<div><div><small>({age} thn)</small></div><div><StarComponent rate={obj.rate} /></div></div>}
            titleStyle={styles.titleStyle}
            containerElement={<Link to={'/art/' + obj.id} />}
            cols={this.props.isFeatured && idx == 0 ? 2 : 1}
            rows={this.props.isFeatured && idx == 0 ? 2 : 1}
          >
            <img src={(obj.avatar ? (this.props.isFeatured && idx == 0 ? "/image/large/" : "/image/medium/") + obj.avatar : null) || defaultImg} />
          </GridTile>
        )
      }
    })
  }

  artSlider(collection) {

    if (this.props.sortBy) {
      let sort = this.props.sortBy
      collection.sort(function (a, b) {
        return parseFloat(b[sort]) - parseFloat(a[sort])
      })
    }

    return collection.map((obj, idx) => {
      if (idx < this.props.maxItem || !this.props.maxItem) {
        const calculateAge = (birthday) => {
          birthday = new Date(birthday)
          let ageDifMs = Date.now() - birthday.getTime()
          let ageDate = new Date(ageDifMs)
          return Math.abs(ageDate.getUTCFullYear() - 1970)
        }

        let age = calculateAge(obj.born_date)
        return (
          <div key={idx}>
            <Link to={'/art/' + obj.id} style={{
              position: 'relative',
              display: 'block',
              marginLeft: 5,
              marginRight: 5,
              height: '100%',
              overflow: 'hidden',
            }}>
              <img src={(obj.avatar ? "/image/small/" + obj.avatar : null) || defaultImg} 
                style={{ 
                  width: '100%', 
                  transform: 'translateX(-50%)', 
                  position: 'relative', 
                  left: '50%' 
                }} />
              <div 
                style={{ 
                  position: 'absolute',
                  left: '0px',
                  right: '0px',
                  bottom: '0px',
                  height: '68px',
                  background: 'rgba(0, 0, 0, 0.4)',
                  display: 'flex',
                  alignItems: 'center',
                }}>
                <div
                  style={{
                    flexGrow: 1,
                    marginLeft: '16px',
                    marginRight: '0px',
                    color: 'rgb(255, 255, 255)',
                    overflow: 'hidden',
                  }}
                >
                  <span>{obj.name}</span>
                  <div><small>({age} thn)</small></div>
                  <div><StarComponent rate={obj.rate} /></div>
                </div>
              </div>
            </Link>
          </div>
        )
      }
    })
  }

  render() {
    const { art } = this.props
    return (
      <div>
        {
          art.length > 0 ?
            this.props.maxItem ?
              <div className="col s12" style={{ padding: 30 }}>
                <Slider {...settings} >
                  {this.artSlider(art)}
                </Slider>
              </div>
              :
              <div style={styles.root}>
                <GridList
                  style={this.props.maxItem && !this.props.isFeatured ? styles.gridList : styles.gridListVertical}
                  cols={this.props.maxItem ? this.props.isFeatured ? 2 : 2.2 : 5}
                  cellHeight={200}
                  padding={1}
                >
                  {this.artList(art)}
                </GridList>
              </div>
            :
            <small>Tidak ada ART ditemukan</small>
        }
      </div>
    )
  }
}

Art.propTypes = {
  art: PropTypes.array.isRequired,
  getArt: PropTypes.func.isRequired,
}

export default Art