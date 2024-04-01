import { connect } from 'react-redux';
import Store from './Store';
import { stopLoader } from './../../store/searching-reducer';
import { compose } from 'redux';
import { RedirectHOC } from './../../HOC/RedirectHOC';
import { getStatusAuthorization } from './../../store/store-selectors/auth-selector';
import { getInventoryThunk } from '../../store/store-reducer';
import { getDataStatus, getDataStatusFounding } from '../../store/store-selectors/store-selector';

const mapStateToProps = (state) => {
    return {
        statusAuthorization : getStatusAuthorization(state),
        dataStatus: getDataStatus(state),
        dataStatusFounding : getDataStatusFounding(state)
    }
}

const StoreContainer = compose(
    connect(mapStateToProps,{
        stopLoader,
        getInventoryThunk
    }),
    RedirectHOC
)(Store)

export default StoreContainer