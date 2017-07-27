import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Card, CardActions, CardHeader, CardTitle, CardText } from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import App from './App'

class Art extends Component {
    constructor(props){
        super(props)
    }

    componentDidMount() {
        this.props.getArticle()
    }

    artList(collection) {
        return collection.map((obj, idx) => {
            if (idx < this.props.maxItem || !this.props.maxItem) {
                return (
                    <div className="row" key={ obj.id } style={{ padding: '10px' }}>
                        <Card>
                            <CardTitle title={ obj.title } />
                            <CardText>
                                { 
                                    obj.content.length > 200 ?
                                    obj.content.substring(0, 200) + '...'
                                    :
                                    obj.content
                                }
                            </CardText>
                            <CardActions className="right-align">
                                <FlatButton 
                                    label="Selengkapnya..." 
                                    containerElement={ <Link to={ "/art/" + obj.id } /> }
                                    />
                            </CardActions>
                        </Card>
                    </div>
                )
            }
        })
    }

    render() {
        const { art } = this.props;
        return (
            <div>
                {
                    art.length >0 ?
                    this.artList(art)
                    :
                    <small>Tidak ada ART ditemukan</small>
                }
            </div>
        )
    }
}

Art.propTypes = {
    Art: PropTypes.array.isRequired,
    getArt: PropTypes.func.isRequired,
}

export default Art