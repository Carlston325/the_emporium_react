function About() {
  return (
    <>
      <main className="aboutPage">
        <h1>About us</h1>
        <div className="aboutMainBody">
          <div className="imageDiv">
            <div className="shape"></div>
            <img
              src="./images/about_image.png"
              alt="about us image"
              className="img"
            />
          </div>
          <div className="aboutInfoDiv">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}

export default About;
