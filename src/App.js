import React, {useEffect} from 'react'
import './App.css'
import { Provider, useSelector } from 'react-redux'
import HomeScreen from './screens/HomeScreen'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import LoginScreen from './screens/LoginScreen';
import ProfileScreen from './screens/ProfileScreen';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import  {useDispatch} from 'react-redux'
import {logout, login, selectUser} from './features/userSlice'
function App() {
  const dispatch = useDispatch()
  const user = useSelector(selectUser)
  useEffect(() => {
    const unsubscribe =  onAuthStateChanged(auth, (userAuth)=>{
      if(userAuth){
        console.log(userAuth);
        dispatch( login( {
          uid : userAuth.uid,
          email: userAuth.email
        }))
      } else {
        // logout

        dispatch(logout())
      }
    })
    return unsubscribe
  }, [dispatch]);
  return (
    <div className="app">
      <BrowserRouter>
      { !user ? (<LoginScreen/>) :
       ( <Routes >
          <Route path='/profile' element={<ProfileScreen/>}></Route>
          <Route path="/" element={<HomeScreen />}></Route>

        </Routes>)  }
      </BrowserRouter>
    </div>

  )

}

export default App