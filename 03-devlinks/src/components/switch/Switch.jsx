import style from "./Switch.module.css"

const Switch = ({troca, isLight}) => {
  return (
    <div className={isLight ? style.light : ""} >
      <div  onClick={troca} id={style.switch} >
      <button></button>
      <span></span>
    </div>
    </div>
  );
};

export default Switch

