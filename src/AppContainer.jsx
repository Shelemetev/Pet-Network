import { compose } from "redux";
import App from './App';
import { connect } from "react-redux";
import { getToSearching } from './store/store-selectors/searching-selector';
import { getStatusAuthorization } from './store/store-selectors/auth-selector';

const mapStateToProps = (state) => {
    return {
        toSearching: getToSearching(state),
        statusAuthorization : getStatusAuthorization(state)
    }
}

const mapDispatchToProps = () => {
    return {
        
    }
}

const AppContainer = compose(
    connect(mapStateToProps,mapDispatchToProps)
)(App)

export default AppContainer