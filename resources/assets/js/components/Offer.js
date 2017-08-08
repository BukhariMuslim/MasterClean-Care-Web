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
            <Card style={{ margin: 3 }}>
              <CardHeader
                title={
                <Link to={"/offer/" + obj.id} >
                  {obj.job ? obj.job.job : '-'}
                  {obj.work_time ? ' (' + obj.work_time.work_time + ') ' : ''}
                  {obj.cost ? <NumberFormat value={obj.cost} displayType={'text'} thousandSeparator={true} prefix={'Rp. '} /> : '-'}
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
                        Informasi Penawaran
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
                      <TableRowColumn style={{ textAlign: 'right', verticalAlign: 'top' }}>Upah yang ditawarkan</TableRowColumn>
                      <TableRowColumn><b>{obj.cost ? <NumberFormat value={obj.cost} displayType={'text'} thousandSeparator={true} prefix={'Rp. '} /> : '-'}</b></TableRowColumn>
                    </TableRow>
                    <TableRow>
                      <TableRowColumn style={{ textAlign: 'right', verticalAlign: 'top' }}>Informasi Penawar</TableRowColumn>
                      <TableRowColumn>
                        {
                          obj.contact ?
                            <b><Link to={'/user/' + obj.member.id} >{obj.member.name}</Link></b>
                            :
                            <b>-</b>
                        }
                      </TableRowColumn>
                    </TableRow>
                    <TableRow>
                      <TableRowColumn style={{ textAlign: 'right', verticalAlign: 'top' }}>Catatan</TableRowColumn>
                      <TableRowColumn>
                        <b>
                          {
                            obj.remark.length > 200 ?
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
                  containerElement={<Link to={"/offer/" + obj.id} />}
                />
              </CardActions>
            </Card>
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
              cols={2}
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