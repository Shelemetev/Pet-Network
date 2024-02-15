import { compose } from "redux";
import { connect } from 'react-redux';
import Profile from './Profile';
import { getStatusAuthorization } from "../../store/store-selectors/auth-selector";
import { RedirectHOC } from './../../HOC/RedirectHOC';
import { stopLoader } from './../../store/searching-reducer';

const mapStateToProps = (state) => {
    return {
        statusAuthorization : getStatusAuthorization(state)
    }
}



const ProfileContainer = compose(
    connect(mapStateToProps,
        {
            stopLoader
        }),
    RedirectHOC,
)(Profile)

export default ProfileContainer