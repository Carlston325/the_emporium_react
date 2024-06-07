function LinkDescrip(props) {
  return (
    <div>
      <a href={props.href}>{props.name}</a>
      <p>{props.descrip}</p>
    </div>
  );
}

function CreateLinkDescrip(linkDescrip, index) {
  return (
    <LinkDescrip
      key={index}
      href={linkDescrip.href}
      name={linkDescrip.name}
      descrip={linkDescrip.descrip}
    />
  );
}

export default LinkDescrip;
export { CreateLinkDescrip };
