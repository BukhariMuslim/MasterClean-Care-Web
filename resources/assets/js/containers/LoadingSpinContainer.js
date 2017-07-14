import { connect } from 'react-redux'
import LoadingSpin from '../components/LoadingSpin'

const mapStateToProps = (state) => {
    return {
        show: state.LoadingSpinReducer.show
    }
}

const mapDispatchToProps = (dispatch) => {
    return { }
}

const LoadingSpinContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(LoadingSpin)

export default LoadingSpinContainer