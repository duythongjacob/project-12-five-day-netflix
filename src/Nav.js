import React, {useState, useEffect} from 'react'
import { useNavigate } from "react-router-dom";
import './Nav.css'
function Nav() {
    const [show, setShow] = useState(false)
    let navigate = useNavigate()
    const transitionNavBar = () => {
        if(window.scrollY > 100) {
            setShow(true)
        } else {
            setShow(false)
        }
    }
    console.log(show);
    useEffect(() => {
        window.addEventListener('scroll', transitionNavBar)
        return () => window.removeEventListener('scroll', transitionNavBar)
    }, []);
    return (
        <div className={`nav ${show && 'nav__black'}`}>
            <div className="nav__contents">
                    
                <img 
                    onClick={()=> navigate('/')}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Logonetflix.png/640px-Logonetflix.png" alt="netflix-logo" className="nav__logo" />
                <img 
                    onClick={()=> navigate('/profile')}
                src="https://robohash.org/e57907f4330ec0341b2640c0af697380?set=set4&bgset=bg2&size=400x400" alt="none" className="nav__avatar" />

            </div>
        </div>
    )
}

export default Nav