import styles from "./Button.module.scss";
// export const Button = ({onClickHandler, children}) => {
export const Button = (props) => {
  return (
    <button
      className={`
      ${styles.default} 
      ${styles[props.size]} 
      ${props.disabled ? styles.disabled : ""}
      `}
      type={props.type}
      onClick={props.onClickHandler}
    >
      {props.children}
    </button>
  );
};
