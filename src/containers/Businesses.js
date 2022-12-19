import { connect } from 'react-redux'
import Businesses from '../components/Businesses'
import { removeIndex } from '../redux/actions'

const mapStateToProps = (state) => {
    return {
        businesses: state.businesses,
    }
}

const mapDispatchToProps = (dispach) => {
    return {
        removeIndex: (index) => dispach(removeIndex(index))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Businesses)
