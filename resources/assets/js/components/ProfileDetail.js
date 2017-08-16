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
import IconButton from 'material-ui/IconButton'
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

class ProfileDetail extends Component {
  constructor(props) {
    super(props)

    this.state = {
      languageItem: [],
      jobItem: [],
      workTimeItem: [],
      additionalInfoItem: [],
      cityItem: [],
      user: {
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
    this.onEdit = this.onEdit.bind(this)
    this.onCancelEdit = this.onCancelEdit.bind(this)
  }

  onSelectFieldChangeHandler(name) {
    const form = this
    return function (event, index, value) {
      let user = form.state.user
      form.setState({ user: Object.assign({}, user, { [name]: value }) })
    }
  }

  onChangeHandler(e) {
    const target = e.target
    const value = target.value
    const name = target.name

    let user = this.state.user
    this.setState({ user: Object.assign({}, user, { [name]: value }) })
  }

  onChangeDateHandler(name) {
    const form = this
    return function (event, date) {
      let user = form.state.user
      form.setState({ user: Object.assign({}, user, { [name]: date }) })
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
    this.props.getProfile(this)
  }

  onCheckHandler(type, name, isNeedTextBox) {
    const form = this
    return function (event, checked) {
      const target = event.target
      const value = target.value
      let old = form.state.user[type]
      const idx = old.findIndex(x => x[name] == value)
      let user = form.state.user

      if (!isNeedTextBox) {
        if (checked && idx === -1) {
          if (form.state.user[type + 'ErrorText']) {
            form.setState({
              user: Object.assign({}, user, {
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
          if (form.state.user[type + 'ErrorText']) {
            form.setState({
              user: Object.assign({}, user, {
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
        user: Object.assign({}, user, {
          [type]: old
        })
      })
    }
  }

  errorText(type) {
    const text = this.state.user[type]
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
        const values = this.state.user[type]
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
                    thousandSeparator={true}
                    prefix={'Rp. '}
                    value={costEnabled ? values[curIdx].cost : ''}
                    disabled={!costEnabled || !this.state.isEdit}
                    underlineShow={this.state.isEdit}
                    fullWidth={true}
                    name="user_work_time"
                    onChange={(e) => this.onChangeTextHandler(e, curIdx)}
                    validators={ isNeedTextBox && checked ? ['required'] : []}
                    errorMessages={ isNeedTextBox && checked ? ['Gaji dibutuhkan'] : []}
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

  onChangeTextHandler(e, idx) {
    const target = e.target
    const value = target.value
    const name = target.name
    
    let old = this.state.user[name]

    if (idx > -1) {
      old[idx].cost = target.value
    }
    this.setState({ [name]: old })
  }

  comments(comments) {
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

    return comments.map((comment, id) => {
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
    if (this.state.user.user_language.length <= 0) {
      isValid = false
      this.setState({
        user_languageErrorText: "Pilih minimal 1 Bahasa yang dikuasai.",
      })
    }
    if (this.state.user.user_job.length <= 0) {
      isValid = false
      this.setState({
        user_jobErrorText: "Pilih minimal 1 Profesi.",
      })
    }
    if (this.state.user.user_work_time.length <= 0) {
      isValid = false
      this.setState({
        user_work_timeErrorText: "Pilih minimal 1 Waktu Kerja.",
      })
    }

    if (isValid) {
      this.props.onUpdateProfile(
        this,
        {
          id: this.state.user.id,
          name: this.state.user.name,
          email: this.state.user.email,
          password: this.state.user.password,
          gender: this.state.user.gender,
          born_place: this.state.user.born_place,
          born_date: this.state.user.born_date,
          contact: {
            address: this.state.user.contact.address,
            location: this.state.user.contact.location,
            emergency_numb: this.state.user.contact.emergency_numb,
            location: this.state.user.contact.location,
            phone: this.state.user.contact.phone,
            city: this.state.user.contact.city.id,
          },
          religion: this.state.user.religion,
          race: this.state.user.race,
          user_type: this.state.user.user_type,
          status: this.state.user.status,
          user_language: this.state.user.user_language,
          user_job: this.state.user.user_job, 
          user_work_time: this.state.user.user_work_time,
          user_additional_info: this.state.user.user_additional_info,
        },
      )
    }
  }

  onError(errors) {
    this.props.onUpdateSnack(true, "Telah terjadi " + errors.length + " kesalahan. Mohon periksa kembali form ini.")
  }

  onEdit() {
    this.setState({
      isEdit: true,
    })
  }

  onCancelEdit() {
    const oldProfile = this.state.user
    this.setState({
      user: Object.assign({}, oldProfile, this.props.user),
      isEdit: false,
    })
  }

  render() {
    let age = 0
    const calculateAge = (birthday) => {
      if (birthday) {
        birthday = new Date(birthday)
        let ageDifMs = Date.now() - birthday.getTime()
        let ageDate = new Date(ageDifMs)
        return Math.abs(ageDate.getUTCFullYear() - 1970)
      }
      return 0
    }
    if (this.props.user) {
      age = calculateAge(this.props.user.born_date)
    }
    return (
      <div>
        {
          this.props.user && this.props.user.name ?
            <ValidatorForm
              ref="form"
              onSubmit={(e) => this.postHandler(e)}
              onError={errors => this.onError(errors)}>
              <Card zDepth={0} >
                <CardText>
                  <CardMedia
                    className="col s12 m3"
                  >
                    <img src={'/image/medium/' + this.props.user.avatar || 'image/medium/users/profile.png'} alt="" />
                  </CardMedia>
                  <div className="col s12 m9" >
                    <div className="row">
                      <div className="col s12">
                        <Paper zDepth={0}>
                          <div className={ `col s12${ this.state.isEdit ? ' grey-text' : '' }` }>
                            <h5>
                              {this.props.user.name || ''} <small>({age} thn)</small>
                              {
                                this.state.isEdit ?
                                <IconButton tooltip="Batal" iconClassName="material-icons" className="right" onClick={this.onCancelEdit} >
                                  clear
                                </IconButton>
                                :
                                <IconButton tooltip="Ubah" iconClassName="material-icons" className="right" onClick={this.onEdit} >
                                  create
                                </IconButton>
                              }
                            </h5>
                          </div>
                          {
                            this.props.user.role_id == 3 ?
                            <div className={ `col s12${ this.state.isEdit ? ' grey-text' : '' }` }>
                              <StarComponent rate={this.props.user.rate} isShowRate={true} />
                            </div>
                            :
                            null
                          }
                          <div className={ `col s12${ this.state.isEdit ? ' grey-text' : '' }` }>
                            <small>
                              { this.props.user.description || ''}
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
                                    Informasi Detail
                                  </TableHeaderColumn>
                                </TableRow>
                              </TableHeader>
                              <TableBody
                                displayRowCheckbox={false}
                              >
                                <TableRow>
                                  <TableRowColumn style={{ textAlign: 'right', verticalAlign: 'top' , color: '#888' }}>Nama</TableRowColumn>
                                  <TableRowColumn className="bold" >
                                    {
                                      this.state.isEdit ?
                                      <TextValidator
                                        style={{ fontSize: '13px', lineHeight: '13px', height: 'auto'}}
                                        hintText="Nama"
                                        value={this.state.user.name}
                                        fullWidth={true}
                                        name="name"
                                        onChange={this.onChangeHandler}
                                        autoComplete={false}
                                        validators={['required']}
                                        errorMessages={['Nama dibutuhkan']}
                                      />
                                      :
                                      this.props.user.name
                                    }
                                  </TableRowColumn>
                                </TableRow>
                                <TableRow>
                                  <TableRowColumn style={{ textAlign: 'right', verticalAlign: 'top' , color: '#888' }}>Gender</TableRowColumn>
                                  <TableRowColumn className="bold" >
                                    {
                                      this.state.isEdit ?
                                      <SelectValidator
                                        style={{ fontSize: '13px', lineHeight: '13px', height: 'auto'}}
                                        hintText="Gender"
                                        value={this.state.user.gender}
                                        fullWidth={true}
                                        name="gender"
                                        onChange={this.onSelectFieldChangeHandler('gender')}
                                        validators={['required']}
                                        errorMessages={['Gender dibutuhkan']}
                                      >
                                        <MenuItem value={1} primaryText="Pria" />
                                        <MenuItem value={2} primaryText="Wanita" />
                                      </SelectValidator>
                                      :
                                      this.props.user.gender == 1 ? 'Pria' : 'Wanita' 
                                    }
                                  </TableRowColumn>
                                </TableRow>
                                <TableRow>
                                  <TableRowColumn style={{ textAlign: 'right', verticalAlign: 'top' , color: '#888' }}>Tempat / Tanggal Lahir</TableRowColumn>
                                  <TableRowColumn className="bold" >
                                    {
                                      this.state.isEdit ?
                                      <div>
                                        <div className="col s12 m6" style={{ paddingLeft: 0 }}>
                                          <TextValidator
                                            style={{ fontSize: '13px', lineHeight: '13px', height: 'auto'}}
                                            hintText="Tempat Lahir"
                                            value={this.state.user.born_place}
                                            fullWidth={true}
                                            name="born_place"
                                            onChange={this.onChangeHandler}
                                            autoComplete={false}
                                            validators={['required']}
                                            errorMessages={['Tempat Lahir dibutuhkan']}
                                          />
                                        </div>
                                        <div className="col s12 m6" style={{ paddingRight: 0 }}>
                                          <DateValidator
                                            hintText="Tanggal Lahir"
                                            textFieldStyle={{ fontSize: '13px', lineHeight: '13px', height: 'auto'}}
                                            value={this.state.user.born_date ? new Date(this.state.user.born_date) : {}}
                                            onChange={this.onChangeDateHandler('born_date')}
                                            name="born_date"
                                            autoOk={true}
                                            fullWidth={true}
                                            formatDate={new DateTimeFormat('id-ID', {
                                              day: 'numeric',
                                              month: 'long',
                                              year: 'numeric',
                                            }).format}
                                            validators={['required']}
                                            errorMessages={['Tanggal Lahir dibutuhkan']}
                                          />
                                        </div>
                                      </div>
                                      :
                                      <span>
                                        {this.props.user.born_place || ''}, <FormattedDate value={this.props.user.born_date} day="numeric" month="long" year="numeric" />
                                      </span>
                                    }
                                  </TableRowColumn>
                                </TableRow>
                                <TableRow>
                                  <TableRowColumn style={{ textAlign: 'right', verticalAlign: 'top' , color: '#888' }}>Kota</TableRowColumn>
                                  <TableRowColumn className="bold" >
                                    {
                                      this.state.isEdit ?
                                      <SelectValidator
                                        hintText="Kota"
                                        style={{ fontSize: '13px', lineHeight: '13px', height: 'auto'}}
                                        value={this.state.user.contact.city.id}
                                        name="city"
                                        fullWidth={true}
                                        onChange={this.onSelectFieldChangeHandler('city')}
                                        validators={['required']}
                                        errorMessages={['Kota dibutuhkan']}
                                      >
                                        {this.menuItems(this.state.cityItem, this.state.user.contact.city.id)}
                                      </SelectValidator>
                                      :
                                      this.props.user.contact ? this.props.user.contact.city.name : ''
                                    }
                                  </TableRowColumn>
                                </TableRow>
                                <TableRow>
                                  <TableRowColumn style={{ textAlign: 'right', verticalAlign: 'top' , color: '#888' }}>Alamat</TableRowColumn>
                                  <TableRowColumn className="bold" >
                                    {
                                      this.state.isEdit ?
                                      <TextValidator
                                        hintText="Alamat"
                                        style={{ fontSize: '13px', lineHeight: '13px', height: 'auto'}}
                                        value={this.state.user.contact.address}
                                        fullWidth={true}
                                        name="address"
                                        onChange={this.onChangeHandler}
                                        autoComplete={false}
                                        multiLine={true}
                                        rows={2}
                                        rowsMax={4}
                                        validators={['required']}
                                        errorMessages={['Alamat dibutuhkan']}
                                      />
                                      :
                                      this.props.user.contact ? this.props.user.contact.address : ''
                                    }
                                  </TableRowColumn>
                                </TableRow>
                                <TableRow>
                                  <TableRowColumn style={{ textAlign: 'right', verticalAlign: 'top' , color: '#888' }}>Agama</TableRowColumn>
                                  <TableRowColumn className="bold" >
                                    {
                                      this.state.isEdit ?
                                      <SelectValidator
                                        hintText="Agama"
                                        style={{ fontSize: '13px', lineHeight: '13px', height: 'auto'}}
                                        value={this.state.user.religion}
                                        name="religion"
                                        fullWidth={true}
                                        onChange={this.onSelectFieldChangeHandler('religion')}
                                        validators={['required']}
                                        errorMessages={['Agama dibutuhkan']}
                                      >
                                        <MenuItem value={1} primaryText="Islam" />
                                        <MenuItem value={2} primaryText="Kristen Protestan" />
                                        <MenuItem value={3} primaryText="Kristen Katolik" />
                                        <MenuItem value={4} primaryText="Hindu" />
                                        <MenuItem value={5} primaryText="Buddha" />
                                        <MenuItem value={6} primaryText="Konghucu" />
                                        <MenuItem value={7} primaryText="Lainnya" />
                                      </SelectValidator>
                                      :
                                      this.props.user.religion == 1 ?
                                      'Islam'
                                      : this.props.user.religion == 2 ?
                                      'Kristen Protestan'
                                      : this.props.user.religion == 3 ?
                                      'Kristen Katolik'
                                      : this.props.user.religion == 4 ?
                                      'Hindu'
                                      : this.props.user.religion == 5 ?
                                      'Buddha'
                                      : this.props.user.religion == 6 ?
                                      'Konghucu'
                                      :
                                      'Lainnya'
                                    }
                                  </TableRowColumn>
                                </TableRow>
                                <TableRow>
                                  <TableRowColumn style={{ textAlign: 'right', verticalAlign: 'top' , color: '#888' }}>Suku</TableRowColumn>
                                  <TableRowColumn className="bold" >
                                    {
                                      this.state.isEdit ?
                                      <TextField
                                        hintText="Suku"
                                        style={{ fontSize: '13px', lineHeight: '13px', height: 'auto'}}
                                        fullWidth={true}
                                        value={this.state.user.race}
                                        name="race"
                                        onChange={this.onChangeHandler}
                                        autoComplete={false}
                                      />
                                      :
                                      this.props.user.race || '-'
                                    }
                                  </TableRowColumn>
                                </TableRow>
                                {
                                  this.props.user.role_id != 3 ?
                                  null
                                  :
                                  <TableRow>
                                    <TableRowColumn style={{ textAlign: 'right', verticalAlign: 'top' , color: '#888' }}>Bahasa yang Dikuasai</TableRowColumn>
                                    <TableRowColumn className="bold" >
                                      {
                                        this.state.isEdit ?
                                        <div>
                                          {this.checkItems('user_language', this.state.languageItem)}
                                          {this.errorText('user_languageErrorText')}
                                        </div>
                                        :
                                        this.props.user.user_language && this.props.user.user_language.length > 0 ?
                                        <ul style={{ margin: 0}}>
                                          {
                                            this.props.user.user_language.map((language, idx) => (
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
                                }
                                {
                                  this.props.user.role_id != 3 ?
                                  null
                                  :
                                  <TableRow>
                                    <TableRowColumn style={{ textAlign: 'right', verticalAlign: 'top' , color: '#888' }}>Profesi</TableRowColumn>
                                    <TableRowColumn className="bold" >
                                      {
                                        this.state.isEdit ?
                                        <div>
                                          {this.checkItems('user_job', this.state.jobItem)}
                                          {this.errorText('user_jobErrorText')}
                                        </div>
                                        :
                                        this.props.user.user_job && this.props.user.user_job.length > 0 ?
                                        <ul style={{ margin: 0}}>
                                          {
                                            this.props.user.user_job.map((job, idx) => (
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
                                }
                                {
                                  this.props.user.role_id != 3 ?
                                  null
                                  :
                                  <TableRow>
                                    <TableRowColumn style={{ textAlign: 'right', verticalAlign: 'top' , color: '#888' }}>Waktu Kerja</TableRowColumn>
                                    <TableRowColumn className="bold" >
                                      {
                                        this.state.isEdit ?
                                        <div>
                                          {this.checkItems('user_work_time', this.state.workTimeItem, true)}
                                          <br />
                                          {this.errorText('user_work_timeErrorText')}
                                        </div>
                                        :
                                        this.props.user.user_work_time && this.props.user.user_work_time.length > 0 ?
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
                                            this.props.user.user_work_time.map((work_time, idx) => (
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
                                }
                                {
                                  this.props.user.role_id != 3 ?
                                  null
                                  :
                                  <TableRow>
                                    <TableRowColumn style={{ textAlign: 'right', verticalAlign: 'top' , color: '#888' }}>Informasi Tambahan</TableRowColumn>
                                    <TableRowColumn className="bold" >
                                      {
                                        this.state.isEdit ?
                                        this.checkItems('user_additional_info', this.state.additionalInfoItem)
                                        :
                                        this.props.user.user_additional_info && this.props.user.user_additional_info.length > 0 ?
                                        <ul style={{ margin: 0}}>
                                          {
                                            this.props.user.user_additional_info.map((additional_info, idx) => (
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
                                }
                              </TableBody>
                            </Table>
                          </div>
                        </Paper>
                      </div>
                    </div>
                  </div>
                  {
                    this.state.isEdit ?
                    <div>
                      <div className="input-field col s12 m8 l10">&nbsp;</div>
                      <div className="input-field col s12 m4 l2">
                        <RaisedButton
                          primary={true}
                          label="Simpan"
                          fullWidth={true}
                          type="submit" />
                      </div>
                    </div>
                    :
                    null
                  }
                  <div className="clearfix"></div>
                </CardText>
              </Card>
            </ValidatorForm>
            :
            <Card className="col s12" >
              <CardHeader title="Profil tidak ditemukan" />
            </Card>
        }
      </div>
    )
  }
}

ProfileDetail.propTypes = {
  getProfile: PropTypes.func.isRequired,
}

export default ProfileDetail