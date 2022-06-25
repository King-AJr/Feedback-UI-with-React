import React from 'react'
import Card from '../components/shared/card'
import {NavLink, useNavigate} from 'react-router-dom'



function AboutPage() {
    const navigate = useNavigate();
    let status = 200;
    const HandleClick = ()=> {
        if(status === 404){
            return navigate('/notfound')
        }else {
            return navigate('/')
        }
        
    }
  return (
    <Card>
        <div className='about'>
        <p> This is a UI targeted at getting the user rating and feedback for this this app</p>
        <NavLink to='/'>
            <h3>Back home</h3>
        </NavLink>
       <button onClick={HandleClick}>click</button>
        </div>
    </Card>
    
  )
}

export default AboutPage
