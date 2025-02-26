import style from "./Switch.module.css"

const Switch = ({troca, isLight}) => {
  return (
    <div onClick={troca} className={isLight ? style.light : ""}>
    <div id={style.switch}>
      <button></button>
      <span></span>
    </div>
    </div>
  );
};

export default Switch