import './App.css';
import { Route, Routes, BrowserRouter} from 'react-router-dom';
import ProfileContainer from './Components/Profile/ProfileContainer';
import React from 'react';

const App = React.memo(() => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ProfileContainer/>}/>
      </Routes>
    </BrowserRouter>
  );
})

export default App;
