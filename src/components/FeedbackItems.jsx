import { useContext } from "react";
import Cards from "./Shared/Cards";
import { FaTimes,FaEdit } from "react-icons/fa";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackItems({ item }) {
  const {deleteFeedback, editFeedback} = useContext(FeedbackContext)

  return (
    <Cards>
      <div className="num-display">{item.rating}</div>
      <button className="close" onClick={() => deleteFeedback(item.id)}>
        <FaTimes color="purple"></FaTimes>
      </button>
      <button className='edit' onClick={() =>{editFeedback(item)}}>
        <FaEdit color="purple"></FaEdit>
      </button>
      <div className="text-display">{item.text}</div>
      {/* <button onClick={handleClick}>Click</button> */}
    </Cards>
  );
}

export default FeedbackItems;
