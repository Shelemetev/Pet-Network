import { connect } from "react-redux";
import Register from './Register';
import {registredThunk} from './../../store/auth-reducer'
import { getRegisterStatus } from "../../store/store-selectors/auth-selector";

const mapStateToProps = (state) => {
    return {
        registerStatus : getRegisterStatus(state)
    }
}



const RegisterContainer = connect(mapStateToProps,
    {
        registredThunk
    })(Register)

export default RegisterContainer