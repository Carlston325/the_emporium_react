function Button(props) {
  return (
    <a href={props.btnPath} className={props.btnClass}>
      <button className="btn">{props.btnName}</button>
    </a>
  );
}

export default Button;
