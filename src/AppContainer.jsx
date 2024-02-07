import { compose } from "redux";
import App from './App';
import { connect } from "react-redux";
import { getToSearching } from './store/store-selectors/searching-selector';

const mapStateToProps = (state) => {
    return {
        toSearching: getToSearching(state)
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