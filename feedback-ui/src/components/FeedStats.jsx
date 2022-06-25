import React from 'react'
//import FeedbackData from '../Data/feedBackData';
import { useContext} from 'react'
import FeedBackContext from '../context/FeedBackContext';

function FeedStats() {
  const {feedback} = useContext(FeedBackContext);
   let NoOfReviews = feedback.length;

   let average = feedback.reduce((acc, num) =>{
    return (acc + num.rating) ;
   },0) / (feedback.length);

   average = average.toFixed(1).replace(/[.,]0$/,'')


  return (
    <div className='feedback-stats'>
      <h4>{NoOfReviews} reviews</h4>
      <h4> Average rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  )
}

export default FeedStats
