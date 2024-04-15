import { compose } from 'redux';
import Pet from './Pet';
import { connect } from 'react-redux';
import { RedirectHOC } from './../../HOC/RedirectHOC';
import { getStatusAuthorization } from '../../store/store-selectors/auth-selector';
import { stopLoader,startLoader } from './../../store/searching-reducer';
import { addPetThunk, updatePhotoPetThunk } from '../../store/pet-reducer';
import { getIdUpdate, getPetData } from '../../store/store-selectors/pet-selector';
import { updatePetDataThunk,setIdUpdate } from './../../store/pet-reducer';

const mapStateToProps = (state) => {
    return {
        statusAuthorization : getStatusAuthorization(state),
        dataPet: getPetData(state),
        idUpdate: getIdUpdate(state)
    }
}

const PetContainer = compose(
    connect(mapStateToProps, {
        stopLoader,
        addPetThunk,
        startLoader,
        updatePhotoPetThunk,
        updatePetDataThunk,
        setIdUpdate,
   
    }),
    RedirectHOC
)(Pet)

export default PetContainer