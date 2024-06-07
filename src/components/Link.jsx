function Link(props) {
  return <a href={props.href}>{props.name}</a>;
}

function CreateLink(link, index) {
  return (
    <Link
      key={index}
      href={link.href}
      name={link.name}
      descrip={link.descrip}
    />
  );
}

export default Link;
export { CreateLink };
