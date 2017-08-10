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
import StarComponent from './StarComponent'

class OrderDetail extends Component {
  constructor(props) {
    super(props)

    this.state = {
      order: {}
    }
  }

  componentDidMount() {
    this.props.getOrder(this.props.id, this)
  }

  render() {
    const { order } = this.state;
    return (
      <div>
        {
          order.id ?
            <div>
              <Card style={{ margin: 3 }}>
                <CardHeader
                  title={<span>
                    {order.job ? order.job.job : '-'}
                    {order.work_time ? ' (' + order.work_time.work_time + ') ' : ''}
                    {order.cost ? <NumberFormat value={order.cost} displayType={'text'} thousandSeparator={true} prefix={'Rp. '} /> : '-'}
                  </span>
                  }
                  subtitle={order.member.name + ' di ' + order.member.contact.address}
                  avatar={'/image/small/' + order.member.avatar}
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
                          Informasi Pemesanan
                        </TableHeaderColumn>
                      </TableRow>
                    </TableHeader>
                    <TableBody
                      displayRowCheckbox={false}
                    >
                      <TableRow>
                        <TableRowColumn style={{ textAlign: 'right', verticalAlign: 'top' }}>Jenis Pekerja</TableRowColumn>
                        <TableRowColumn><b>{order.job ? order.job.job : '-'}</b></TableRowColumn>
                      </TableRow>
                      <TableRow>
                        <TableRowColumn style={{ textAlign: 'right', verticalAlign: 'top' }}>Kelompok Waktu Kerja</TableRowColumn>
                        <TableRowColumn><b>{order.work_time ? order.work_time.work_time : ''}</b></TableRowColumn>
                      </TableRow>
                      <TableRow>
                        <TableRowColumn style={{ textAlign: 'right', verticalAlign: 'top' }}>Mulai Kerja</TableRowColumn>
                        <TableRowColumn>
                          {
                            order.work_time ?
                              <b>
                                <FormattedDate value={order.start_date} day="numeric" month="long" year="numeric"/>
                                {
                                  order.work_time_id === 1 ?
                                    <span>
                                      &nbsp;
                                  <FormattedTime value={order.start_date} />
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
                            order.work_time ?
                              <b>
                                <FormattedDate value={order.end_date} day="numeric" month="long" year="numeric"/>
                                {
                                  order.work_time_id === 1 ?
                                    <span>
                                      &nbsp;
                                  <FormattedTime value={order.end_date} />
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
                        <TableRowColumn><b>{order.cost ? <NumberFormat value={order.cost} displayType={'text'} thousandSeparator={true} prefix={'Rp. '} /> : '-'}</b></TableRowColumn>
                      </TableRow>
                      <TableRow>
                        <TableRowColumn style={{ textAlign: 'right', verticalAlign: 'top' }}>List Pekerjaan</TableRowColumn>
                        <TableRowColumn>
                          {
                            order.order_art_task_list ?
                              <Table
                                  selectable={false}
                                >
                                <TableBody
                                  displayRowCheckbox={false}
                                >
                                <TableHeader
                                  displaySelectAll={false}
                                  adjustForCheckbox={false}
                                >
                                  <TableRow>
                                    <TableHeaderColumn tooltip="Detail Pekerjaan">Detail Pekerjaan</TableHeaderColumn>
                                    <TableHeaderColumn tooltip="Status">Status</TableHeaderColumn>
                                  </TableRow>
                                </TableHeader>
                                  {
                                    order.order_art_task_list.map((task, idx) => (
                                      <TableRow>
                                        <TableRowColumn>{task.task}</TableRowColumn>
                                        <TableRowColumn>
                                          <FontIcon className="material-icons" style={{ color: task.status ? '#64DD17' : '#F57F17' }}>
                                            {
                                              task.status?
                                              'check_box'
                                              :
                                              'indeterminate_check_box'
                                            }
                                          </FontIcon>
                                          </TableRowColumn>
                                      </TableRow>
                                    ))
                                  }
                                </TableBody>
                              </Table>
                              :
                              <b>-</b>
                          }
                        </TableRowColumn>
                      </TableRow>
                      <TableRow>
                        <TableRowColumn style={{ textAlign: 'right', verticalAlign: 'top' }}>Informasi ART</TableRowColumn>
                        <TableRowColumn>
                          {
                            <b><Link to={'/art/' + order.art.id} >{order.art.name}</Link></b>
                          }
                        </TableRowColumn>
                      </TableRow>
                      <TableRow>
                        <TableRowColumn style={{ textAlign: 'right', verticalAlign: 'top' }}>Informasi Pemesan</TableRowColumn>
                        <TableRowColumn>
                          {
                            order.contact ?
                              <Table
                                selectable={false}
                              >
                                <TableBody
                                  displayRowCheckbox={false}
                                >
                                  <TableRow>
                                    <TableRowColumn>Nama</TableRowColumn>
                                    <TableRowColumn><b><Link to={'/member/' + order.member.id} >{order.member.name}</Link></b></TableRowColumn>
                                  </TableRow>
                                  <TableRow>
                                    <TableRowColumn>Alamat</TableRowColumn>
                                    <TableRowColumn><b>{order.contact.address}</b></TableRowColumn>
                                  </TableRow>
                                  <TableRow>
                                    <TableRowColumn>No. Telp</TableRowColumn>
                                    <TableRowColumn><b>{order.contact.phone}</b></TableRowColumn>
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
                        <TableRowColumn><b>{ order.remark || '-' }</b></TableRowColumn>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardText>
                {
                  order.orderReview ?
                  <Card className="col s12" style={{ marginTop: '10px', paddingBottom: '10px' }}>
                    <CardTitle title="Review" subtitle={ <StarComponent rate={order.orderReview.rate} isShowRate={true} /> }/>
                    <CardText>
                      { order.orderReview.remark }
                    </CardText>
                  </Card>
                  :
                  <Card className="col s12" style={{ marginTop: '10px', paddingBottom: '10px' }}>
                    <CardText>
                      <i>Belum Ada review</i>
                    </CardText>
                  </Card>                  
                }
              </Card>
            </div>
            :
            <Card className="col s12" >
              <CardHeader title="Pemesanan tidak ditemukan" />
            </Card>
        }
      </div>
    )
  }
}

OrderDetail.propTypes = {
  id: PropTypes.string.isRequired,
  getOrder: PropTypes.func.isRequired,
}

export default OrderDetail