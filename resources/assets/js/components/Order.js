import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Card, CardActions, CardHeader, CardTitle, CardText } from 'material-ui/Card'
import { GridList, GridTile } from 'material-ui/GridList'
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
    marginTop: 5,
    overflowY: 'auto',
    flexWrap: 'wrap',
  },
  titleStyle: {
    color: 'rgb(255, 255, 255)',
  },
  innerTile: {
    border: '1px solid rgb(224, 224, 224)',
  }
}

class Order extends Component {
  constructor(props) {
    super(props)
  }

  orderList(collection) {
    if (this.props.sortBy) {
      let sort = this.props.sortBy
      collection.sort(function (a, b) {
        return parseFloat(b[sort]) - parseFloat(a[sort])
      })
    }

    return collection.map((obj, idx) => {
      return (
        <GridTile
          key={idx}
          cols={1}
        >
          <Card style={{ margin: 3 }}>
            <CardHeader
              title={
              <Link to={"/order/" + obj.id} >
                {obj.job ? obj.job.job : '-'}
                {obj.work_time ? ' (' + obj.work_time.work_time + ') ' : ''}
                {obj.cost ? <NumberFormat value={obj.cost} displayType={'text'} thousandSeparator={true} prefix={'Rp. '} /> : '-'}
                &nbsp;
                {
                  obj.status == 0 ?
                  <b style={{ backgroundColor: '#FFEB3B', padding: '2px 5px', color: 'white' }}>Pending</b>
                  :
                  obj.status == 1 ?
                  <b style={{ backgroundColor: '#2196F3', padding: '2px 5px', color: 'white' }}>Diterima</b>
                  :
                  obj.status == 2 ?
                  <b style={{ backgroundColor: '#F44336', padding: '2px 5px', color: 'white' }}>Dibatalkan</b>
                  :
                  obj.status == 3 ?
                  <b style={{ backgroundColor: '#64DD17', padding: '2px 5px', color: 'white' }}>Selesai</b>
                  :
                  obj.status == 4 ?
                  <b style={{ backgroundColor: '#F44336', padding: '2px 5px', color: 'white' }}>Ditolak</b>
                  :
                  <b style={{ backgroundColor: '#9E9E9E', padding: '2px 5px', color: 'white' }}>Bermasalah</b>
                }
              </Link>
              }
              subtitle={obj.member.name + ' di ' + obj.member.contact.address}
              avatar={'/image/small/' + obj.member.avatar}
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
                    <TableRowColumn><b>{obj.job ? obj.job.job : '-'}</b></TableRowColumn>
                  </TableRow>
                  <TableRow>
                    <TableRowColumn style={{ textAlign: 'right', verticalAlign: 'top' }}>Kelompok Waktu Kerja</TableRowColumn>
                    <TableRowColumn><b>{obj.work_time ? obj.work_time.work_time : ''}</b></TableRowColumn>
                  </TableRow>
                  <TableRow>
                    <TableRowColumn style={{ textAlign: 'right', verticalAlign: 'top' }}>Mulai Kerja</TableRowColumn>
                    <TableRowColumn>
                      {
                        obj.work_time ?
                          <b>
                            <FormattedDate value={obj.start_date} day="numeric" month="long" year="numeric" />
                            {
                              obj.work_time_id === 1 ?
                                <span>
                                  &nbsp;
                              <FormattedTime value={obj.start_date} />
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
                        obj.work_time ?
                          <b>
                            <FormattedDate value={obj.end_date} day="numeric" month="long" year="numeric"/>
                            {
                              obj.work_time_id === 1 ?
                                <span>
                                  &nbsp;
                              <FormattedTime value={obj.end_date} />
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
                    <TableRowColumn><b>{obj.cost ? <NumberFormat value={obj.cost} displayType={'text'} thousandSeparator={true} prefix={'Rp. '} /> : '-'}</b></TableRowColumn>
                  </TableRow>
                  <TableRow>
                    <TableRowColumn style={{ textAlign: 'right', verticalAlign: 'top' }}>Informasi ART</TableRowColumn>
                    <TableRowColumn>
                      {
                        <b><Link to={'/art/' + obj.art.id} >{obj.art.name}</Link></b>
                      }
                    </TableRowColumn>
                  </TableRow>
                  <TableRow>
                    <TableRowColumn style={{ textAlign: 'right', verticalAlign: 'top' }}>Informasi Pemesan</TableRowColumn>
                    <TableRowColumn>
                      {
                        <b><Link to={'/member/' + obj.member.id} >{obj.member.name}</Link></b>
                      }
                    </TableRowColumn>
                  </TableRow>
                  <TableRow>
                    <TableRowColumn style={{ textAlign: 'right', verticalAlign: 'top' }}>Catatan</TableRowColumn>
                    <TableRowColumn>
                      <b>
                        {
                          obj.remark && obj.remark.length > 200 ?
                            obj.remark.substring(0, 200) + '...'
                            :
                            obj.remark || '-'
                        }
                      </b>
                    </TableRowColumn>
                  </TableRow>
                </TableBody>
              </Table>
            </CardText>
            <CardActions className="right-align">
              <FlatButton
                label="Selengkapnya..."
                primary={true}
                containerElement={<Link to={"/order/" + obj.id} />}
              />
            </CardActions>
          </Card>
        </GridTile>
      )
    })
  }

  render() {
    const { orders } = this.props;
    return (
      <div>
        {
          orders && orders.length > 0 ?
            <GridList
              style={styles.gridListVertical}
              cols={2}
              padding={10}
              cellHeight={'auto'}
            >
              {this.orderList(orders)}
            </GridList>
            :
            this.props.maxItem ?
              <small>Tidak ada Pemesanan ditemukan.</small>
              :
              null
        }
      </div>
    )
  }
}

Order.propTypes = {
  orders: PropTypes.array.isRequired,
}

export default Order
