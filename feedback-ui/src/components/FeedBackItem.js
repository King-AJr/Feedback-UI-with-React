import Card from './shared/card';
import {FaTimes, FaEdit} from 'react-icons/fa'
import { useContext} from 'react'
import FeedBackContext from '../context/FeedBackContext';


function FeedBackItem({item}) {
const {editFeedBack ,HandleFB} = useContext(FeedBackContext);
  return (
    
      <Card >
    <div className='num-display'>{item.rating}</div>
    <div className='text-display'>{item.text}</div>
    <button onClick={()=>HandleFB(item.id)}
     className='close'><FaTimes color='purple'/> </button>
    <button  onClick={()=>editFeedBack(item)}
     className='edit'> <FaEdit color='purple'/></button>
    </Card>

  )
}

export default FeedBackItem
