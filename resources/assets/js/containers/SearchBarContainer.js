import { connect } from 'react-redux'
import { filterTodo, updateSnack } from '../actions/DefaultAction'
import SearchBar from '../components/SearchBar'
import axios from 'axios'

const mapStateToProps = (state) => {
    return {
        state
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onSearchClick: (search) => {
            axios.post('http://httpbin.org/post', {
                search: search
            })
            .then(function (response) {
                let status = undefined
                if (status === undefined) {
                    dispatch(filterTodo(JSON.parse(response.data.data).search))
                }
                else {
                    dispatch(updateSnack(status))
                }
            })
            .catch(function (error) {
                dispatch(updateSnack({
                    open: true,
                    message: error.name + ": " + error.message
                }))
            })
        }
    }
}

const SearchBarContainer = connect(
    mapStateToProps,
    mapDispatchToProps    
)(SearchBar)

export default SearchBarContainer
