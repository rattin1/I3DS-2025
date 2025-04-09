import React, { useEffect, useRef, useState } from "react";

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
  }, [messageList]);

  useEffect(() => {
    // Mensagem fake só pra testar visual
    const fakeMessage = {
      author: "Olavo de Carvalho",
      text: "☠️",
      authorId: "FAKE_ID", // só pra simular alguém diferente
    };
    setMessageList((current) => [...current, fakeMessage]);
  }, []);

  const hadleSubmit = () => {
    const message = messageRef.current.value;
    if (!message.trim()) return;

    props.socket.emit("message", message);
    messageRef.current.value = "";
    messageRef.current.focus();
  };

  const fontStyle = {
    fontFamily: '"Press Start 2P", cursive',
    fontSize: "0.7rem",
  };

  return (
    <div
      id="chat-container"
      style={{
        width: "400px",
        height: "600px",
        ...fontStyle,
      }}
      className="m-4 bg-black border border-4 border-light p-3 d-flex flex-column"
    >
      <div
        id="chat-body"
        className="overflow-y-hidden h-100 d-flex gap-3 flex-column"
      >
        {messageList.map((message, index) => (
          <div
            className={`${
              message.authorId === props.socket.id
                ? "align-self-end ms-5 bg-white text-dark"
                : "align-self-start me-5 bg-white text-dark"
            } rounded-0 p-2`}
            key={index}
            style={fontStyle}
          >
            <div id="message-author" className="fw-bold">
              {message.author}
            </div>
            <div id="message-text" className="text-danger">
              {message.text}
              </div>
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      <div className="input-group rounded-0">
        <input
          ref={messageRef}
          id="msgUser"
          name="msgUser"
          type="text"
          className="form-control me-1 rounded-0"
          placeholder="Mensagem"
          onKeyDown={(e) => e.key === "Enter" && hadleSubmit()}
          style={fontStyle}
        />
        <button
          className="btn bg-light rounded-0"
          onClick={hadleSubmit}
          style={fontStyle}
        >
          <i className="bi bi-symmetry-horizontal text-black"></i>
        </button>
      </div>

      <link
        href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap"
        rel="stylesheet"
      />

    </div>
  );
};

export default Chat;
