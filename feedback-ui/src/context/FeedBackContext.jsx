import { createContext, useState, useEffect } from "react";
import  {v4 as uuidv4} from 'uuid'
import React from 'react'
import FeedbackData from "../Data/feedBackData";

const FeedBackContext = createContext();

export const FeedBackProvider=({children})=> {
  const [feedback, setFeedBack] = useState([]);
  const [FeedBackEdit,setFeedBackEdit]=useState({
    item: {},
    edit: false
  })

    useEffect(()=>{FetchFeedBack()},[]);

    const FetchFeedBack = async ()=>{
      const response = await fetch('http://localhost:5000/feedback?_sort=id&_order=desc')
      const data = await response.json()
      setFeedBack(data)
    }

  const [text, setText] = useState('');
  const editFeedBack = (item) => {
    setFeedBackEdit({
      item,
      edit: true,
    })
  }

  const HandleFB = async (id)=> {
    if(window.confirm('are you sure you want to delete your feedback'))
    {
      await fetch(`http://localhost:5000/feedback/${id}`, {
        method: 'DELETE'
      })
      setFeedBack(feedback.filter((item)=>
        item.id !==id
      ))
    }

  };

  const handleAdd = async (a)=>{
    const response = await fetch(`http://localhost:5000/feedback`,
    {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(a)
    })
    const data = await response.json()
    setFeedBack([data,...feedback]);
  };


const updateFeedback = async (id, upditem) => {
  const response = await fetch (`http://localhost:5000/feedback${id}`,
  {
    method: 'put',
    headers: {
      'Content-Type':'application/json'},
      body: JSON.stringify(upditem),
    }
  )
  const data = response.json()
  setFeedBack(feedback.map((item)=>
   item.id ===id ? {...item, ...data} : item
  ))
}

  return <FeedBackContext.Provider value={{
    feedback,
    setFeedBack,
    HandleFB,
    handleAdd,
    editFeedBack,
    FeedBackEdit,
    text,
    setText,
    updateFeedback
  }}>
    
    {children}</FeedBackContext.Provider>

}

export default FeedBackContext
