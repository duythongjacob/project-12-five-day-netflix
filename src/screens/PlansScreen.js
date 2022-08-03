import React from 'react'
import './PlansScreen.css'
function PlansScreen({name, descriptions}) {
  return (
    <div className="plansScreen__plan">
        <div className="plansScreen__info">
                <h5>{name}</h5>
                <h6>{descriptions}</h6>
        </div>  
            <button onClick={ ()=>{

            }}>Subscribe </button>
    </div>
  )
}

export default PlansScreen