import React from 'react'
import FeedBackItem from './FeedBackItem'
import {motion, AnimatePresence} from 'framer-motion'
import { useContext} from 'react'
import FeedBackContext from '../context/FeedBackContext';


function ReadBackList() {
 const {feedback, HandleFB} = useContext(FeedBackContext)
  if(!feedback || feedback.length ===0){return <p>no feedback yet</p>}
  
  return (
    <div className='feedback-list'>
      <AnimatePresence>
      {feedback.map((item)=>(
        <motion.div key={item.id}
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}>
        <FeedBackItem key={item.id} item={item}
        HandleFB ={HandleFB}/>
      
      </motion.div> ))}
      </AnimatePresence>
      
      
    </div>
  )
}


export default ReadBackList
