import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Card, CardActions, CardHeader, CardTitle, CardText } from 'material-ui/Card'
import { GridList, GridTile } from 'material-ui/GridList'
import StarComponent from './StarComponent'

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
};

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
            subtitle={ <div><div><small>({age} thn)</small></div><div><StarComponent rate={obj.rate} /></div></div> }
            titleStyle={styles.titleStyle}
            containerElement={<Link to={"/art/" + obj.id} />}
            cols={ this.props.isFeatured && idx == 0 ? 2 : 1 }
            rows={ this.props.isFeatured && idx == 0 ? 2 : 1 }
          >
            <img src={obj.avatar || '/img/profile.png'} />
          </GridTile>
        )
      }
    })
  }

  render() {
    const { art } = this.props;
    return (
      <div style={styles.root}>
        {
          art.length > 0 ?
            <GridList 
              style={ this.props.maxItem && !this.props.isFeatured ? styles.gridList : styles.gridListVertical } 
              cols={ this.props.maxItem ? this.props.isFeatured ? 2 : 2.2 : 5}
              cellHeight={200}
              padding={1}
              >
              {this.artList(art)}
            </GridList>
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