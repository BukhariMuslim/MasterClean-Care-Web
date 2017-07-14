import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { ValidatorForm, TextValidator, SelectValidator, DateValidator} from 'react-material-ui-form-validator'
import Paper from 'material-ui/Paper'
import Checkbox from 'material-ui/Checkbox';
import TextField from 'material-ui/TextField'
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'
import Divider from 'material-ui/Divider'
import DatePicker from 'material-ui/DatePicker'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentClear from 'material-ui/svg-icons/content/clear'
import NotificationContainer from '../containers/NotificationContainer'
import LoadingSpinContainer from '../containers/LoadingSpinContainer'

const style = {
    margin: 12,
}

const DateTimeFormat = global.Intl.DateTimeFormat

class RegisterArt extends Component {
    constructor(props){
        super(props)
        this.state = {
            isValid: true,
            email: '',
            password: '',
            re_password: '',
            name: '',
            gender: null,
            born_place: '',
            born_date: null,
            phone: '',
            province: '',
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
            provinceItem: [],
            cityItem: [],
        }
        this.baseState = this.state
        this.onChangeHandler = this.onChangeHandler.bind(this);
    }

    loadInitialData() {
        this.props.getPlace(this, 'provinceItem', 0)

        this.props.getLanguage(this, 'languageItem')

        this.props.getJob(this, 'jobItem')

        this.props.getWorkTime(this, 'workTimeItem')

        this.props.getAdditionalInfo(this, 'additionalInfoItem')
    }

    componentWillMount() {
        ValidatorForm.addValidationRule('isPasswordMatch', (value) => {
            if (value !== this.state.password) {
                return false;
            }
            return true;
        });
    }

    componentDidMount() {
        this.loadInitialData()    
    }

    menuItems(collection, values) {
        return collection.map((obj, idx) => (
            <MenuItem
                key = { obj.id }
                value = { obj.id }
                primaryText = { obj.name }
            />
        ));
    }

    checkItems(type, collection, isNeedTextBox) {
        return collection.map((obj, idx) => {
            const values = this.state[type]
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
                curIdx = values.findIndex(x => x.additional_info_id == obj.id)
                name = 'additional_info_id'
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
                            onCheck = { this.onCheckHandler(type, isNeedTextBox) }
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
        });
    }

    resetForm() {
        this.setState(this.baseState)
        this.loadInitialData()    
    }

    registerHandler(e) {
        e.preventDefault()
        
        this.props.onRegister(
            this,
            {
                name: this.state.name,
                email: this.state.email,
                password: this.state.password,
                gender: this.state.gender,
                born_place: this.state.born_place,
                born_date: this.state.born_date,
                phone: this.state.phone,
                province: this.state.province,
                city: this.state.city,
                address: this.state.address,
                religion: this.state.religion,
                location: this.state.location,
                race: this.state.race,
                user_type: this.state.user_type,
                status: this.state.status,
                userWallet: [{ amt: 0 }],
                userLanguage: this.state.userLanguage,
                userJob: this.state.userJob,
                userWorkTime: this.state.userWorkTime,
                userAdditionalInfo: this.state.userAdditionalInfo,
                userDocument: this.state.userDocument,
            }
        )
    }

    onChangeHandler(e) {
        const target = e.target
        const value = target.value
        const name = target.name

        this.setState({ [name]: value })
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

    onChangeDateHandler(name) {
        const form = this
        return function(event, date) {
            form.setState({ [name]: date })
        }
    }

    onSelectFieldChangeHandler(name) {
        const form = this
        return function(event, index, value) {
            if (name == 'province') {
                form.props.getPlace(form, 'cityItem', value)
            }
            form.setState({ [name]: value })
        }
    }

    onCheckHandler(name, isNeedTextBox) {
        const form = this
        return function(event, checked) {
            const target = event.target
            const value = target.value
            let old = form.state[name]
            const idx = old.findIndex(x => x.work_time_id === value)
            if (!isNeedTextBox) {
                if (checked && idx === -1) {
                    old.push({
                        [target.name]: value
                    })
                }
                else if (idx > -1) {
                    old.splice(idx, 1)
                }
            }
            else {
                if (checked && idx === -1) {
                    old.push({
                        work_time_id: target.value,
                        cost: 0,
                    })
                }
                else if (idx > -1) {
                    old.splice(idx, 1)
                }
            }
            form.setState({ [name]: old })
        }
    }

    onError(errors) {
        this.props.onUpdateSnack(true, "Telah terjadi " + errors.length + " kesalahan. Mohon periksa kembali form ini." )
    }

    render() {
        return (
            <div>
                <div className="row" style={{ marginTop: '15px'}}>
                    <FloatingActionButton 
                        containerElement={<Link to="/" />}
                        mini={ true }
                        backgroundColor="#fff"
                        iconStyle={{ fill: '#555' }}
                        style={{
                            margin: 0,
                            top: -5,
                            right: 20,
                            bottom: 'auto',
                            left: 'auto',
                            position: 'relative',
                        }}>
                        <ContentClear />
                    </FloatingActionButton>
                    <div className="col m2 xl3 hide-on-small-only"></div>
                    <Paper className="col s12 m8 xl6" zDepth={1} style={{ margin: "10px auto", padding: "10px" }}>
                        <ValidatorForm
                            ref="form"
                            onSubmit={(e) => this.registerHandler(e)}
                            onError={ errors => this.onError(errors) }>
                            <div className="row">
                                <div className="col s12">
                                    <h4 className="center-align">Mendaftar Sebagai ART</h4>
                                </div>
                                <div className="col s12">
                                    <TextValidator
                                        floatingLabelText="Email"
                                        fullWidth={true}
                                        name="email"
                                        value={this.state.email}
                                        onChange={this.onChangeHandler}
                                        autoComplete={false}
                                        validators={['required', 'isEmail']}
                                        errorMessages={['Email dibutuhkan', 'Email tidak valid']}
                                    />
                                </div>
                                <div className="col s12">
                                    <TextValidator
                                        floatingLabelText="Password"
                                        type="password"
                                        value={this.state.password}
                                        fullWidth={true}
                                        name="password"
                                        onChange={this.onChangeHandler}
                                        validators={['required']}
                                        errorMessages={['Password dibutuhkan']}
                                    />
                                </div>
                                <div className="col s12">
                                    <TextValidator
                                        hintText="Re-Password"
                                        floatingLabelText="Re-Password"
                                        type="password"
                                        value={this.state.re_password}
                                        fullWidth={true}
                                        name="re_password"
                                        onChange={this.onChangeHandler}
                                        validators={['isPasswordMatch', 'required']}
                                        errorMessages={['Re-Password tidak cocok', 'Re-Password dibutuhkan']}
                                    />
                                </div>
                                <Divider/>
                                <div className="col s12">
                                    <TextValidator
                                        hintText="Nama"
                                        floatingLabelText="Nama"
                                        value={this.state.name}
                                        fullWidth={true}
                                        name="name"
                                        onChange={this.onChangeHandler}
                                        autoComplete={false}
                                        validators={['required']}
                                        errorMessages={['Nama dibutuhkan']}
                                    />
                                </div>
                                <div className="col s12">
                                    <SelectValidator
                                        floatingLabelText="Gender"
                                        value={this.state.gender}
                                        fullWidth={true}
                                        name="gender"
                                        onChange={this.onSelectFieldChangeHandler('gender')}
                                        validators={['required']}
                                        errorMessages={['Gender dibutuhkan']}
                                        >
                                        <MenuItem value={1} primaryText="Pria" />
                                        <MenuItem value={2} primaryText="Wanita" />
                                    </SelectValidator>
                                </div>
                                <div className="col s12 m6">
                                    <TextValidator
                                        hintText="Tempat Lahir"
                                        floatingLabelText="Tempat Lahir"
                                        value={this.state.born_place}
                                        fullWidth={true}
                                        name="born_place"
                                        onChange={this.onChangeHandler}
                                        autoComplete={false}
                                        validators={['required']}
                                        errorMessages={['Tempat Lahir dibutuhkan']}
                                    />
                                </div>
                                <div className="col s12 m6">
                                    <DateValidator
                                        hintText="Tanggal Lahir"
                                        floatingLabelText="Tanggal Lahir"
                                        value={this.state.born_date}
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
                                    <TextValidator
                                        hintText="No. Telepon"
                                        floatingLabelText="No. Telp"
                                        value={this.state.phone}
                                        fullWidth={true}
                                        name="phone"
                                        onChange={this.onChangeHandler}
                                        autoComplete={false}
                                        validators={['required']}
                                        errorMessages={['No. Telepon dibutuhkan']}
                                    />
                                </div>
                                <div className="col s12">
                                    <SelectValidator
                                        floatingLabelText="Provinsi"
                                        value={this.state.province}
                                        name="province"
                                        fullWidth={true}
                                        onChange={this.onSelectFieldChangeHandler('province')}
                                        validators={['required']}
                                        errorMessages={['Provinsi dibutuhkan']}
                                        >
                                        { this.menuItems(this.state.provinceItem, this.state.province) }
                                    </SelectValidator>
                                </div>
                                <div className="col s12">
                                    <SelectValidator
                                        floatingLabelText="Kota"
                                        value={this.state.city}
                                        name="city"
                                        fullWidth={true}
                                        onChange={this.onSelectFieldChangeHandler('city')}
                                        validators={['required']}
                                        errorMessages={['Kota dibutuhkan']}
                                        >
                                        { this.menuItems(this.state.cityItem, this.state.city) }
                                    </SelectValidator>
                                </div>
                                <div className="col s12">
                                    <TextValidator
                                        hintText="Alamat"
                                        floatingLabelText="Alamat"
                                        value={this.state.address}
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
                                        value={this.state.religion}
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
                                        fullWidth={true}
                                        value={this.state.race}
                                        name="race"
                                        onChange={this.onChangeHandler}
                                        autoComplete={false}
                                    />
                                </div>
                                {/* user_type */}
                                {/* profile_img_name */}
                                {/* profile_img_path */}
                                {/* status */}
                                <div className="col s12">
                                    <fieldset>
                                        <legend>Bahasa yang dikuasai</legend>
                                        { this.checkItems('userLanguage', this.state.languageItem) }
                                    </fieldset>
                                </div>
                                <div className="col s12">
                                    <fieldset>
                                        <legend>Profesi</legend>
                                        { this.checkItems('userJob', this.state.jobItem) }
                                    </fieldset>
                                </div>
                                <div className="col s12">
                                    <fieldset>
                                        <legend>Waktu Kerja</legend>
                                        { this.checkItems('userWorkTime', this.state.workTimeItem, true) }
                                    </fieldset>
                                </div>
                                <div className="col s12">
                                    <fieldset>
                                        <legend>Informasi Tambahan</legend>
                                        { this.checkItems('userAdditionalInfo', this.state.additionalInfoItem) }
                                    </fieldset>
                                </div>

                                <div className="input-field col s12 m6">
                                    <FlatButton
                                        label="Login"
                                        fullWidth={true} 
                                        containerElement={<Link to="/login" />}
                                        />
                                </div>
                                <div className="input-field col s12 m6">
                                    <RaisedButton 
                                        label="Daftar" 
                                        fullWidth={true} 
                                        type="submit"/>
                                </div>                      
                            </div>
                        </ValidatorForm>
                    </Paper>
                </div>
                <NotificationContainer />
                <LoadingSpinContainer />
            </div>
        )
    }
}

RegisterArt.propTypes = {
    onRegister: PropTypes.func.isRequired,
}

export default RegisterArt