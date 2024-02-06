import { connect } from "react-redux";
import Register from './Register';
import {registredThunk} from './../../store/auth-reducer'

const mapStateToProps = () => {
    return {

    }
}



const RegisterContainer = connect(mapStateToProps,
    {
        registredThunk
    })(Register)

export default RegisterContainer