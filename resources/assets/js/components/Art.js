import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Card, CardActions, CardHeader, CardTitle, CardText } from 'material-ui/Card'
import { GridList, GridTile } from 'material-ui/GridList'
import Subheader from 'material-ui/Subheader'
import IconButton from 'material-ui/IconButton'
import StarBorder from 'material-ui/svg-icons/toggle/star-border'
import FlatButton from 'material-ui/FlatButton'
import App from './App'

const styles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    gridList: {
        display: 'flex',
        flexWrap: 'nowrap',
        overflowX: 'auto',
    },
    titleStyle: {
        color: 'rgb(255, 255, 255)',
    },
    rateStyle: {
        width: '7px',
        height: '7px',
    },
};

class Art extends Component {
    constructor(props){
        super(props)
    }

    componentDidMount() {
        this.props.getArt()
    }

    artList(collection) {
        
        if (this.props.sortBy) {
            let sort = this.props.sortBy
            collection.sort(function(a, b) {
                return parseFloat(b[sort]) - parseFloat(a[sort])
            })
        }

        return collection.map((obj, idx) => {
            if (idx < this.props.maxItem || !this.props.maxItem) {
                const calculateAge = (birthday) => {
                    birthday = new Date(birthday)
                    let ageDifMs = Date.now() - birthday.getTime()
                    let ageDate = new Date(ageDifMs)
                    return Math.abs(ageDate.getUTCFullYear() - 1970)
                }
                let age = calculateAge(obj.born_date)
                return (
                    <GridTile
                        key={ idx }
                        title={ obj.name }
                        subtitle={ age + " thn" }
                        titleStyle={ styles.titleStyle }
                        titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
                        containerElement={ <Link to={ "/art/" + obj.id } /> }
                        >
                        <img src={ obj.avatar || '/img/profile.png' } />
                    </GridTile>
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
                    <GridList style={ styles.gridList } cols={ 2.2 }>
                        { this.artList(art) }
                    </GridList>
                    :
                    <small>Tidak ada ART ditemukan</small>
                }
            </div>
        )
    }
}

Art.propTypes = {
    art: PropTypes.array.isRequired,
    getArt: PropTypes.func.isRequired,
}

export default Art