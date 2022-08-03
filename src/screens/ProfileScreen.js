import React from 'react'
import Nav from '../Nav'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'
import './ProfileScreen.css'
import {auth} from '../firebase'
import {signOut} from 'firebase/auth'
import PlansScreen from './PlansScreen'
import './ProfileScreen.css'
function ProfileScreen() {
    const user = useSelector(selectUser)
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
  return (
    <div className="profileScreen">
        <Nav/>
        <div className="profileScreen__body">
            <h1>Edit Profile</h1>
            <div className="profileScreen__info">
                <img src="https://robohash.org/e57907f4330ec0341b2640c0af697380?set=set4&bgset=bg2&size=400x400" alt="" />
                <div className="profileScreen__details">
                    <h2>
                        {user.email}
                    </h2>
                    <div className="profileScreen__plans">
                            <h3>Plans date: <span className='profileScreen__plans-date'>{date}</span> </h3>

                                <PlansScreen name={'Premium'} descriptions={'4k + HDR'} />
                        <button 
                            onClick={()=> signOut(auth)}
                        className='profileScreen__signOut'> Sign Out</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProfileScreen