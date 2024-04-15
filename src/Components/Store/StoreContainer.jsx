import { connect } from 'react-redux';
import Store from './Store';
import { stopLoader } from './../../store/searching-reducer';
import { compose } from 'redux';
import { RedirectHOC } from './../../HOC/RedirectHOC';
import { getStatusAuthorization } from './../../store/store-selectors/auth-selector';
import { getInventoryThunk } from '../../store/store-reducer';
import { getDataStatus, getDataStatusFounding, getDataStorePet } from '../../store/store-selectors/store-selector';
import { getPetData } from './../../store/store-selectors/pet-selector';
import { setDataStorePet } from './../../store/store-reducer';

const mapStateToProps = (state) => {
    return {
        statusAuthorization : getStatusAuthorization(state),
        dataStatus: getDataStatus(state),
        dataStatusFounding : getDataStatusFounding(state),
        dataPet: getPetData(state),
        dataStorePet: getDataStorePet(state)
    }
}

const StoreContainer = compose(
    connect(mapStateToProps,{
        stopLoader,
        getInventoryThunk,
        setDataStorePet
    }),
    RedirectHOC
)(Store)

export default StoreContainer