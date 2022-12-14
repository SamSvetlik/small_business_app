import { connect } from 'react-redux'
import Listings from '../components/Listings'
import {setUser} from '../redux/actions'

const mapStateToProps = (state) => {
    return {
        businesses: state.businesses,
    }
}

export default connect(mapStateToProps)(Listings)
