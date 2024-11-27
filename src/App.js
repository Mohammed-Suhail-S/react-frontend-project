import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Register from "./components/Register";
import "./components/Register.css";
import ClassComponent from './react/ClassComponent';
import FunctionComponent from './react/FunctionComponent';
import ClassProps from "./react/ClassProps";
import ListPoints from "./react/ListPoints";
import State from './react/State';
import LifeCycle from './react/LifeCycle';
import UseState from './react/UseState';
import Effect from './react/UseEffect';
import Context from './react/UseContext';
import Filters from './react/FindWithFilter';

import List1 from "./task/List1";
import List2 from "./task/List2";
import NumberState from "./task/NumberState";

import Signup from './ez_cart/signup/signup';
import Signin from './ez_cart/signin/signin';
import Navbar from './ez_cart/navbar/navbar';
import LatestItems from './ez_cart/latest/latest';
import { useState } from 'react';

import Backend from './react/BackendDetails';

import MobileSignUp from './mobile_cart/signup/mob_signup';
import MobileSignIn from './mobile_cart/signin/mob_signin';
import MobileMain from './mobile_cart/main/mob_main';
import Samsung from './mobile_cart/mobile/samsung';
import Redmi from './mobile_cart/mobile/redmi'; 
import Iphone from './mobile_cart/mobile/iphone';
import Oppo from './mobile_cart/mobile/oppo';
import Vivo from './mobile_cart/mobile/vivo';

function App() {

  const [authenticate, setAuthenticate] = useState(false);

  const SigninSuccess = (nameUser) => {
    console.log(nameUser);
    setAuthenticate(true);
    localStorage.setItem("username", nameUser);
  };

  const [verified, setVerified] = useState(false);

  function VerifiedSuccess(nameofuser) {
    console.log(nameofuser);
    setVerified(true);
    localStorage.setItem("username", nameofuser);
  };

  return (
    <div>
      <BrowserRouter>
          <Routes>
              <Route path='/register' element={<Register/>}/>
              <Route path='/day1' element={<ClassComponent/>}/>
              <Route path='/day2' element={<FunctionComponent/>}/>
              <Route path='/day3' element={<ClassProps name="Mohammed Suhail"/>}/>
              <Route path='/day4' element={<ListPoints myvalue = {[12,23,34,45,56]}/>}/>
              <Route path='/day5' element={<State/>}/>
              <Route path='/day6' element={<LifeCycle/>}/>
              <Route path='/day7' element={<UseState/>}/>
              <Route path='/day8' element={<Effect/>}/>
              <Route path='/day9' element={<Context/>}/>
              <Route path='/day10' element={<Filters/>}/>
          </Routes>

          <Routes>
              <Route path='/task1' element={<List1 taskdata = {["HTML","CSS","Bootstrap","JavaScript"]}/>}/>
              <Route path='/task2' element={<List2/>}/>
              <Route path='/task3' element={<NumberState/>}/> 
          </Routes>

          <Routes>
              <Route path='/sign_up' element={<Signup/> }/>
              <Route path='/sign_in' element={<Signin success = {SigninSuccess}/> }/>
              <Route path='/navbar' element={<Navbar authenticate = {authenticate}/> }/>
              <Route path='/latest' element={<LatestItems/> }/>
          </Routes>

          <Routes>
              <Route path='/product' element={<Backend/>}/>
          </Routes>

          <Routes>
              <Route path = '/mob_signup' element = {<MobileSignUp/>} />
              <Route path = '/mob_signin' element = {<MobileSignIn loginSuccess = {VerifiedSuccess}/>} />
              <Route path = '/mob_main' element = {<MobileMain verify = {verified}/>} />
              <Route path = '/samsung' element = {<Samsung/>} />
              <Route path = '/redmi' element = {<Redmi/>} />
              <Route path = '/iphone' element = {<Iphone/>} />
              <Route path = '/oppo' element = {<Oppo/>} />
              <Route path = '/vivo' element = {<Vivo/>} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App ; 
