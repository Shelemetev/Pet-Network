import './App.css';
import { Route, Routes, BrowserRouter} from 'react-router-dom';
import ProfileContainer from './Components/Profile/ProfileContainer';
import React from 'react';
import RegisterContainer from './Components/Register/RegisterContainer';
import Loader from './comon/Loader/Loader';
import SitebarContainer from './Components/Sitebar/SitebarContainer';
import StoreContainer from './Components/Store/StoreContainer';
import PetContainer from './Components/Pet/PetContainer';

const App = React.memo(({toSearching,statusAuthorization}) => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      {toSearching && <Loader />}  
      {statusAuthorization && <SitebarContainer /> }
      <Routes>
        <Route path='/' element={<ProfileContainer/>}/>
        <Route path='/register' element={<RegisterContainer/>}/>
        <Route path='/store' element={<StoreContainer/>}/>
        <Route path='/pet' element={<PetContainer/>}/>
      </Routes> 
    </BrowserRouter>
  );
})

export default App;
