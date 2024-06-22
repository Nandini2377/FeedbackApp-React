import { v4 as uuidv4 } from "uuid";
import { createContext, useState } from "react";
const FeedbackContext = createContext();


export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: "This item is form context",
      rating: 5,
    },
  ]);

  const deleteFeedback = (id) => {
    if (window.confirm("Do you really want to delete?")) {
      setFeedback((prev) => [...prev].filter((ele) => ele.id !== id));
    }
  };

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
    console.log(newFeedback);
  };

  

  const [feedbackEdit, setFeedbackEdit] = useState({
    item:{},
    edit:false
  })
  const editFeedback = (item) =>{
    setFeedbackEdit({item, edit:true})
  }

  const updateFeedback = (id, updItem) => {
    setFeedback(
      feedback.map((item) => (item.id === id ? {...item, ...updItem} : item))
    )
  }


  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        deleteFeedback,
        addFeedback, editFeedback,
        feedbackEdit, updateFeedback
      }} >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
