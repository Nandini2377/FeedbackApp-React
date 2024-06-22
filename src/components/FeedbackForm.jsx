import { useContext, useEffect, useState } from "react";
import RatingSelect from "./RatingSelect";
import Cards from "./Shared/Cards";
import Buttons from "./Shared/Buttons";
import FeedbackContext from "../context/FeedbackContext";

const FeedbackForm = () => {
  const {addFeedback, feedbackEdit , updateFeedback} = useContext(FeedbackContext)
    const [text,setText] = useState('');
    const [rating,setRating] = useState('');
    const [btnDisabled,setBtnDisabled] = useState(true);
    const [msg,setMsg] = useState('');

    // console.log(FeedbackContext);
    useEffect(()=>{
      if(feedbackEdit.edit === true){
        setBtnDisabled(false)
        setText(feedbackEdit.item.text)
        setRating(feedbackEdit.item.rating);
      }

    },[feedbackEdit])

    

    const handleTextChange = (e) =>{
      if(text === ''){
        setBtnDisabled(true)
        setMsg(null)
      }
      else if(text !== '' && text.trim().length < 5){
        setBtnDisabled(true)
        setMsg('Text must be atleast 5 characters')
      }else{
        setBtnDisabled(false)
        setMsg(null)
        
      }
      setText(e.target.value);
    }

    const handleSubmit = (e) =>{
      e.preventDefault();
      if(text.trim().length > 10){
        const newFeedback = {
          text, rating
        }
        if(feedbackEdit.edit === true){
          updateFeedback(feedbackEdit.item.id, newFeedback)
        }else{
        addFeedback(newFeedback)

        }
        setText('')
      }
    }

  return (
    <Cards>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>
        {/* rating select components */}
        <RatingSelect  select = {(rating)=>{setRating(rating)}} />
        <div className="input-group">
            <input type="text" placeholder="Write a review" onChange={handleTextChange} value={text} />
            <Buttons type='submit' isDisabled={btnDisabled}   >Send</Buttons>
        </div>

        {msg && <div className= 'message'>{msg}</div>}
      </form>
    </Cards>
  );
}

export default FeedbackForm;
