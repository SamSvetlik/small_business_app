import { connect } from 'react-redux'
import Login from '../components/Login'
import {setUser} from '../redux/actions'

const mapStateToProps = (state) => {
    return {
        user: state.user,
    }
}

const mapDispatchToProps = (dispach) => {
    return {
        setUser: (user) => dispach(setUser(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
