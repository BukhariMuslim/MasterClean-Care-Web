import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Paper from 'material-ui/Paper'
import Divider from 'material-ui/Divider'
import { Card, CardActions, CardHeader, CardTitle, CardText } from 'material-ui/Card'
import { ValidatorForm, TextValidator, SelectValidator, DateValidator } from 'react-material-ui-form-validator'
import Checkbox from 'material-ui/Checkbox'
import TextField from 'material-ui/TextField'
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'
import DatePicker from 'material-ui/DatePicker'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import App from './App'
import ArtContainer from '../containers/ArtContainer'
import ArtDetailContainer from '../containers/ArtDetailContainer'
import FontIcon from 'material-ui/FontIcon'
import IconButton from 'material-ui/IconButton'
import Breadcrumbs from '../modules/Breadcrumbs'
import Pager from '../modules/Pager'
import NumberFormat from 'react-number-format'

class ArtPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      expanded: false,
      language: [],
      languageItem: [],
      name: '',
      minAge: 15,
      maxAge: 25,
      city: 0,
      religion: 0,
      job: 0,
      work_time: 0,
      maxCost: 0,
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

    // this.props.getLanguage(this, 'languageItem')

    // this.props.getJob(this, 'jobItem')

    // this.props.getWorkTime(this, 'workTimeItem')
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
    this.props.getArt()
    // if (this.props.)
    this.loadInitialData()
  }

  setParam(queryString) {
    if (queryString) {
      let tempCriteria = []
      const params = queryString.substr(1).split('&')
      params.map((param, idx) => {
        const p = param.split('=')
        const val = decodeURIComponent(p[1])
        if(p[0] == 'language') {
          const temp = decodeURIComponent(val).split(',')
          let language = []
          let tempL = []
          temp.map((t, idx) => {
            if (this.state.languageItem.length > 0) {
              tempL.push(`"${this.state.languageItem[this.state.languageItem.findIndex(x => x.id == t)].language}"`)
            }
            language.push({
              language_id: t
            })
          })
          tempCriteria.push('Bahasa ' + `(${tempL.join(', ')})`)
          this.setState({'language': language})
        }
        else {
          this.setState({[p[0]]: decodeURIComponent(val)})
          if (p[0] == 'name') {
            tempCriteria.push("Nama " + `"${val}"`)
          }
          else if (p[0] == 'minAge') {
            tempCriteria.push("Usia minimum " + `"${val}"`)
          }
          else if (p[0] == 'maxAge') {
            tempCriteria.push("Usia maksimum " + `"${val}"`)
          }
          else if (p[0] == 'city') {
            tempCriteria.push('Kota ' + `"${this.state.cityItem[this.state.cityItem.findIndex(x => x.id == val)].name}"`)
          }
          else if (p[0] == 'religion') {
            let agama = ''
            if (religion == 1) {
              agama = 'Islam'
            }
            else if (religion == 2) {
              agama = 'Kristen Protestan'
            }
            else if (religion == 3) {
              agama = 'Kristen Katolik'
            }
            else if (religion == 4) {
              agama = 'Hindu'
            }
            else if (religion == 5) {
              agama = 'Buddha'
            }
            else if (religion == 6) {
              agama = 'Konghucu'
            }
            else {
              agama = 'Lainnya'
            }
            tempCriteria.push('Agama ' + `"${val}"`)
          }
          else if (p[0] == 'work_time') {
            tempCriteria.push('Kelompok Waktu Kerja ' + `"${this.state.workTimeItem[this.state.workTimeItem.findIndex(x => x.id == val)].work_time}"`)
          }
          else if (p[0] == 'maxCost') {
            tempCriteria.push("Upah maksimum " + `"${val}"`)
          }
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
		  this.props.getArt(newPage + 1)
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
  
  checkItems(type, collection, isNeedTextBox) {
    if (collection) {
      return collection.map((obj, idx) => {
        const values = this.state[type]
        let curIdx = -1
        let enabled = false
        let name = ''
        if (type === 'language') {
          curIdx = values.findIndex(x => x.language_id == obj.id)
          name = 'language_id'
        }
        else if (type === 'userJob') {
          curIdx = values.findIndex(x => x.job_id == obj.id)
          name = 'job_id'
        }
        else if (type === 'userWorkTime') {
          curIdx = values.findIndex(x => x.work_time_id == obj.id)
          enabled = curIdx > -1
          name = 'work_time_id'
        }
        else if (type === 'userAdditionalInfo') {
          curIdx = values.findIndex(x => x.info_id == obj.id)
          name = 'info_id'
        }
        const checked = curIdx > -1
        return (
          <div key={obj.id} className="col s6 valign-wrapper">
            <div className={"col" + (isNeedTextBox ? " s6" : " s12")}>
              <Checkbox
                checked={checked}
                value={obj.id}
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
                    value={enabled ? values[curIdx].cost : ''}
                    disabled={!enabled}
                    fullWidth={true}
                    name="userWorkTime"
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
    this.props.getArt()
    this.loadInitialData()
    this.props.history.push('/art')
  }

  submitHandler(e) {
    e.preventDefault()
    const { name, minAge, maxAge, city, job, religion, work_time, maxCost, language } = this.state
    let queryString = []
    let tempCriteria = []

    if (name) {
      queryString.push('name=' + encodeURIComponent(name))
      tempCriteria.push('Nama ' + `"${name}"`)
    }

    if (minAge && minAge > 0) {
      queryString.push('minAge=' + encodeURIComponent(minAge))
      tempCriteria.push('Umur minimum ' + `"${minAge}"`)
    }

    if (maxAge && maxAge > 0) {
      queryString.push('maxAge=' + encodeURIComponent(maxAge))
      tempCriteria.push('Umur maksimum ' + `"${maxAge}"`)
    }

    if (city) {
      queryString.push('city=' + encodeURIComponent(city))
      tempCriteria.push('Kota ' + `"${this.state.cityItem[this.state.cityItem.findIndex(x => x.id == city)].name}"`)
    }

    if (language && language.length > 0) {
      let temp = []
      let tempC = []
      language.map((lang, idx) => {
        temp.push(lang.language_id)
        tempC.push(`"${this.state.languageItem[this.state.languageItem.findIndex(x => x.id == lang.language_id)].language}"`)
      })
      queryString.push('language=' + encodeURIComponent(temp.join(',')))
      tempCriteria.push('Bahasa ' + `(${tempC.join(', ')})`)
    }

    if (religion) {
      queryString.push('religion=' + encodeURIComponent(religion))
      let agama = ''
      if (religion == 1) {
        agama = 'Islam'
      }
      else if (religion == 2) {
        agama = 'Kristen Protestan'
      }
      else if (religion == 3) {
        agama = 'Kristen Katolik'
      }
      else if (religion == 4) {
        agama = 'Hindu'
      }
      else if (religion == 5) {
        agama = 'Buddha'
      }
      else if (religion == 6) {
        agama = 'Konghucu'
      }
      else {
        agama = 'Lainnya'
      }
      tempCriteria.push('Agama ' + `"${agama}"`)
    }

    if (job) {
      queryString.push('job=' + encodeURIComponent(job))
      tempCriteria.push('Profesi ' + `"${this.state.jobItem[this.state.jobItem.findIndex(x => x.id == job)].job}"`)
    }

    if (work_time) {
      queryString.push('work_time=' + encodeURIComponent(work_time))
      tempCriteria.push('Kelompok Waktu Kerja ' + `"${this.state.workTimeItem[this.state.workTimeItem.findIndex(x => x.id == work_time)].work_time}"`)
    }

    if (maxCost) {
      queryString.push('maxCost=' + encodeURIComponent(maxCost))
      tempCriteria.push('Upah maksimum ' + `"${maxCost}"`)
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
    }
  }

  onCheckHandler(type, name, isNeedTextBox) {
    const form = this
    return function (event, checked) {
      const target = event.target
      const value = target.value
      let old = form.state[type]
      const idx = old.findIndex(x => x[name] === value)

      if (!isNeedTextBox) {
        if (checked && idx === -1) {
          if (form.state[type + 'ErrorText']) {
            form.setState({
              [type + 'ErrorText']: ''
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
          if (form.state[type + 'ErrorText']) {
            form.setState({
              [type + 'ErrorText']: ''
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
      form.setState({ [type]: old })
    }
  }

  render() {
    console.log(this.props.arts)
    return (
      <App>
        <div className="row">
          <nav className="cyan breadcrumbsNav">
            <div className="nav-wrapper">
              <Breadcrumbs pathname={this.props.location.pathname} />
            </div>
          </nav>
          {
            this.props.match.params.artId
              ?
              <Paper className="col s12" zDepth={1} style={{ padding: 10, marginTop: 10 }}>
                <ArtDetailContainer id={this.props.match.params.artId} />
              </Paper>
              :
              <Paper className="col s12" zDepth={1} style={{ padding: 10, marginTop: 10 }}>
                <Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange} className="col s12" zDepth={0} >
                  <CardTitle>
                    <h5 style={{ marginTop: 35 }}>
                      Daftar ART
                      <IconButton tooltip={this.state.expanded ? 'Tutup' : 'Pencarian'} className="right" onClick={this.handleToggle}>
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
                    <Divider />
                  </CardTitle>
                  <CardText expandable={true}>
                    <ValidatorForm
                      className="grey lighten-4"
                      ref="form"
                      onSubmit={(e) => this.submitHandler(e)}>
                      <div className="col s12" style={{marginTop: 10}}>Pencarian</div>
                      <div className="col m6">
                        <TextValidator
                          hintText="Nama"
                          floatingLabelText="Nama"
                          value={this.state.name}
                          fullWidth={true}
                          name="name"
                          onChange={this.onChangeHandler}
                          autoComplete={false}
                        />
                      </div>
                      <div className="col s6 m3">
                        <NumberFormat
                          hintText="Usia (min)"
                          floatingLabelText="Usia (min)"
                          value={this.state.minAge}
                          fullWidth={true}
                          name="minAge"
                          onChange={this.onChangeHandler}
                          customInput={TextValidator}
                          autoComplete={false}
                          validators={['minNumber:0', 'maxNumber:' + this.state.maxAge ]}
                          errorMessages={['Nilai harus diatas 0', 'Nilai harus kurang dari Usia (maks)']}
                        />
                      </div>
                      <div className="col s6 m3">
                        <NumberFormat
                          hintText="Usia (maks)"
                          floatingLabelText="Usia (maks)"
                          value={this.state.maxAge}
                          fullWidth={true}
                          name="maxAge"
                          onChange={this.onChangeHandler}
                          customInput={TextValidator}
                          autoComplete={false}
                          validators={['minNumber:' + this.state.minAge, 'maxNumber:100' ]}
                          errorMessages={['Nilai harus lebih dari Usia (min)', 'Nilai harus kurang dari 100']}
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
                      <div className="col m6">
                        <SelectValidator
                          floatingLabelText="Agama"
                          value={this.state.religion}
                          name="religion"
                          fullWidth={true}
                          onChange={this.onSelectFieldChangeHandler('religion')}
                        >
                          <MenuItem value={0} primaryText="Semua" />
                          <MenuItem value={1} primaryText="Islam" />
                          <MenuItem value={2} primaryText="Kristen Protestan" />
                          <MenuItem value={3} primaryText="Kristen Katolik" />
                          <MenuItem value={4} primaryText="Hindu" />
                          <MenuItem value={5} primaryText="Buddha" />
                          <MenuItem value={6} primaryText="Konghucu" />
                          <MenuItem value={7} primaryText="Lainnya" />
                        </SelectValidator>
                      </div>
                      <div className="col s12">
                        <fieldset>
                          <legend style={{ color: 'rgba(0, 0, 0, 0.3)' }}>Bahasa</legend>
                          {this.checkItems('language', this.state.languageItem)}
                        </fieldset>
                      </div>
                      <div className="col m6">
                        <TextValidator
                          hintText="Suku"
                          floatingLabelText="Suku"
                          value={this.state.race}
                          fullWidth={true}
                          name="race"
                          onChange={this.onChangeHandler}
                          autoComplete={false}
                        />
                      </div>
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
                        <NumberFormat
                          hintText="Upah maksimum"
                          floatingLabelText="Upah maksimum"
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
                        this.props.arts.total ?
                          <span>
                            Menampilkan <b>{ this.props.arts.from }</b> - <b>{ this.props.arts.to }</b> dari total <b>{ this.props.arts.total }</b> ART
                            {
                              this.state.criteria ? this.state.criteria : null
                            }
                          </span>
                        :
                          <span>
                            Tidak ada ART ditemukan
                            {
                              this.state.criteria ? this.state.criteria : null
                            }
                          </span>
                      }
                      </i>
                    </small>
                    <ArtContainer arts={this.props.arts.data || [] } />
                    <Pager
                      total={this.props.arts.last_page || 1}
                      current={this.props.arts.current_page ? this.props.arts.current_page - 1 : 1}
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

export default ArtPage
