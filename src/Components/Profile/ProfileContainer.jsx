import { compose } from "redux";
import { connect } from 'react-redux';
import Profile from './Profile';
import { getStatusAuthorization } from "../../store/store-selectors/auth-selector";
import { RedirectHOC } from './../../HOC/RedirectHOC';
import { stopLoader,startLoader } from './../../store/searching-reducer';
import { getData } from "../../store/store-selectors/profile-selector";
import { changeDataThunk, deleteUserThunk } from './../../store/profile-reducer';

const mapStateToProps = (state) => {
    return {
        statusAuthorization : getStatusAuthorization(state),
        data : getData(state)
    }
}



const ProfileContainer = compose(
    connect(mapStateToProps,
        {
            stopLoader,
            changeDataThunk,
            startLoader,
            deleteUserThunk
        }),
    RedirectHOC,
)(Profile)

export default ProfileContainer