import React, { use, useEffect, useRef, useState } from "react";
const Chat = (props) => {
  const [messageList, setMessageList] = useState([]);
  const messageRef = useRef();
  const bottomRef = useRef();

  useEffect(() => {
    props.socket.on("receive_message", (data) => {
      setMessageList((current) => [...current, data]);
    });

    return () => props.socket.off("receive_message");
  }, [props.socket]);

  useEffect(() => {
bottomRef.current.scrollIntoView({ behavior: "smooth" });
  },[messageList])

  const hadleSubmit = () => {
//     if(props.socket.author == "undefined") window.location.reload();
//     const message = messageRef.current.value;
//    if(!message.trim()) return;

     const message = messageRef.current.value;
     if (!message.trim()) return;

props.socket.emit("message", message);
   
    messageRef.current.value = "";
    messageRef.current.focus();
   
   
};

  return (
    <div id="chat-container" 
    style={{width: "400px", height: "600px"}} 
    className='m-4 bg-secondary rounded-4 p-3 d-flex flex-column'>

        <div 
        id="chat-body"
        className='overflow-y-hidden h-100 d-flex gap-3 flex-column'>
            {messageList.map((message, index) =>(
                <div 
                className={`${
                    message.authorId === props.socket.id 
                    ? "align-self-end ms-5 bg-dark bg-white text-dark"
                    : "align-self-start me-5 bg-dark text-light"
                 } rounded-3 p-2`}
                key={index}>
                    <div 
                    id='message-author'
                    className='fw-bold'>{message.author}</div>
                    <div 
                    id='message-text'>{message.text}</div>
                </div>
            ))}
            <div ref={bottomRef}/>

        </div>


        <div 
        id="chat-footer" 
        className='input-group'>
            
            <input 
            ref={messageRef}
            id="msgUser"
            name='msgUser'
            type="text" 
            className='form-control me-1'
            placeholder='Mensagem'
            onKeyDown={(e) => e.key == "Enter" && hadleSubmit()}
            />
                <span className="input-group-text">
          <button
            className="btn m-0 input-group-text"
            id="basic-addon1"
            onClick={() => hadleSubmit()}
          >
            <i className="bi bi-send-fill"></i>
          </button>
        </span>
        </div>

    </div>
  );
};

export default Chat;