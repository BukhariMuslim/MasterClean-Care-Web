import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Card, CardActions, CardHeader, CardTitle, CardText } from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import NumberFormat from 'react-number-format'
import App from './App'

class OfferDetail extends Component {
  constructor(props) {
    super(props)

    this.state = {
      offer: {}
    }
  }

  componentDidMount() {
    this.props.getOffer(this.props.id, this)
  }

  offer_arts(arts) {
    return arts.map((art, id) => {
      return (
        <li key={id}>
          {art.art.name} ({art.status != 0 ? art.status != 1 ? 'Ditolak' : 'Diterima' : 'Pending'})
        </li>
      )
    })
  }

  render() {
    const { offer } = this.state;
    console.log(offer)
    return (
      <div>
        {
          offer.id ?
            <div>
              <Card>
                <CardTitle title={<h6>Penawaran dari <b>{offer.member.name}</b></h6>} />
                <CardText>
                  Membutuhkan Pekerja <b>{offer.work_time ? offer.work_time.work_time : ''}</b>:<br/>
                  <b>{offer.job ? offer.job.job : '-'}</b><br/>
                  Upah yang ditawarkan:<br/>
                  <b>{offer.cost ? <NumberFormat value={offer.cost} displayType={'text'} thousandSeparator={true} prefix={'Rp. '} /> : '-'}</b><br/>
                  Untuk melakukan:<br/>
                  {
                    offer.offer_art_task_list ?
                    <ul>
                      {
                        offer.offer_art_task_list.map((task, idx) => (
                          <li>- <b>{task.task}</b></li>
                        ))
                      }
                    </ul>
                    : 
                    <b>-</b>
                  }<br/>
                  Informasi Kontak:<br/>
                  {
                    offer.contact ?
                    <blockquote>
                      <b>{offer.contact.address}</b><br/>
                      <b>{offer.contact.phone}</b><br/>
                    </blockquote>
                    : 
                    <b>-</b>
                  }
                  Catatan<br/>
                  <b>
                  {
                    offer.remark.length > 200 ?
                      offer.remark.substring(0, 200) + '...'
                      :
                      offer.remark || '-'
                  }
                  </b>
                  <br/>
                </CardText>
              </Card>
              <Card className="col s12" style={{ marginTop: '10px', paddingBottom: '10px' }}>
                <CardText>
                  <h6><b>Daftar ART</b></h6>
                  {
                    offer.offer_art ?
                      this.offer_arts(offer.offer_art)
                      :
                      'Tidak ada komentar.'
                  }
                </CardText>
              </Card>
            </div>
            :
            <Card className="col s12" >
              <CardHeader title="Penawaran tidak ditemukan" />
            </Card>
        }
      </div>
    )
  }
}

OfferDetail.propTypes = {
  id: PropTypes.string.isRequired,
  getOffer: PropTypes.func.isRequired,
}

export default OfferDetail