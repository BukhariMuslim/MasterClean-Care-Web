import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Card, CardActions, CardHeader, CardTitle, CardText } from 'material-ui/Card'
import { GridList, GridTile } from 'material-ui/GridList'
import FlatButton from 'material-ui/FlatButton'
import Divider from 'material-ui/Divider'
import NumberFormat from 'react-number-format'
import App from './App'

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

class Offer extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.getOffer()
  }

  offerList(collection) {
    return collection.map((obj, idx) => {
      if (!this.props.maxItem || idx < this.props.maxItem) {
        return (
          <GridTile
            key={idx}
            cols={1}
          >
            <Card>
              <CardTitle title={<h6><b>{obj.member.name}</b></h6>} />
              <CardText>
                Membutuhkan Pekerja <b>{obj.work_time ? obj.work_time.work_time : ''}</b>:<br/>
                <b>{obj.job ? obj.job.job : '-'}</b><br/>
                Upah yang ditawarkan:<br/>
                <b>{obj.cost ? <NumberFormat value={obj.cost} displayType={'text'} thousandSeparator={true} prefix={'Rp. '} /> : '-'}</b><br/>
                Untuk melakukan:<br/>
                {
                  obj.offer_art_task_list ?
                  <ul>
                    {
                      obj.offer_art_task_list.map((task, idx) => (
                        <li>- <b>{task.task}</b></li>
                      ))
                    }
                  </ul>
                  : 
                  <b>-</b>
                }<br/>
                Informasi Kontak:<br/>
                {
                  obj.contact ?
                  <ul>
                    <li><b>{obj.contact.address}</b></li>
                    <li><b>{obj.contact.phone}</b></li>
                  </ul>
                  : 
                  <b>-</b>
                }
                Catatan<br/>
                <b>
                {
                  obj.remark.length > 200 ?
                    obj.remark.substring(0, 200) + '...'
                    :
                    obj.remark || '-'
                }
                </b>
                <br/>
              </CardText>
              <CardActions className="right-align">
                <FlatButton
                  label="Selengkapnya..."
                  containerElement={<Link to={"/offer/" + obj.id} />}
                />
              </CardActions>
            </Card>
            <Divider />
          </GridTile>
        )
      }
    })
  }

  render() {
    const { offer } = this.props;
    return (
      <div>
        {
          offer.length > 0 ?
          <GridList
              style={styles.gridListVertical}
              cols={this.props.maxItem ? 2 : 1}
              padding={10}
              cellHeight={'auto'}
            >
              {this.offerList(offer)}
            </GridList>
            :
            <small>Tidak ada Penawaran ditemukan</small>
        }
      </div>
    )
  }
}

Offer.propTypes = {
  offer: PropTypes.array.isRequired,
  getOffer: PropTypes.func.isRequired,
}

export default Offer