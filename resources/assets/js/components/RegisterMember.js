import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { ValidatorForm, TextValidator, SelectValidator, DateValidator } from 'react-material-ui-form-validator'
import Paper from 'material-ui/Paper'
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

class RegisterMember extends Component {
  constructor(props) {
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
      city: '',
      address: '',
      location: '',
      religion: null,
      race: '',
      avatar: '',
      avatarUrl: '',
      avatarFile: null,
      user_type: 1,
      status: 1,
      cityItem: [],
    }
    this.baseState = this.state
    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  loadInitialData() {
    this.props.getPlace(this, 'cityItem')
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
        key={obj.id}
        value={obj.id}
        primaryText={obj.name}
      />
    ));
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
        avatar: this.state.avatar,
        contact: {
          phone: this.state.phone,
          city: this.state.city,
          address: this.state.address,
          location: this.state.location,
        },
        religion: this.state.religion,
        race: this.state.race,
        user_type: this.state.user_type,
        status: this.state.status,
      }
    )
  }

  onChangeHandler(e) {
    const target = e.target
    const value = target.value
    const name = target.name

    this.setState({ [name]: value })
  }

  onChangeDateHandler(name) {
    const form = this
    return function (event, date) {
      form.setState({ [name]: date })
    }
  }

  onSelectFieldChangeHandler(name) {
    const form = this
    return function (event, index, value) {
      form.setState({ [name]: value })
    }
  }

  onError(errors) {
    this.props.onUpdateSnack(true, "Telah terjadi " + errors.length + " kesalahan. Mohon periksa kembali form ini.")
  }

  _handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let avatar = e.target.files[0];
    e.target.value = ''

    reader.onloadend = () => {
      this.setState({
        avatarFile: avatar,
        avatarUrl: reader.result,
      })
      this.props.onUploadImage(this, reader.result)
    }

    reader.readAsDataURL(avatar)

  }

  _handleClearImage(e) {
    e.preventDefault();

    this.setState({
      avatarFile: [],
      avatarUrl: '',
    });
  }
  
  render() {
    let { avatarUrl } = this.state;
    let $imagePreview = null;
    if (avatarUrl) {
      $imagePreview = (<Paper className="col s12" zDepth={1} style={{ marginTop: 15, padding: 15 }}><img src={avatarUrl} className="responsive-img"/></Paper>);
    } else {
      null
    }

    return (
      <div>
        <div className="row" style={{ marginTop: 15 }}>
          <FloatingActionButton
            containerElement={<Link to="/" />}
            mini={true}
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
          <Paper className="col s12 m8 xl6" zDepth={1} style={{ margin: '10px auto', padding: '10px' }}>
            <ValidatorForm
              ref="form"
              encType="multipart/form-data"
              onSubmit={(e) => this.registerHandler(e)}
              onError={errors => this.onError(errors)}>
              <div className="row">
                <div className="col s12">
                  <h4 className="center-align">Mendaftar Sebagai Member</h4>
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
                <Divider />
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
                    floatingLabelText="Kota"
                    value={this.state.city}
                    name="city"
                    fullWidth={true}
                    onChange={this.onSelectFieldChangeHandler('city')}
                    validators={['required']}
                    errorMessages={['Kota dibutuhkan']}
                  >
                    {this.menuItems(this.state.cityItem, this.state.city)}
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
                <div className="col s12">
                  <RaisedButton
                    containerElement='label' // <-- Just add me!
                    label='Tambah Foto Profile'>
                      <input type="file" 
                        style={{ display: 'none' }} 
                        name="avatar"
                        onChange={(e)=>this._handleImageChange(e)} />
                  </RaisedButton>&nbsp;
                  <FlatButton
                    label='Hapus Foto'
                    className={ avatarUrl ? '' : 'hide' }
                    onClick={(e)=>this._handleClearImage(e)}
                    />
                  <div className="imgPreview">
                    {$imagePreview}
                  </div>
                </div>
                {/* user_type */}
                {/* profile_img_name */}
                {/* profile_img_path */}
                {/* status */}
                <div className="input-field col s12 m6">
                  <FlatButton
                    label="Login"
                    fullWidth={true}
                    containerElement={<Link to="/login" />}
                  />
                </div>
                <div className="input-field col s12 m6">
                  <RaisedButton
                    primary={true}
                    label="Daftar"
                    fullWidth={true}
                    type="submit" />
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

RegisterMember.propTypes = {
  onRegister: PropTypes.func.isRequired,
}

export default RegisterMember