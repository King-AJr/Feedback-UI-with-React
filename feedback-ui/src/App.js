import React from 'react'
import { BrowserRouter as Router,Route , Routes } from 'react-router-dom'
import Header from './components/header'
import ReadBackList from './components/ReadBackList'
import FeedStats from './components/FeedStats'
import FeedBackForm from './components/FeedBackForm'
import AboutPage from './Pages/AboutPage'
import AboutIconLink from './components/AboutIconLink'
import { FeedBackProvider } from './context/FeedBackContext'
import {useState} from 'react'
import FeedbackData from './Data/feedBackData'
import { v4 as uuidv4 } from 'uuid'

function App() {  
    return (
      <>

      <FeedBackProvider>
      <Router>
      <Header/>
      <Routes>
        <Route exact path='/' element = {
               <>
                <FeedBackForm //handleAdd={handleAdd}
                />
                <FeedStats //feedback = {feedback}
                />
                <ReadBackList //feedback ={feedback} HandleFB= {HandleFB}
                />
                <AboutIconLink/>
              </>
          
        }/>
        
        <Route exact path='about' element={<AboutPage/>}/>
      </Routes>
      
      </Router>

      </FeedBackProvider>
  
      </>
      
    )
  }


export default App
