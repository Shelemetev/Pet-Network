import './App.css';
import { Route, Routes, BrowserRouter} from 'react-router-dom';
import ProfileContainer from './Components/Profile/ProfileContainer';
import React from 'react';
import RegisterContainer from './Components/Register/RegisterContainer';
import Loader from './comon/Loader/Loader';
import SitebarContainer from './Components/Sitebar/SitebarContainer';
import StoreContainer from './Components/Store/StoreContainer';
import PetContainer from './Components/Pet/PetContainer';
import { HashRouter } from "react-router-dom";

const App = React.memo(({toSearching,statusAuthorization}) => {
  return (
    <HashRouter>
      {toSearching && <Loader />}  
      {statusAuthorization && <SitebarContainer /> }
      <Routes>
        <Route path='/' element={<ProfileContainer/>}/>
        <Route path='/register' element={<RegisterContainer/>}/>
        <Route path='/store' element={<StoreContainer/>}/>
        <Route path='/pet' element={<PetContainer/>}/>
      </Routes> 
    </HashRouter>
  );
})

export default App;
