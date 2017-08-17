import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Paper from 'material-ui/Paper'
import Divider from 'material-ui/Divider'
import { Card, CardActions, CardHeader, CardTitle, CardText } from 'material-ui/Card'
import { ValidatorForm, TextValidator, SelectValidator, DateValidator, TimeValidator } from 'react-material-ui-form-validator'
import Checkbox from 'material-ui/Checkbox'
import TextField from 'material-ui/TextField'
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'
import DatePicker from 'material-ui/DatePicker'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import App from './App'
import OfferContainer from '../containers/OfferContainer'
import OfferDetailContainer from '../containers/OfferDetailContainer'
import FontIcon from 'material-ui/FontIcon'
import IconButton from 'material-ui/IconButton'
import Breadcrumbs from '../modules/Breadcrumbs'
import Pager from '../modules/Pager'
import NumberFormat from 'react-number-format'

const DateTimeFormat = global.Intl.DateTimeFormat

class OfferPage extends Component {
  constructor(props) {
    super(props)

    let minDate = new Date()
    let maxDate = new Date()
    minDate.setHours(0, 0, 0, 0)
    maxDate.setDate(maxDate.getDate() + 7)
    maxDate.setHours(0, 0, 0, 0)

    this.state = {
      expanded: false,
      criteria: '',
      start_date: minDate,
      end_date: maxDate,
      name: '',
      maxCost: 0,
      city: 0,
      job: 0,
      work_time: 0,
      criteria: '',
    }

    this.baseState = this.state

    this.handleToggle = this.handleToggle.bind(this)
    this.handlePageChanged = this.handlePageChanged.bind(this)
    this.onChangeHandler = this.onChangeHandler.bind(this)
    this.resetForm = this.resetForm.bind(this)
  }

  loadInitialData() {
    this.props.getPlace(this, 'cityItem')
  }

  handleExpandChange (expanded) {
    this.setState({expanded: expanded})
  }

  handleToggle() {
    const oldExpand = this.state.expanded
    this.setState({expanded: !oldExpand});
  }

  onChangeHandler(e) {
    const target = e.target
    const value = target.value
    const name = target.name

    this.setState({ [name]: value })
  }

  componentDidMount() {
    this.props.getOffer()
    this.loadInitialData()
  }

  setParam(queryString) {
    if (queryString) {
      let tempCriteria = []
      const params = queryString.substr(1).split('&')
      params.map((param, idx) => {
        const p = param.split('=')
        
        const val = decodeURIComponent(p[1])
        if (p[0] == 'start_date' || p[0] == 'end_date') {
          this.setState({[p[0]]: new Date(val)})
        }
        else {
          this.setState({[p[0]]: val})
        }
        if (p[0] == 'name') {
          tempCriteria.push("Nama " + `"${val}"`)
        }
        else if (p[0] == 'start_date') {
          tempCriteria.push("Tanggal/Waktu Mulai " + `"${val}"`)
        }
        else if (p[0] == 'end_date') {
          tempCriteria.push("Tanggal/Waktu Selesai " + `"${val}"`)
        }
        else if (p[0] == 'city') {
          tempCriteria.push('Kota ' + `"${this.state.cityItem[this.state.cityItem.findIndex(x => x.id == val)].name}"`)
        }
        else if (p[0] == 'work_time') {
          tempCriteria.push('Kelompok Waktu Kerja ' + `"${this.state.workTimeItem[this.state.workTimeItem.findIndex(x => x.id == val)].work_time}"`)
        }
        else if (p[0] == 'maxCost') {
          tempCriteria.push("Honor maksimum " + `"${val}"`)
        }
      })
      if (tempCriteria.length > 0) {
        this.setState({ criteria: ' dengan kriteria ' + tempCriteria.join(', ')})
      }
      this.props.onSubmit(this, queryString)
    }
  }

  handlePageChanged(newPage) {
    if (this.props.location.search) {
      this.props.onSubmit(this, this.props.location.search + '&page=' + (newPage + 1))
    }
    else {
		  this.props.getOffer(newPage + 1)
    }
  }

  onChangeDateHandler(name) {
    const form = this
    return function (event, date) {
      form.setState({ [name]: date })
    }
  }

  menuItems(collection, values) {
    if (collection) {
      return collection.map((obj, idx) => (
        <MenuItem
          key={obj.id}
          value={obj.id}
          primaryText={obj.name || obj.job || obj.work_time}
        />
      ))
    }
  }

  resetForm() {
    this.setState(this.baseState)
    this.props.getArt()
    this.loadInitialData()
    this.props.history.push('/offer')
  }

  submitHandler(e) {
    e.preventDefault()
    const { name, start_date, end_date, city, job, religion, work_time, maxCost, language } = this.state
    let queryString = []
    let tempCriteria = []

    if (job) {
      queryString.push('job=' + encodeURIComponent(job))
      tempCriteria.push('Profesi ' + `"${this.state.jobItem[this.state.jobItem.findIndex(x => x.id == job)].job}"`)
    }

    if (work_time) {
      queryString.push('work_time=' + encodeURIComponent(work_time))
      tempCriteria.push('Kelompok Waktu Kerja ' + `"${this.state.workTimeItem[this.state.workTimeItem.findIndex(x => x.id == work_time)].work_time}"`)
    }

    if (name) {
      queryString.push('name=' + encodeURIComponent(name))
      tempCriteria.push('Nama ' + `"${name}"`)
    }

    if (city) {
      queryString.push('city=' + encodeURIComponent(city))
      tempCriteria.push('Kota ' + `"${this.state.cityItem[this.state.cityItem.findIndex(x => x.place_id == city)].name}"`)
    }

    if (start_date) {
      queryString.push('start_date=' + encodeURIComponent(start_date))
      tempCriteria.push('Tanggal/Waktu Mulai ' + `"${start_date}"`)
    }

    if (end_date) {
      queryString.push('end_date=' + encodeURIComponent(end_date))
      tempCriteria.push('Tanggal/Waktu Selesai ' + `"${end_date}"`)
    }

    if (maxCost) {
      queryString.push('maxCost=' + encodeURIComponent(maxCost))
      tempCriteria.push('Honor maksimum ' + `"${maxCost}"`)
    }

    if (queryString.length > 0) {
      if (tempCriteria.length > 0) {
        this.setState({ criteria: ' dengan kriteria ' + tempCriteria.join(', ')})
      }
      this.props.onSubmit(this, '?' + queryString.join('&'))
      this.setState({expanded: false})
    }
  }

  onChangeTextHandler(e, idx) {
    const target = e.target
    const value = target.value
    const name = target.name
    let old = this.state[name]

    if (idx > -1) {
      old[idx].cost = target.value
    }
    this.setState({ [name]: old })
  }

  onSelectFieldChangeHandler(name) {
    const form = this
    return function (event, index, value) {
      form.setState({ [name]: value })

      if (name == 'work_time') {
        if (value == 1) {
          let startDate = new Date(form.state.start_date)
          startDate.setHours(startDate.getHours() + 2)
          let endDate = new Date(startDate)
          endDate.setHours(endDate.getHours() + 2)
          form.setState({
            start_date: startDate,
            end_date: endDate,
          })
        }
        else {
          let startDate = new Date(form.state.start_date)
          startDate.setHours(0, 0, 0, 0)
          let endDate = new Date(startDate)
          endDate.setDate(endDate.getDate() + 7)
          form.setState({
            start_date: startDate,
            end_date: endDate,
          })
        }
      }
    }
  }

  render() {
    return (
      <App>
        <div className="row">
          <nav className="cyan breadcrumbsNav">
            <div className="nav-wrapper">
              <Breadcrumbs pathname={this.props.location.pathname} />
            </div>
          </nav>
          {
            this.props.match.params.offerId
              ?
              <Paper className="col s12" zDepth={1} style={{ padding: 10, marginTop: 10 }} >
                <OfferDetailContainer id={this.props.match.params.offerId} />
              </Paper>
              :
              <Paper className="col s12" zDepth={1} style={{ padding: 10, marginTop: 10 }}>
                <Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange} className="col s12" zDepth={0} >
                  <CardTitle>
                    <h5 style={{ marginTop: 35 }}>
                      Penawaran
                      <IconButton tooltip="Pencarian" className="right" onClick={this.handleToggle}>
                          <FontIcon className="material-icons">
                            {
                              this.state.expanded ?
                              'clear'
                              :
                              'search'
                            }
                          </FontIcon>
                      </IconButton>
                      <div className="clearfix"></div>
                    </h5>
                    <Divider></Divider>
                  </CardTitle>
                  <CardText expandable={true}>
                    <ValidatorForm
                      className="grey lighten-4"
                      ref="form"
                      onSubmit={(e) => this.submitHandler(e)}>
                      <div className="col s12" style={{marginTop: 10}}>Pencarian</div>
                      <div className="col m6">
                        <SelectValidator
                          floatingLabelText="Profesi"
                          value={this.state.job}
                          name="job"
                          fullWidth={true}
                          onChange={this.onSelectFieldChangeHandler('job')}
                        >
                          <MenuItem
                            value={0}
                            primaryText="Semua"
                          />
                          {this.menuItems(this.state.jobItem, this.state.job)}
                        </SelectValidator>
                      </div>
                      <div className="col m6">
                        <SelectValidator
                          floatingLabelText="Kelompok Waktu Kerja"
                          value={this.state.work_time}
                          name="work_time"
                          fullWidth={true}
                          onChange={this.onSelectFieldChangeHandler('work_time')}
                        >
                          <MenuItem
                            value={0}
                            primaryText="Semua"
                          />
                          {this.menuItems(this.state.workTimeItem, this.state.work_time)}
                        </SelectValidator>
                      </div>
                      <div className="col m6">
                        <TextValidator
                          hintText="Nama Penawar"
                          floatingLabelText="Nama Penawar"
                          value={this.state.name}
                          fullWidth={true}
                          name="name"
                          onChange={this.onChangeHandler}
                          autoComplete={false}
                        />
                      </div>
                      <div className="col m6">
                        <SelectValidator
                          floatingLabelText="Kota"
                          value={this.state.city}
                          name="city"
                          fullWidth={true}
                          onChange={this.onSelectFieldChangeHandler('city')}
                        >
                          <MenuItem
                            value={0}
                            primaryText="Semua"
                          />
                          {this.menuItems(this.state.cityItem, this.state.city)}
                        </SelectValidator>
                      </div>
                      <div className={'col ' + (this.state.work_time == 1 ? 's6 m3' : 'm6') }>
                        <DateValidator
                          hintText="Tanggal Mulai"
                          floatingLabelText="Tanggal Mulai"
                          value={this.state.start_date}
                          onChange={this.onChangeDateHandler('start_date')}
                          name="start_date"
                          autoOk={true}
                          fullWidth={true}
                          maxDate={this.state.end_date}
                          formatDate={new DateTimeFormat('id-ID', {
                            day: 'numeric',
                            month: 'long',
                            year: 'numeric',
                          }).format}
                        />
                      </div>
                      {
                        this.state.work_time == 1 ? 
                        <div className="col s6 m3">
                          <TimeValidator
                            hintText="Waktu Mulai"
                            format="24hr"
                            floatingLabelText="Waktu Mulai"
                            value={this.state.start_date}
                            onChange={this.onChangeDateHandler('start_date')}
                            name="start_date"
                            autoOk={true}
                            fullWidth={true}
                          />
                        </div>
                        :
                        null
                      }
                      <div className={'col ' + (this.state.work_time == 1 ? 's6 m3' : 'm6') }>
                        <DateValidator
                          hintText="Tanggal Selesai"
                          floatingLabelText="Tanggal Selesai"
                          value={this.state.end_date}
                          onChange={this.onChangeDateHandler('end_date')}
                          name="end_date"
                          disabled={this.state.work_time == 1}
                          autoOk={true}
                          fullWidth={true}
                          minDate={this.state.start_date}
                          formatDate={new DateTimeFormat('id-ID', {
                            day: 'numeric',
                            month: 'long',
                            year: 'numeric',
                          }).format}
                        />
                      </div>
                      {
                        this.state.work_time == 1 ? 
                        <div className="col s6 m3">
                          <TimeValidator
                            format="24hr"
                            hintText="Waktu Selesai"
                            floatingLabelText="Waktu Selesai"
                            value={this.state.end_date}
                            onChange={this.onChangeDateHandler('end_date')}
                            name="end_date"
                            autoOk={true}
                            fullWidth={true}
                          />
                        </div>
                        :
                        null
                      }
                      <div className="col m6">
                        <NumberFormat
                          hintText="Honor maksimum"
                          floatingLabelText="Honor maksimum"
                          thousandSeparator={true}
                          prefix={'Rp. '}
                          value={this.state.maxCost}
                          fullWidth={true}
                          name="maxCost"
                          onChange={this.onChangeHandler}
                          customInput={TextValidator}
                          />
                      </div>
                      
                      <div className="col s12">
                        <div className="col hide-on-med-and-down l6">&nbsp;</div>
                        <div className="input-field col s12 m6 l3" style={{ marginBottom: 10}}>
                          <FlatButton
                            primary={true}
                            label="Reset"
                            fullWidth={true}
                            onClick={this.resetForm}
                            />
                        </div>
                        <div className="input-field col s12 m6 l3" style={{ marginBottom: 10}}>
                          <RaisedButton
                            primary={true}
                            label="Cari"
                            fullWidth={true}
                            type="submit" />
                        </div>
                      </div>
                      <div className="clearfix"></div>
                    </ValidatorForm>
                  </CardText>
                  <CardText>
                    <small style={{ fontSize: 12 }}>
                      <i>
                      {
                        this.props.offers.total ?
                          <span>
                            Menampilkan <b>{ this.props.offers.from }</b> - <b>{ this.props.offers.to }</b> dari total <b>{ this.props.offers.total }</b> Penawaran
                            {
                              this.state.criteria ? this.state.criteria : null
                            }
                          </span>
                        :
                          <span>
                            Tidak ada Penawaran ditemukan
                            {
                              this.state.criteria ? this.state.criteria : null
                            }
                          </span>
                      }
                      </i>
                    </small>
                    <OfferContainer offers={this.props.offers.data || [] } />
                    <Pager
                      total={this.props.offers.last_page || 1}
                      current={this.props.offers.current_page ? this.props.offers.current_page - 1 : 1}
                      visiblePages={ 3 }
                      onPageChanged={this.handlePageChanged}
                    />
                  </CardText>
                </Card>
              </Paper>
          }
        </div>
      </App>
    )
  }
}

export default OfferPage
