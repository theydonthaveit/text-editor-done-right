import Index from './Index'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
// import {  } from '../../actions/'


const mapStatToProps = (state) => {
    return {}
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        // actions
    }, dispatch);
};

export default connect(mapStatToProps, mapDispatchToProps)(Index)