import React, { useRef, useEffect, useState } from 'react';
import io from 'socket.io-client';

const Join = ({ setSocket, visibility }) => {
  const usernameRef = useRef(null);
  const [eyePos, setEyePos] = useState({ x: 0, y: 0 });
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = async () => {
    const username = usernameRef.current.value;
    if (!username.trim() || username.length < 3) {
      alert('Digite um nome de usuário válido.');
      return;
    }

    const socket = await io.connect('http://192.168.10.123:3001');
    socket.emit('set_username', username);
    setSocket(socket);
    visibility(true);
  };

  useEffect(() => {
    const moveEyes = (e) => {
      const eyeMaxMove = 2
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      const dx = e.clientX - centerX;
      const dy = e.clientY - centerY;

      const xRatio = dx / centerX;
      const yRatio = dy / centerY;

      const curvedX = Math.sin(xRatio * Math.PI / 2) * eyeMaxMove;
      const curvedY = Math.sin(yRatio * Math.PI / 2) * eyeMaxMove;

      setEyePos({ x: curvedX, y: curvedY });
    };

    window.addEventListener('mousemove', moveEyes);
    return () => window.removeEventListener('mousemove', moveEyes);
  }, []);

  const defaultImg =
    'https://media.discordapp.net/attachments/1211376380747448380/1359585474431291593/Captura_de_tela_2025-04-09_144451.png?ex=67f80424&is=67f6b2a4&hm=afd389a362093a963cb41bfaa22de0cee8192fa6d814bcc9208fb2b1d45a81c9&=&format=webp&quality=lossless&width=303&height=324';

  const focusedImg =
    'https://media.discordapp.net/attachments/1211376380747448380/1359590842507198695/Design_sem_nome_10.png?ex=67f80924&is=67f6b7a4&hm=8dd872263e2f3a903234bd7f01874566cd0273705784c20505c78f1d9ae813de&=&format=webp&quality=lossless&width=379&height=405';


    useEffect(() => {
      const style = document.createElement("style");
      style.innerHTML = `
        @keyframes shake {
          0% { transform: translate(0px, 0px) rotate(0deg); }
          10% { transform: translate(-2px, 2px) rotate(-1deg); }
          20% { transform: translate(-2px, -2px) rotate(1deg); }
          30% { transform: translate(2px, 2px) rotate(0deg); }
          40% { transform: translate(2px, -2px) rotate(1deg); }
          50% { transform: translate(-2px, 2px) rotate(-1deg); }
          60% { transform: translate(-2px, -2px) rotate(0deg); }
          70% { transform: translate(2px, 2px) rotate(-1deg); }
          80% { transform: translate(2px, -2px) rotate(1deg); }
          90% { transform: translate(-2px, 2px) rotate(0deg); }
          100% { transform: translate(0px, 0px) rotate(-1deg); }
        }
    
        .shake {
          animation: shake 0.5s infinite;
        }
      `;
      document.head.appendChild(style);
      return () => document.head.removeChild(style);
    }, []);
    

  return (
    <div className="container text-center py-5">
      <div className="position-relative d-inline-block">
        <img
          src={isFocused ? focusedImg : defaultImg}
          alt="Flowey"
          style={{
            width: 120,
            imageRendering: 'pixelated',
          }}
        />

        {!isFocused && (
          <>
            <div
              className="position-absolute bg-black"
              style={{
                top: 22,
                left: 49,
                width: 7,
                height: 15,
                transform: `translate(${eyePos.x}px, ${eyePos.y}px)`,
              }}
            />
            <div
              className="position-absolute bg-black"
              style={{
                top: 22,
                left: 65,
                width: 7,
                height: 15,
                transform: `translate(${eyePos.x}px, ${eyePos.y}px)`,
              }}
            />
          </>
        )}
      </div>

      <h1
        className="mt-3 text-white"
        style={{ fontFamily: '"Press Start 2P", cursive', fontSize: '2rem' }}
      >
        devChat
      </h1>

      <div
        className="mt-4 p-4 bg-black text-light border border-3 border-light mx-auto"
        style={{
          maxWidth: 400,
          fontFamily: '"Press Start 2P", cursive',
        }}
      >
        <h3 className={`mb-3 text-white ${isFocused ? 'shake' : ''}`}
         style={{ fontFamily: '"Press Start 2P", cursive', fontSize: '1.7rem' }}
          >Bem-vindo!
          </h3>

        <input
          ref={usernameRef}
          type="text"
          className="form-control mb-3 rounded-0"
          placeholder="Nome de usuário"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
        />
        <button
          className="btn bg-black border-3 border-light text-light w-100 rounded-0"
          onClick={handleSubmit}
        >
          Entrar
        </button>
      </div>

      <link
        href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap"
        rel="stylesheet"
      />
    </div>
  );
};

export default Join;
