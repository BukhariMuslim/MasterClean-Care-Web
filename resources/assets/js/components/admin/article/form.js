import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card'
import { ValidatorForm, TextValidator, SelectValidator, DateValidator} from 'react-material-ui-form-validator'
import FlatButton from 'material-ui/FlatButton'
import TextField from 'material-ui/TextField'
import DatePicker from 'material-ui/DatePicker'

class form extends Component {
    constructor(props){
        super(props)

        this.state = {
            title: '',
            tag: '',
            description: '',
            published_date: null,
        }
        
        this.baseState = this.state
        this.onChangeHandler = this.onChangeHandler.bind(this);
    }

    componentWillMount() {
        if (this.props.article.isEdit) {
            this.setState({
                title: this.props.article.title,
                tag: this.props.article.tag,
                description: this.props.article.description,
                published_date: this.props.article.published_date,
            })
        }
    }

    postHandler(e) {
        e.preventDefault()
        
        this.props.onPost(
            this,
            {
                title: this.state.title,
                tag: this.state.tag,
                description: this.state.description,
                published_date: this.state.published_date,
            }
        )
    }

    resetForm() {
        this.setState(this.baseState)
    }

    onChangeHandler(e) {
        const target = e.target
        const value = target.value
        const name = target.name

        this.setState({ [name]: value })
    }

    onChangeDateHandler(name) {
        const form = this
        return function(event, date) {
            form.setState({ [name]: date })
        }
    }

    onError(errors) {
        this.props.onUpdateSnack(true, "Telah terjadi " + errors.length + " kesalahan. Mohon periksa kembali form ini." )
    }

    render() {
        const { article } = this.state;

        return (
            <div>
                <div className="row">
                    <ValidatorForm
                        ref="form"
                        onSubmit={(e) => this.postHandler(e)}
                        onError={ errors => this.onError(errors) }>
                        <div className="col s12">
                            <div className="col s12">
                                <h4 className="center-align">Artikel</h4>
                            </div>
                            <div className="col s12">
                                <TextValidator
                                    floatingLabelText="Judul"
                                    fullWidth={true}
                                    name="judul"
                                    value={this.state.judul}
                                    onChange={this.onChangeHandler}
                                    autoComplete={false}
                                    validators={['required']}
                                    errorMessages={['Judul dibutuhkan']}
                                />
                            </div>
                            <div className="col s12">
                                <TextValidator
                                    floatingLabelText="Tag"
                                    fullWidth={true}
                                    name="tag"
                                    value={this.state.tag}
                                    onChange={this.onChangeHandler}
                                    autoComplete={false}
                                />
                            </div>
                            <div className="col s12">
                                <DateValidator
                                    hintText="Tanggal Publikasi"
                                    floatingLabelText="Tanggal Publikasi"
                                    value={this.state.published_date}
                                    onChange={this.onChangeDateHandler('published_date')}
                                    name="published_date"
                                    autoOk={true}
                                    fullWidth={true}
                                    formatDate={new DateTimeFormat('id-ID', {
                                        day: 'numeric',
                                        month: 'long',
                                        year: 'numeric',
                                    }).format}
                                    validators={['required']}
                                    errorMessages={['Tanggal Publikasi dibutuhkan']}
                                />
                            </div>
                            <div className="col s12">
                                <TextValidator
                                    floatingLabelText="Isi"
                                    fullWidth={true}
                                    name="content"
                                    value={this.state.content}
                                    onChange={this.onChangeHandler}
                                    autoComplete={false}
                                    validators={['required']}
                                    errorMessages={['Judul dibutuhkan']}
                                />
                            </div>
                        </div>
                    </ValidatorForm>
                </div>
            </div>
        )
    }
}

form.propTypes = {
    
}

export default form