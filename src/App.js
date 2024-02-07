import './App.css';
import { Route, Routes, BrowserRouter} from 'react-router-dom';
import ProfileContainer from './Components/Profile/ProfileContainer';
import React from 'react';
import RegisterContainer from './Components/Register/RegisterContainer';
import Loader from './comon/Loader/Loader';

const App = React.memo(({toSearching}) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ProfileContainer/>}/>
        <Route path='/register' element={<RegisterContainer/>}/>
      </Routes>
      {toSearching && <Loader />}
    </BrowserRouter>
  );
})

export default App;
