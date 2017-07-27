import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Card, CardActions, CardHeader, CardTitle, CardText, CardMedia } from 'material-ui/Card'
import { ValidatorForm, TextValidator, SelectValidator, DateValidator} from 'react-material-ui-form-validator'
import Paper from 'material-ui/Paper'
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'
import Checkbox from 'material-ui/Checkbox'
import Divider from 'material-ui/Divider'
import SelectField from 'material-ui/SelectField'
import DatePicker from 'material-ui/DatePicker'
import TextField from 'material-ui/TextField'
import MenuItem from 'material-ui/MenuItem'
import App from './App'

const fieldStyle = {
    paddingLeft: 10,
    paddingRight: 10,
}

const DateTimeFormat = global.Intl.DateTimeFormat

class ArtDetail extends Component {
    constructor(props){
        super(props)

        this.state = {
            art: {
                email: '',
                password: '',
                re_password: '',
                name: '',
                gender: null,
                born_place: '',
                born_date: null,
                phone: '',
                city: '',
                address: '',
                location: '',
                religion: null,
                race: '',
                user_type: 2,
                status: 0,
                userLanguage: [],
                userJob: [],
                userWorkTime: [],
                userAdditionalInfo: [],
                userDocument: [],
                languageItem: [],
                jobItem: [],
                workTimeItem: [],
                additionalInfoItem: [],
                cityItem: [],
                userLanguageErrorText: '',
                userJobErrorText: '',
                userWorkTimeErrorText: '',
                userDocumentErrorText: '',
                isEdit: false,
            },
        }

        this.baseState = this.state
        this.onChangeHandler = this.onChangeHandler.bind(this)
    }

    onSelectFieldChangeHandler(name) {
        const form = this
        return function(event, index, value) {
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
        return function(event, date) {
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

        this.loadInitialData()
    }

    onCheckHandler(type, name, isNeedTextBox) {
        const form = this
        return function(event, checked) {
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
                let enabled = false
                let name = ''
                if (type === 'userLanguage') {
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
                    <div key= { obj.id } className="col s12 valign-wrapper">
                        <div className={ "col" + (isNeedTextBox ? " s6" : " s12") }>
                            <Checkbox
                                checked = { checked }
                                value = { obj.id }
                                name = { name }
                                label = { obj.language || obj.job || obj.work_time || obj.info }
                                onCheck = { this.onCheckHandler(type, name, isNeedTextBox) }
                            />
                        </div>
                        {
                            isNeedTextBox ?
                                <div className="col s6">
                                    <TextValidator
                                        hintText={ 'Gaji ' + obj.work_time }
                                        fullWidth={ true }
                                        name="userWorkTime"
                                        disabled= { !enabled }
                                        value={ enabled ? values[curIdx].cost : '' }
                                        onChange={ (e) => this.onChangeTextHandler(e, curIdx) }
                                        validators={ [ isNeedTextBox ? ('required', 'isNumber') : '' ] }
                                        errorMessages={ [ isNeedTextBox ? ('Gaji dibutuhkan', 'Gaji harus angka') : '' ] }
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

    comments(comments) {
        const GetFormattedDate = date => {
            let dt = new Date(date)
            let mm = dt.getMonth() + 1
            let dd = dt.getDate()

            return [
                    (dd>9 ? '' : '0') + dd,
                    (mm>9 ? '' : '0') + mm,
                    dt.getFullYear()
                    ].join('/')
        }

        return comments.map((comment, id) => {
            return (
                <Card className="col s12" style={ id > 0 ? { marginTop: '10px' } : {}} key={ id }>
                    <CardHeader 
                        title={ comment.user_id.name }
                        subtitle={ GetFormattedDate(comment.created_at) }
                        avatar={ comment.user_id.avatar }
                        />
                    <CardText>
                        { comment.comment }
                    </CardText>
                </Card>
            )
        })
    }

    menuItems(collection, values) {
        if (collection && collection.length > 0) {
            return collection.map((obj, idx) => (
                <MenuItem
                    key = { obj.id }
                    value = { obj.id }
                    primaryText = { obj.name }
                />
            ))
        }
    }

    postHandler(e) {
        e.preventDefault()
        let isValid = true
        if (this.state.art.userLanguage.length <= 0) {
            isValid = false
            this.setState({
                userLanguageErrorText: "Pilih minimal 1 Bahasa yang dikuasai.",
            })
        }
        if (this.state.art.userJob.length <= 0) {
            isValid = false
            this.setState({
                userJobErrorText: "Pilih minimal 1 Profesi.",
            })
        }
        if (this.state.art.userWorkTime.length <= 0) {
            isValid = false
            this.setState({
                userWorkTimeErrorText: "Pilih minimal 1 Waktu Kerja.",
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
                    contact: {
                        phone: this.state.art.phone,
                        city: this.state.art.city,
                        address: this.state.art.address,
                        location: this.state.art.location,
                    },
                    religion: this.state.art.religion,
                    race: this.state.art.race,
                    user_type: this.state.art.user_type,
                    status: this.state.art.status,
                    user_wallet: { amt: 0 },
                    user_language: this.state.art.userLanguage,
                    user_job: this.state.art.userJob,
                    user_work_time: this.state.art.userWorkTime,
                    user_additional_info: this.state.art.userAdditionalInfo,
                    user_document: this.state.art.userDocument,
                }
            )
        }
    }
    
    onError(errors) {
        this.props.onUpdateSnack(true, "Telah terjadi " + errors.length + " kesalahan. Mohon periksa kembali form ini." )
    }
    
    render() {
        const calculateAge = (birthday) => {
            birthday = new Date(birthday)
            let ageDifMs = Date.now() - birthday.getTime()
            let ageDate = new Date(ageDifMs)
            return Math.abs(ageDate.getUTCFullYear() - 1970)
        }
        let age = calculateAge(this.state.art.born_date)
        console.log(this.state.art)
        return (
            <div>
                <div className="row">
                    {
                        this.state.art ?
                        <ValidatorForm
                            ref="form"
                            onSubmit={(e) => this.postHandler(e)}
                            onError={ errors => this.onError(errors) }>
                            <Card className="col s12" >
                                <CardText>
                                    <CardMedia
                                        className="col s12 m3"
                                        >
                                        {/* overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />} */}
                                        <img src={ this.state.art.avatar || '/img/profile.png' } alt="" />
                                    </CardMedia>
                                    <div className="col s12 m9" >
                                        {/* <CardTitle 
                                            title={ <div>{this.state.art.name} <small>({age} tahun)</small></div> } 
                                            subtitle={ this.state.art.description }
                                            /> */}
                                        <div className="row">
                                            <div className="col s12">
                                                {/* <div className="col s12">
                                                    <h6><b>Detail</b></h6>
                                                </div> */}
                                                <Paper zDepth={0}>
                                                    <div className="col s12">
                                                        <TextValidator
                                                            floatingLabelText="Nama"
                                                            hintText="Nama"
                                                            name="name"
                                                            fullWidth={ true }
                                                            underlineShow={ false }
                                                            disabled={!this.state.art.isEdit}
                                                            value={ this.state.art.name || '' }
                                                            onChange={ this.onChangeHandler }
                                                            autoComplete={ false }
                                                            validators={[ 'required' ]}
                                                            errorMessages={[ 'Nama dibutuhkan' ]}
                                                        />
                                                    </div>
                                                    <div className="col s12">
                                                        <SelectValidator
                                                            floatingLabelText="Gender"
                                                            hintText="Gender"
                                                            value={ this.state.art.gender }
                                                            fullWidth={ true }
                                                            underlineShow={ false }
                                                            disabled={!this.state.art.isEdit}
                                                            name="gender"
                                                            onChange={ this.onSelectFieldChangeHandler('gender') }
                                                            validators={[ 'required' ]}
                                                            errorMessages={[ 'Gender dibutuhkan' ]}
                                                            >
                                                            <MenuItem value={1} primaryText="Pria" />
                                                            <MenuItem value={2} primaryText="Wanita" />
                                                        </SelectValidator>
                                                    </div>
                                                    <div className="col s6" >
                                                        <TextValidator
                                                            floatingLabelText="Tempat Lahir"
                                                            hintText="Tempat Lahir"
                                                            underlineShow={ false }
                                                            disabled={!this.state.art.isEdit}
                                                            value={this.state.art.born_place || ''}
                                                            fullWidth={true}
                                                            name="born_place"
                                                            onChange={this.onChangeHandler}
                                                            autoComplete={false}
                                                            validators={['required']}
                                                            errorMessages={['Tempat Lahir dibutuhkan']}
                                                        />
                                                    </div>
                                                    <div className="col s6" >
                                                        <DateValidator
                                                            hintText="Tanggal Lahir"
                                                            floatingLabelText="Tanggal Lahir"
                                                            underlineShow={ false }
                                                            disabled={!this.state.art.isEdit}
                                                            value={new Date(this.state.art.born_date)}
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
                                                    <div className="col s12">
                                                        <SelectValidator
                                                            floatingLabelText="Kota"
                                                            hintText="Kota"
                                                            underlineShow={ false }
                                                            disabled={!this.state.art.isEdit}
                                                            value={this.state.art.city}
                                                            name="city"
                                                            fullWidth={true}
                                                            onChange={this.onSelectFieldChangeHandler('city')}
                                                            validators={['required']}
                                                            errorMessages={['Kota dibutuhkan']}
                                                            >
                                                            { this.menuItems(this.state.art.cityItem, this.state.art.city) } 
                                                        </SelectValidator>
                                                    </div>
                                                    <div className="col s12">
                                                        <TextValidator
                                                            hintText="Alamat"
                                                            floatingLabelText="Alamat"
                                                            underlineShow={ false }
                                                            disabled={!this.state.art.isEdit}
                                                            value={this.state.art.address}
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
                                                    </div>
                                                    {/* location */}
                                                    <div className="col s12">
                                                        <SelectValidator
                                                            floatingLabelText="Agama"
                                                            value={this.state.art.religion}
                                                            underlineShow={ false }
                                                            disabled={!this.state.art.isEdit}
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
                                                    </div>
                                                    <div className="col s12">
                                                        <TextField
                                                            hintText="Suku"
                                                            floatingLabelText="Suku"
                                                            underlineShow={ false }
                                                            disabled={!this.state.art.isEdit}
                                                            fullWidth={true}
                                                            value={this.state.art.race}
                                                            name="race"
                                                            onChange={this.onChangeHandler}
                                                            autoComplete={false}
                                                        />
                                                    </div>
                                                    <div className="col s12">
                                                        <fieldset>
                                                            <legend>Bahasa yang dikuasai</legend>
                                                            { this.checkItems('userLanguage', this.state.art.languageItem) }
                                                            { this.errorText('userLanguageErrorText')}
                                                        </fieldset>
                                                    </div>
                                                    <div className="col s12">
                                                        <fieldset>
                                                            <legend>Profesi</legend>
                                                            { this.checkItems('userJob', this.state.art.jobItem) }
                                                            { this.errorText('userJobErrorText')}
                                                        </fieldset>
                                                    </div>
                                                    <div className="col s12">
                                                        <fieldset>
                                                            <legend>Waktu Kerja</legend>
                                                            { this.checkItems('userWorkTime', this.state.art.workTimeItem, true) }
                                                            <br/>
                                                            { this.errorText('userWorkTimeErrorText')}
                                                            <div></div>
                                                        </fieldset>
                                                    </div>
                                                    <div className="col s12">
                                                        <fieldset>
                                                            <legend>Informasi Tambahan</legend>
                                                            { this.checkItems('userAdditionalInfo', this.state.art.additionalInfoItem) }
                                                        </fieldset>
                                                    </div>

                                                    <div className="input-field col hide-on-small-only m6">&nbsp;
                                                    </div>
                                                    <div className="input-field col s12 m6">
                                                        <RaisedButton 
                                                            label="Simpan" 
                                                            fullWidth={true} 
                                                            type="submit"/>
                                                    </div>
                                                </Paper>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <Card className="col s12" style={{ marginTop: '10px', paddingBottom: '10px' }}>
                                        <CardTitle title="Komentar" />
                                        <CardText>
                                            { 
                                                this.state.art.comment ? 
                                                this.comments(this.state.art.comment) 
                                                :
                                                'Tidak ada komentar.'
                                            } 
                                        </CardText>
                                    </Card> */}
                                    <div className="clearfix"></div>
                                </CardText>
                            </Card>
                        </ValidatorForm>
                        :
                        <Card className="col s12" >
                            <CardHeader title="ART tidak ditemukan" />
                        </Card>
                    }
                </div>
            </div>
        )
    }
}

ArtDetail.propTypes = {
    id: PropTypes.string.isRequired,
    getArt: PropTypes.func.isRequired,
}

export default ArtDetail