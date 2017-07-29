import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Card, CardActions, CardHeader, CardTitle, CardText } from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import App from './App'

class Offer extends Component {
    constructor(props){
        super(props)
    }

    componentDidMount() {
        this.props.getOffer()
    }

    offerList(collection) {
        return collection.map((obj, idx) => {
            if (idx < this.props.maxItem || !this.props.maxItem) {
                return (
                    <div key={ obj.id } style={{ padding: '10px' }}>
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
                                    containerElement={ <Link to={ "/offer/" + obj.id } /> }
                                    />
                            </CardActions>
                        </Card>
                    </div>
                )
            }
        })
    }

    render() {
        const { offer } = this.props;
        return (
            <div>
                {
                    offer.length >0 ?
                    this.offerList(offer)
                    :
                    <small>Tidak ada artikel ditemukan</small>
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