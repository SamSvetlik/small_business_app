import { connect } from 'react-redux'
import Home from '../components/Home'
import {setUser} from '../redux/actions'

const mapStateToProps = (state) => {
    return {
        user: state.user,
    }
}

export default connect(mapStateToProps)(Home)
