import './App.css';
import { Route, Routes, BrowserRouter} from 'react-router-dom';
import ProfileContainer from './Components/Profile/ProfileContainer';
import React from 'react';
import RegisterContainer from './Components/Register/RegisterContainer';

const App = React.memo(() => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ProfileContainer/>}/>
        <Route path='/register' element={<RegisterContainer/>}/>
      </Routes>
    </BrowserRouter>
  );
})

export default App;
