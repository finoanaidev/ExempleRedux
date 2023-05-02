import {connect } from 'react-redux'
import  component  from './component'
const mapStateToProps = state => {
    return {
        count: state
    }
}
const mapDispatchProps = dispatch => {
    return {
        handleIncrementClick: () => dispatch({type: 'INCREMENT'}),
        handleDecrementClick: () => dispatch({type: 'DECREMENT'})
    }
}
const Container = connect(mapStateToProps,mapDispatchProps)(component)
export default Container