import { compose } from "redux";
import { connect } from 'react-redux';
import Profile from './Profile';
import { getStatusAuthorization } from "../../store/store-selectors/auth-selector";
import { RedirectHOC } from './../../HOC/RedirectHOC';

const mapStateToProps = (state) => {
    return {
        statusAuthorization : getStatusAuthorization(state)
    }
}

const mapDispatchToProps = () => {
    return {
        
    }
}

const ProfileContainer = compose(
    connect(mapStateToProps,mapDispatchToProps),
    RedirectHOC
)(Profile)

export default ProfileContainer