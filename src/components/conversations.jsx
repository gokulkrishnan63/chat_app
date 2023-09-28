const Conversations = ({props}) => {
  return (
    <div className="conversation-container">
      {/* we extrated the first letter to set as icon */}
      <p className="con-icon">{props.name[0]}</p>
      <p className="con-title">{props.name}</p>
      <p className="con-lastMessage">{props.lastMessage}</p>
      <p className="con-timeStamp">{props.timeStamp}</p>

    </div>
  )
};

export default Conversations;
