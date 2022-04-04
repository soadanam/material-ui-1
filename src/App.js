import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import NotFound from './components/NotFound/NotFound';
import Friends from './components/Friends/Friends';
import Navigation from './components/Navigation/Navigation';
import FriendDetails from './components/FriendDetails/FriendDetails';
import Culture from './components/Culture/Culture';
import { useEffect, useState } from 'react';
import DynamicFriends from './components/DynamicFriends/DynamicFriends';
import DynamicDetail from './components/DynamicDetails/DynamicDetail';


function App() {

  return (
    <div className="App">

        <BrowserRouter>
          <Navigation></Navigation>
          <Routes>
            <Route exact path='/' element={<Home />}></Route>
            <Route path='/home' element={<Home />}></Route>

            <Route path='about' element={<About />}></Route>
            <Route path='about/culture' element={<Culture />} />
            
            <Route path='/friends' element={<Friends />} />
            <Route path='/friend/:any' element={<FriendDetails />} />

            <Route path='/about/culture/dynamic' element={<DynamicFriends/>} />
            <Route path='about/culture/dynamic/details/:id' element={<DynamicDetail/>} />

            <Route path='*' element={<NotFound />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}
export default App;
