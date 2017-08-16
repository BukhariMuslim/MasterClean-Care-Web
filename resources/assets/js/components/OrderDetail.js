import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Card, CardActions, CardHeader, CardTitle, CardText } from 'material-ui/Card'
import { ValidatorForm, TextValidator, SelectValidator, DateValidator } from 'react-material-ui-form-validator'
import { FormattedDate, FormattedTime } from 'react-intl'
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table'
import RaisedButton from 'material-ui/RaisedButton'
import NumberFormat from 'react-number-format'
import App from './App'
import StarComponent from './StarComponent'

class OrderDetail extends Component {
  constructor(props) {
    super(props)

    this.state = {
      order: {},
      initial_review_order: {
        order_id: 0,
        rate: 0,
        remark: '',
      },
    }

    this.onChangeHandler = this.onChangeHandler.bind(this)
  }

  componentDidMount() {
    this.props.getOrder(this.props.id, this)
  }

  starChange(value, state) {
    const oldOrder = this.state.order
    this.setState({
      order: Object.assign({}, oldOrder, {
        review_order: Object.assign({}, oldOrder.review_order, {
          [state]: value
        })
       })
    })
  }

  postHandler(e) {
    e.preventDefault()

    this.props.submitReview(
      this,
      {
        order_id: this.state.order.id,
        rate: this.state.order.review_order.rate,
        remark: this.state.order.review_order.remark,
      },
    )
  }

  onChangeHandler(e) {
    const target = e.target
    const value = target.value
    const name = target.name

    let oldOrder = this.state.order
    this.setState({ order: Object.assign({}, oldOrder, {
      review_order: Object.assign({}, oldOrder.review_order, {
        [name]: value,
      })
    }) })
  }

  onError(errors) {
    this.props.onUpdateSnack(true, "Telah terjadi " + errors.length + " kesalahan. Mohon periksa kembali form ini.")
  }

  render() {
    const { order } = this.state
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
                        <TableRowColumn style={{ textAlign: 'right', verticalAlign: 'top' }}>Status</TableRowColumn>
                        <TableRowColumn>
                          {
                            order.status == 0 ?
                            <b style={{ backgroundColor: '#FFEB3B', padding: '2px 5px', color: 'white' }}>Pending</b>
                            :
                            order.status == 1 ?
                            <b style={{ backgroundColor: '#64DD17', padding: '2px 5px', color: 'white' }}>Selesai</b>
                            :
                            <b style={{ backgroundColor: '#F44336', padding: '2px 5px', color: 'white' }}>Dibatalkan</b>
                          }
                        </TableRowColumn>
                      </TableRow>
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
                        <TableRowColumn style={{ textAlign: 'right', verticalAlign: 'top' }}>Honor yang ditawarkan</TableRowColumn>
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
                  order.review_order.id ?
                  <Card className="col s12" style={{ marginTop: '10px', paddingBottom: '10px' }}>
                    <CardHeader
                      title={ <Link to={`/member/${order.member.id}`} >{order.member.name}</Link> }
                      subtitle={ <StarComponent rate={order.review_order.rate} isShowRate={true} /> }
                      avatar={'/image/small/' + order.member.avatar}
                    />
                    <CardTitle title={ order.review_order.remark } />
                  </Card>
                  :
                  order.status == 1 && this.props.user && order.member.id == this.props.user.id ?
                  <ValidatorForm
                    ref="form"
                    onSubmit={(e) => this.postHandler(e)}
                    onError={errors => this.onError(errors)}>
                    <Card className="col s12" style={{ marginTop: '10px', paddingBottom: '10px' }}>
                      <CardText>
                        <h5>Review</h5>
                        <StarComponent rate={this.state.order.review_order.rate} onChange={(val) => this.starChange(val, 'rate')} isShowRate={true} isInput={true} />
                        <TextValidator
                          floatingLabelText="Review"
                          hintText="Review"
                          value={this.state.order.review_order.remark}
                          fullWidth={true}
                          name="remark"
                          onChange={this.onChangeHandler}
                          autoComplete={false}
                          multiLine={true}
                          rows={2}
                          rowsMax={4}
                          validators={['required']}
                          errorMessages={['Review dibutuhkan']}
                        />
                      </CardText>
                      <CardActions className="right-align">
                        <RaisedButton
                          primary={true}
                          label="Simpan"
                          type="submit" />
                      </CardActions>
                    </Card>
                  </ValidatorForm>
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