import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Card, CardActions, CardHeader, CardTitle, CardText, CardMedia } from 'material-ui/Card'
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
import Paper from 'material-ui/Paper'
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'
import Checkbox from 'material-ui/Checkbox'
import Divider from 'material-ui/Divider'
import SelectField from 'material-ui/SelectField'
import DatePicker from 'material-ui/DatePicker'
import TextField from 'material-ui/TextField'
import MenuItem from 'material-ui/MenuItem'
import StarComponent from './StarComponent'
import NumberFormat from 'react-number-format'

const fieldStyle = {
  paddingLeft: 10,
  paddingRight: 10,
}

const disabledStyle = {
  color: '#64DD17',
}

const disabledInputStyle = {
  color: '#64DD17',
  textAlign: 'right',
}

const DateTimeFormat = global.Intl.DateTimeFormat

class ArtDetail extends Component {
  constructor(props) {
    super(props)

    this.state = {
      languageItem: [],
      jobItem: [],
      workTimeItem: [],
      additionalInfoItem: [],
      cityItem: [],
      art: {
        email: '',
        password: '',
        re_password: '',
        name: '',
        gender: null,
        born_place: '',
        born_date: null,
        contact: {
          phone: '',
          city: '',
          address: '',
          location: '',
        },
        religion: null,
        race: '',
        description: '',
        user_type: 2,
        status: 0,
        user_wallet: {
          amt: 0,
        },
        user_language: [],
        user_job: [],
        user_work_time: [],
        user_additional_info: [],
        user_document: [],
        user_languageErrorText: '',
        user_jobErrorText: '',
        user_work_timeErrorText: '',
        user_documentErrorText: '',
      },
      isEdit: false,
    }

    this.baseState = this.state
    this.onChangeHandler = this.onChangeHandler.bind(this)
  }

  onSelectFieldChangeHandler(name) {
    const form = this
    return function (event, index, value) {
      let art = form.state.art
      form.setState({ art: Object.assign({}, art, { [name]: value }) })
    }
  }

  onChangeHandler(e) {
    const target = e.target
    const value = target.value
    const name = target.name

    let art = this.state.art
    this.setState({ art: Object.assign({}, art, { [name]: value }) })
  }

  onChangeDateHandler(name) {
    const form = this
    return function (event, date) {
      let art = form.state.art
      form.setState({ art: Object.assign({}, art, { [name]: date }) })
    }
  }

  loadInitialData() {
    this.props.getPlace(this, 'cityItem')

    this.props.getLanguage(this, 'languageItem')

    this.props.getJob(this, 'jobItem')

    this.props.getWorkTime(this, 'workTimeItem')

    this.props.getAdditionalInfo(this, 'additionalInfoItem')
  }

  componentDidMount() {
    this.props.getArt(this.props.id, this)
  }

  onCheckHandler(type, name, isNeedTextBox) {
    const form = this
    return function (event, checked) {
      const target = event.target
      const value = target.value
      let old = form.state.art[type]
      const idx = old.findIndex(x => x[name] === value)
      let art = form.state.art

      if (!isNeedTextBox) {
        if (checked && idx === -1) {
          if (form.state.art[type + 'ErrorText']) {
            form.setState({
              art: Object.assign({}, art, {
                [type + 'ErrorText']: ''
              })
            })
          }
          old.push({
            [name]: value
          })
        }
        else if (idx > -1) {
          old.splice(idx, 1)
        }
      }
      else {
        if (checked && idx === -1) {
          if (form.state.art[type + 'ErrorText']) {
            form.setState({
              art: Object.assign({}, art, {
                [type + 'ErrorText']: ''
              })
            })
          }
          old.push({
            work_time_id: target.value,
            cost: 0,
          })
        }
        else if (idx > -1) {
          old.splice(idx, 1)
        }
      }
      form.setState({
        art: Object.assign({}, art, {
          [type]: old
        })
      })
    }
  }

  errorText(type) {
    const text = this.state.art[type]
    if (text) {
      const style = {
        fontSize: '12px',
        color: red500,
      }

      return (
        <div style={style}>
          {text}
        </div>
      )
    }

    return null
  }

  checkItems(type, collection, isNeedTextBox) {
    if (collection && collection.length > 0) {
      return collection.map((obj, idx) => {
        const values = this.state.art[type]
        let curIdx = -1
        let costEnabled = false
        let name = ''
        if (type === 'user_language') {
          curIdx = values.findIndex(x => x.language_id == obj.id)
          name = 'language_id'
        }
        else if (type === 'user_job') {
          curIdx = values.findIndex(x => x.job_id == obj.id)
          name = 'job_id'
        }
        else if (type === 'user_work_time') {
          curIdx = values.findIndex(x => x.work_time_id == obj.id)
          costEnabled = curIdx > -1
          name = 'work_time_id'
        }
        else if (type === 'user_additional_info') {
          curIdx = values.findIndex(x => x.info_id == obj.id)
          name = 'info_id'
        }
        const checked = curIdx > -1
        return (
          <div key={obj.id} className="col s12 valign-wrapper">
            <div className={"col" + (isNeedTextBox ? " s6" : " s12")}>
              <Checkbox
                labelStyle={disabledStyle}
                checked={checked}
                value={obj.id}
                disabled={!this.state.isEdit}
                name={name}
                label={obj.language || obj.job || obj.work_time || obj.info}
                onCheck={this.onCheckHandler(type, name, isNeedTextBox)}
              />
            </div>
            {
              isNeedTextBox ?
                <div className="col s6">
                  <NumberFormat
                    hintText={'Gaji ' + obj.work_time}
                    inputStyle={disabledInputStyle}
                    thousandSeparator={true}
                    prefix={'Rp. '}
                    value={costEnabled ? values[curIdx].cost : ''}
                    disabled={!costEnabled || !this.state.isEdit}
                    underlineShow={this.state.isEdit}
                    fullWidth={true}
                    name="user_work_time"
                    onChange={(e) => this.onChangeTextHandler(e, curIdx)}
                    validators={[isNeedTextBox ? ('required') : '']}
                    errorMessages={[isNeedTextBox ? ('Gaji dibutuhkan') : '']}
                    customInput={TextValidator}
                    />
                </div>
                :
                null
            }
          </div>
        )
      })
    }

  }

  resetForm() {
    this.setState(this.baseState)
    this.loadInitialData()
  }

  getReview(reviews) {
    const GetFormattedDate = date => {
      let dt = new Date(date)
      let mm = dt.getMonth() + 1
      let dd = dt.getDate()

      return [
        (dd > 9 ? '' : '0') + dd,
        (mm > 9 ? '' : '0') + mm,
        dt.getFullYear()
      ].join('/')
    }

    return reviews.map((review, id) => {
      return (
        <Card className="col s12" style={id > 0 ? { marginTop: '10px' } : {}} key={id}>
          <CardHeader
            title={comment.user_id.name}
            subtitle={GetFormattedDate(comment.created_at)}
            avatar={comment.user_id.avatar}
          />
          <CardText>
            {comment.comment}
          </CardText>
        </Card>
      )
    })
  }

  menuItems(collection, values) {
    if (collection && collection.length > 0) {
      return collection.map((obj, idx) => (
        <MenuItem
          key={obj.id}
          value={obj.id}
          primaryText={obj.name}
        />
      ))
    }
  }

  postHandler(e) {
    e.preventDefault()
    let isValid = true
    if (this.state.art.user_language.length <= 0) {
      isValid = false
      this.setState({
        user_languageErrorText: "Pilih minimal 1 Bahasa yang dikuasai.",
      })
    }
    if (this.state.art.user_job.length <= 0) {
      isValid = false
      this.setState({
        user_jobErrorText: "Pilih minimal 1 Profesi.",
      })
    }
    if (this.state.art.user_work_time.length <= 0) {
      isValid = false
      this.setState({
        user_work_timeErrorText: "Pilih minimal 1 Waktu Kerja.",
      })
    }

    if (isValid) {
      this.props.onRegister(
        this,
        {
          name: this.state.art.name,
          email: this.state.art.email,
          password: this.state.art.password,
          gender: this.state.art.gender,
          born_place: this.state.art.born_place,
          born_date: this.state.art.born_date,
          contact: this.state.art.contact,
          religion: this.state.art.religion,
          race: this.state.art.race,
          user_type: this.state.art.user_type,
          status: this.state.art.status,
          user_wallet: this.state.art.user_wallet,
          user_language: this.state.art.user_language,
          user_job: this.state.art.user_job,
          user_work_time: this.state.art.user_work_time,
          user_additional_info: this.state.art.user_additional_info,
          user_document: this.state.art.user_document,
        }
      )
    }
  }

  onError(errors) {
    this.props.onUpdateSnack(true, "Telah terjadi " + errors.length + " kesalahan. Mohon periksa kembali form ini.")
  }

  render() {
    const calculateAge = (birthday) => {
      birthday = new Date(birthday)
      let ageDifMs = Date.now() - birthday.getTime()
      let ageDate = new Date(ageDifMs)
      return Math.abs(ageDate.getUTCFullYear() - 1970)
    }
    let age = calculateAge(this.state.art.born_date)
    return (
      <div>
        {
          this.state.art && this.state.art.name ?
            <ValidatorForm
              ref="form"
              onSubmit={(e) => this.postHandler(e)}
              onError={errors => this.onError(errors)}>
              <Card zDepth={0} >
                <CardText>
                  <CardMedia
                    className="col s12 m3"
                  >
                    <img src={'/image/medium/' + this.state.art.avatar || 'image/medium/users/profile.png'} alt="" />
                  </CardMedia>
                  <div className="col s12 m9" >
                    <div className="row">
                      <div className="col s12">
                        <Paper zDepth={0}>
                          <div className="col s12">
                            <h5>{this.state.art.name || ''} <small>({age} thn)</small></h5>
                          </div>
                          <div className="col s12">
                              <StarComponent rate={this.state.art.rate} isShowRate={true} />
                          </div>
                          <div className="col s12">
                            <small>
                              { this.state.art.description || ''}
                            </small>
                          </div>
                          <div className="col s12">
                            <Table
                              selectable={false}
                            >
                              <TableHeader
                                displaySelectAll={false}
                                adjustForCheckbox={false}
                              >
                                <TableRow>
                                  <TableHeaderColumn colSpan="2" style={{textAlign: 'center'}}>
                                    Informasi ART
                                  </TableHeaderColumn>
                                </TableRow>
                              </TableHeader>
                              <TableBody
                                displayRowCheckbox={false}
                              >
                                <TableRow>
                                  <TableRowColumn style={{ textAlign: 'right', verticalAlign: 'top' , color: '#888' }}>Nama</TableRowColumn>
                                  <TableRowColumn className="bold" >{this.state.art.name}</TableRowColumn>
                                </TableRow>
                                <TableRow>
                                  <TableRowColumn style={{ textAlign: 'right', verticalAlign: 'top' , color: '#888' }}>Gender</TableRowColumn>
                                  <TableRowColumn className="bold" >{this.state.art.gender == 1 ? 'Pria' : 'Wanita' }</TableRowColumn>
                                </TableRow>
                                <TableRow>
                                  <TableRowColumn style={{ textAlign: 'right', verticalAlign: 'top' , color: '#888' }}>Tempat / Tanggal Lahir</TableRowColumn>
                                  <TableRowColumn className="bold" >
                                    {this.state.art.born_place || ''}, <FormattedDate value={this.state.art.born_date} day="numeric" month="long" year="numeric" />
                                  </TableRowColumn>
                                </TableRow>
                                <TableRow>
                                  <TableRowColumn style={{ textAlign: 'right', verticalAlign: 'top' , color: '#888' }}>Kota</TableRowColumn>
                                  <TableRowColumn className="bold" >{this.state.art.contact ? this.state.art.contact.city.name : ''}</TableRowColumn>
                                </TableRow>
                                <TableRow>
                                  <TableRowColumn style={{ textAlign: 'right', verticalAlign: 'top' , color: '#888' }}>Alamat</TableRowColumn>
                                  <TableRowColumn className="bold" >{this.state.art.contact ? this.state.art.contact.address : ''}</TableRowColumn>
                                </TableRow>
                                <TableRow>
                                  <TableRowColumn style={{ textAlign: 'right', verticalAlign: 'top' , color: '#888' }}>Agama</TableRowColumn>
                                  <TableRowColumn className="bold" >
                                    {
                                      this.state.art.religion == 1 ?
                                      'Islam'
                                      : this.state.art.religion == 2 ?
                                      'Kristen Protestan'
                                      : this.state.art.religion == 3 ?
                                      'Kristen Katolik'
                                      : this.state.art.religion == 4 ?
                                      'Hindu'
                                      : this.state.art.religion == 5 ?
                                      'Buddha'
                                      : this.state.art.religion == 6 ?
                                      'Konghucu'
                                      :
                                      'Lainnya'
                                    }
                                  </TableRowColumn>
                                </TableRow>
                                <TableRow>
                                  <TableRowColumn style={{ textAlign: 'right', verticalAlign: 'top' , color: '#888' }}>Suku</TableRowColumn>
                                  <TableRowColumn className="bold" >{this.state.art.race || '-'}</TableRowColumn>
                                </TableRow>
                                <TableRow>
                                  <TableRowColumn style={{ textAlign: 'right', verticalAlign: 'top' , color: '#888' }}>Bahasa yang Dikuasai</TableRowColumn>
                                  <TableRowColumn className="bold" >
                                    {
                                      this.state.art.user_language && this.state.art.user_language.length > 0 ?
                                      <ul style={{ margin: 0}}>
                                        {
                                          this.state.art.user_language.map((language, idx) => (
                                            <li key={idx} style={{ marginBottom: 5, borderLeft: '5px solid #64DD17'}}>
                                              &nbsp;{language.language.language}
                                              <Divider style={{ marginTop: 5}}/>
                                            </li>
                                          ))
                                        }
                                      </ul>
                                      :
                                      '-'
                                    }
                                  </TableRowColumn>
                                </TableRow>
                                <TableRow>
                                  <TableRowColumn style={{ textAlign: 'right', verticalAlign: 'top' , color: '#888' }}>Profesi</TableRowColumn>
                                  <TableRowColumn className="bold" >
                                    {
                                      this.state.art.user_job && this.state.art.user_job.length > 0 ?
                                      <ul style={{ margin: 0}}>
                                        {
                                          this.state.art.user_job.map((job, idx) => (
                                            <li key={idx} style={{ marginBottom: 5, borderLeft: '5px solid #64DD17'}}>
                                              &nbsp;{job.job.job}
                                              <Divider style={{ marginTop: 5}}/>
                                            </li>
                                          ))
                                        }
                                      </ul>
                                      :
                                      '-'
                                    }
                                  </TableRowColumn>
                                </TableRow>
                                <TableRow>
                                  <TableRowColumn style={{ textAlign: 'right', verticalAlign: 'top' , color: '#888' }}>Waktu Kerja</TableRowColumn>
                                  <TableRowColumn className="bold" >
                                    {
                                      this.state.art.user_work_time && this.state.art.user_work_time.length > 0 ?
                                      <Table
                                        selectable={false}
                                      >
                                        <TableHeader
                                          displaySelectAll={false}
                                          adjustForCheckbox={false}
                                        >
                                          <TableRow>
                                            <TableHeaderColumn tooltip="Waktu Kerja">Waktu Kerja</TableHeaderColumn>
                                            <TableHeaderColumn tooltip="Upah">Upah</TableHeaderColumn>
                                          </TableRow>
                                        </TableHeader>
                                        <TableBody
                                          displayRowCheckbox={false}
                                        >
                                        {
                                          this.state.art.user_work_time.map((work_time, idx) => (
                                            <TableRow key={idx}>
                                              <TableRowColumn >{work_time.work_time.work_time}</TableRowColumn>
                                              <TableRowColumn ><NumberFormat value={work_time.cost} displayType={'text'} thousandSeparator={true} prefix={'Rp. '} /></TableRowColumn>
                                            </TableRow>
                                          ))
                                        }
                                        </TableBody>
                                      </Table>
                                      :
                                      '-'
                                    }
                                  </TableRowColumn>
                                </TableRow>
                                <TableRow>
                                  <TableRowColumn style={{ textAlign: 'right', verticalAlign: 'top' , color: '#888' }}>Informasi Tambahan</TableRowColumn>
                                  <TableRowColumn className="bold" >
                                    {
                                      this.state.art.user_additional_info && this.state.art.user_additional_info.length > 0 ?
                                      <ul style={{ margin: 0}}>
                                        {
                                          this.state.art.user_additional_info.map((additional_info, idx) => (
                                            <li key={idx} style={{ marginBottom: 5, borderLeft: '5px solid #64DD17'}}>
                                              &nbsp;{additional_info.additional_info.info}
                                              <Divider style={{ marginTop: 5}}/>
                                            </li>
                                          ))
                                        }
                                      </ul>
                                      :
                                      '-'
                                    }
                                  </TableRowColumn>
                                </TableRow>
                              </TableBody>
                            </Table>
                          </div>
                        </Paper>
                      </div>
                    </div>
                  </div>
                  <div className="clearfix"></div>
                </CardText>
                <CardText>
                  <h5>Review</h5>
                  { getReview() }
                </CardText>
              </Card>
            </ValidatorForm>
            :
            <Card className="col s12" >
              <CardHeader title="ART tidak ditemukan" />
            </Card>
        }
      </div>
    )
  }
}

ArtDetail.propTypes = {
  id: PropTypes.string.isRequired,
  getArt: PropTypes.func.isRequired,
}

export default ArtDetail