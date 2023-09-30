import React from "react";

const MessageSelf = function () {
  var props2 = { name: "OtherUser", message: "This is a Sample Message" };

  return (
    <>
    <div className="self-message-container">
      <div className="messageBox">
        <p>{props2.message}</p>
        <p className="self-timeStamp">12:00am</p>
      </div>
    </div>
    </>
  );
};

export default MessageSelf;

// note==> other-text-content  video 5b ==> 6.57
