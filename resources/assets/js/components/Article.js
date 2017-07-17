import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'

class Article extends Component {
    constructor(props){
        super(props)

        this.state = {
            article: [
                {
                    id: 1,
                    title: "Judul",
                    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque. Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.",
                },
                {
                    id: 2,
                    title: "Judul Lagi",
                    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque. Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.",
                },
                {
                    id: 3,
                    title: "Judul Lainnya",
                    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque. Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.",
                },
            ],
        }
    }

    artilceList(collection) {
        return collection.map((obj, idx) => {
            return (
                <div className="row" key={ obj.id }>
                    <Card>
                        <CardHeader title={ obj.title } />
                        <CardText>
                            { obj.content }
                        </CardText>
                        <CardActions className="right-align">
                            <FlatButton 
                                label="Selengkapnya..." 
                                containerElement={ <Link to={ "/article/" + obj.id } /> }
                                />
                        </CardActions>
                    </Card>
                </div>
            )
        })
    }

    render() {
        const { article } = this.state;

        return (
            <div>
                { this.artilceList(article) }
            </div>
        )
    }
}

Article.propTypes = {

}

export default Article