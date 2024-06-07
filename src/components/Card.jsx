function Card(props) {
  return (
    <div className="card" id={props.title + props.id}>
      <img src={props.img} className="img" alt={"background"} />
      <div>
        <h3>{props.title}</h3>
        <p>{props.descrip}</p>
        <a href={props.path}>
          <button className="btn">{props.btnName}</button>
        </a>
      </div>
    </div>
  );
}

function CreateCard(product, index) {
  return (
    <Card
      key={index}
      id={index}
      path={product.path}
      img={product.img}
      title={product.title}
      descrip={product.descrip}
      btnName={product.btnName}
    />
  );
}

export default Card;
export { CreateCard };
