import { connect } from 'react-redux'
import Businesses from '../components/Businesses'
import {setUser} from '../redux/actions'

const mapStateToProps = (state) => {
    return {
        businesses: state.businesses,
    }
}

export default connect(mapStateToProps)(Businesses)
