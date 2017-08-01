import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TextField from 'material-ui/TextField'

class SearchBar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            search: ''
        }
    }

    onChangeHandler(e) {
        const target = e.target
        const value = target.value
        const name = target.name

        this.setState({ [name]: value })

        this.props.onSearchClick(value)
    }

    render() {
        return (
            <div>
                <TextField
                    hintText="Insert key to search..."
                    floatingLabelText="Search"
                    fullWidth={true}
                    name="search"
                    value={this.state.search}
                    onChange={(e) => this.onChangeHandler(e)}
                />
            </div>
        )
    }
}

SearchBar.propTypes = {
    onSearchClick: PropTypes.func.isRequired
}

export default SearchBar