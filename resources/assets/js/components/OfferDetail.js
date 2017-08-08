import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Card, CardActions, CardHeader, CardTitle, CardText } from 'material-ui/Card'
import { FormattedDate, FormattedTime } from 'react-intl'
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table'
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
    return (
      <div>
        {
          offer.id ?
            <div>
              <Card style={{ margin: 3 }}>
                <CardHeader
                  title={<span>
                    {offer.job ? offer.job.job : '-'}
                    {offer.work_time ? ' (' + offer.work_time.work_time + ') ' : ''}
                    {offer.cost ? <NumberFormat value={offer.cost} displayType={'text'} thousandSeparator={true} prefix={'Rp. '} /> : '-'}
                  </span>
                  }
                  subtitle={offer.member.name + ' di ' + offer.member.contact.address}
                  avatar={'/image/small/' + offer.member.avatar}
                />
                <CardText>
                  <Table
                    selectable={false}
                  >
                    <TableHeader
                      displaySelectAll={false}
                      adjustForCheckbox={false}
                    >
                      <TableRow>
                        <TableHeaderColumn colSpan="2" style={{textAlign: 'center'}}>
                          Informasi Penawaran
                        </TableHeaderColumn>
                      </TableRow>
                    </TableHeader>
                    <TableBody
                      displayRowCheckbox={false}
                    >
                      <TableRow>
                        <TableRowColumn style={{ textAlign: 'right', verticalAlign: 'top' }}>Jenis Pekerja</TableRowColumn>
                        <TableRowColumn><b>{offer.job ? offer.job.job : '-'}</b></TableRowColumn>
                      </TableRow>
                      <TableRow>
                        <TableRowColumn style={{ textAlign: 'right', verticalAlign: 'top' }}>Kelompok Waktu Kerja</TableRowColumn>
                        <TableRowColumn><b>{offer.work_time ? offer.work_time.work_time : ''}</b></TableRowColumn>
                      </TableRow>
                      <TableRow>
                        <TableRowColumn style={{ textAlign: 'right', verticalAlign: 'top' }}>Mulai Kerja</TableRowColumn>
                        <TableRowColumn>
                          {
                            offer.work_time ?
                              <b>
                                <FormattedDate value={offer.start_date} day="numeric" month="long" year="numeric"/>
                                {
                                  offer.work_time_id === 1 ?
                                    <span>
                                      &nbsp;
                                  <FormattedTime value={offer.start_date} />
                                    </span>
                                    : null
                                }
                              </b>
                              :
                              <b>-</b>
                          }
                        </TableRowColumn>
                      </TableRow>
                      <TableRow>
                        <TableRowColumn style={{ textAlign: 'right', verticalAlign: 'top' }}>Selesai Kerja</TableRowColumn>
                        <TableRowColumn>
                          {
                            offer.work_time ?
                              <b>
                                <FormattedDate value={offer.end_date} day="numeric" month="long" year="numeric"/>
                                {
                                  offer.work_time_id === 1 ?
                                    <span>
                                      &nbsp;
                                  <FormattedTime value={offer.end_date} />
                                    </span>
                                    : null
                                }
                              </b>
                              :
                              <b>-</b>
                          }
                        </TableRowColumn>
                      </TableRow>
                      <TableRow>
                        <TableRowColumn style={{ textAlign: 'right', verticalAlign: 'top' }}>Upah yang ditawarkan</TableRowColumn>
                        <TableRowColumn><b>{offer.cost ? <NumberFormat value={offer.cost} displayType={'text'} thousandSeparator={true} prefix={'Rp. '} /> : '-'}</b></TableRowColumn>
                      </TableRow>
                      <TableRow>
                        <TableRowColumn style={{ textAlign: 'right', verticalAlign: 'top' }}>List Pekerjaan</TableRowColumn>
                        <TableRowColumn>
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
                          }
                        </TableRowColumn>
                      </TableRow>
                      <TableRow>
                        <TableRowColumn style={{ textAlign: 'right', verticalAlign: 'top' }}>Informasi Penawar</TableRowColumn>
                        <TableRowColumn>
                          {
                            offer.contact ?
                              <Table
                                selectable={false}
                              >
                                <TableBody
                                  displayRowCheckbox={false}
                                >
                                  <TableRow>
                                    <TableRowColumn>Nama</TableRowColumn>
                                    <TableRowColumn><b><Link to={'/user/' + offer.member.id} >{offer.member.name}</Link></b></TableRowColumn>
                                  </TableRow>
                                  <TableRow>
                                    <TableRowColumn>Alamat</TableRowColumn>
                                    <TableRowColumn><b>{offer.contact.address}</b></TableRowColumn>
                                  </TableRow>
                                  <TableRow>
                                    <TableRowColumn>No. Telp</TableRowColumn>
                                    <TableRowColumn><b>{offer.contact.phone}</b></TableRowColumn>
                                  </TableRow>
                                </TableBody>
                              </Table>
                              :
                              <b>-</b>
                          }
                        </TableRowColumn>
                      </TableRow>
                      <TableRow>
                        <TableRowColumn style={{ textAlign: 'right', verticalAlign: 'top' }}>Catatan</TableRowColumn>
                        <TableRowColumn><b>{ offer.remark || '-' }</b></TableRowColumn>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardText>
                <Card className="col s12" style={{ marginTop: '10px', paddingBottom: '10px' }}>
                  <CardText>
                    <Table
                      selectable={false}
                    >
                      <TableHeader
                        displaySelectAll={false}
                        adjustForCheckbox={false}
                      >
                        <TableRow>
                          <TableHeaderColumn colSpan="2" style={{textAlign: 'center'}}>
                            Daftar ART
                          </TableHeaderColumn>
                        </TableRow>
                        <TableRow>
                          <TableHeaderColumn tooltip="ART">ART</TableHeaderColumn>
                          <TableHeaderColumn tooltip="Status">Status</TableHeaderColumn>
                        </TableRow>
                      </TableHeader>
                      <TableBody
                        displayRowCheckbox={false}
                      >
                        {
                          offer.offer_art ?
                            offer.offer_art.map((art, id) => {
                              return (
                                <TableRow key={id}>
                                  <TableRowColumn><Link to={'/art/' + art.art.id} >{art.art.name}</Link></TableRowColumn>
                                  <TableRowColumn>{art.status != 0 ? art.status != 1 ? 'Ditolak' : 'Diterima' : 'Pending'}</TableRowColumn>
                                </TableRow>
                              )
                            })
                            :
                            <TableRow>
                              <TableRowColumn>'Tidak ada art yg mendaftar.'</TableRowColumn>
                            </TableRow>                            
                        }
                      </TableBody>
                    </Table>
                  </CardText>
                </Card>
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