import { CreateCard } from "../components/Card";

function Home() {
  const allProducts = [
    {
      path: "/product",
      img: "./images/background/all_shopping_carousel_background.png",
      title: "all",
      btnName: "shop all",
      descrip: "Check out our wide range of products",
    },
    {
      path: "/men",
      img: "./images/background/mens_carousel_background.png",
      title: "mens",
      btnName: "shop men",
      descrip: "check out our wide range of mens products",
    },
    {
      path: "/product",
      img: "./images/background/womens_carousel_background.jpeg",
      title: "womens",
      btnName: "shop women",
      descrip: "check out our wide range of womens products",
    },
    {
      path: "/product",
      img: "./images/background/kids_carousel_background.png",
      title: "kids",
      btnName: "shop kids",
      descrip: "check out our wide range of kids products",
    },
  ];

  return (
    <main className="homepage">
      <div className="shoppingLinks">
        <a href="/product">All</a>
        <a href="/product">mens</a>
        <a href="/product">womens</a>
        <a href="/product">kids</a>
      </div>
      <div className="carousel">
        <div className="carouselImg"></div>
        {allProducts.map(CreateCard)}
      </div>
      <div className="infoList">
        <ul>
          <li>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </li>
          <li>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </li>
          <li>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </li>
        </ul>
      </div>
    </main>
  );
}

export default Home;
