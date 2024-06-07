import { useState } from "react";
import Button from "./Button";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";

function Navbar(props) {
  const width = props.screenWidth;
  const [customStyle, setCustomStyle] = useState({ display: "none" });
  function handleMouseOver() {
    setCustomStyle({ display: "flex" });
  }
  function handleMouseOut() {
    setCustomStyle({ display: "none" });
  }

  return (
    <>
      <header>
        <h1>The Emporium</h1>
        {width <= 800 ? (
          <>
            <div>
              <MenuIcon
                className="drpdwn"
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
              />
              <div
                className="drpdwnContent"
                style={customStyle}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
              >
                <Button btnPath="/" btnName="Home" />
                <Button btnPath="/product" btnName={<ShoppingCartIcon />} />
                <Button btnPath="/product" btnName={<PersonIcon />} />
              </div>
            </div>
          </>
        ) : (
          <>
            <div>
              <Button btnPath="/" btnName="Home" />
              <Button btnPath="/product" btnName={<ShoppingCartIcon />} />
              <Button btnPath="/product" btnName={<PersonIcon />} />
            </div>
          </>
        )}
      </header>
    </>
  );
}

export default Navbar;
