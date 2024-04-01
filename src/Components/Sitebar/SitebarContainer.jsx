import { connect } from 'react-redux';
import Sitebar from './Sitebar';
import { getUserName } from '../../store/store-selectors/profile-selector';
import { logoutThunk } from './../../store/auth-reducer';
import { startLoader, stopLoader } from './../../store/searching-reducer';

const mapStateToProps = (state) => {
    return {
        username: getUserName(state)
    }
}

const SitebarContainer = connect(mapStateToProps,{logoutThunk, startLoader, stopLoader})(Sitebar)

export default SitebarContainer