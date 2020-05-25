import React, { useEffect } from "react";
import "./styles/scss/style.scss";
import $ from "jquery";

function App() {
  useEffect(() => {
    console.log($("form").length);

    $("form").on("submit", (e) => {
      e.preventDefault();

      const firstName = $("#firstName").val().trim();
      const lastName = $("#lastName").val().trim();
      const phone = $("#phone").val().trim();
      const email = $("#email").val().trim();
      const zipcode = $("#zipcode").val().trim();

      const data = {
        firstName,
        lastName,
        email,
        phone,
        zipcode,
      };
      $.post("https://localhost:8080/send", data, function () {
        console.log("Server received our data!!!");
        if (
          firstName === "" ||
          lastName === "" ||
          phone === "" ||
          email === "" ||
          zipcode === ""
        ) {
          alert("Please, fill all inputs!");
          return false;
        }
        $("#firstName").val("");
        $("#lastName").val("");
        $("#phone").val("");
        $("#email").val("");
        $("#zipcode").val("");
        alert("Thank you! Your request has been sent!");
      });
    });
  }, []);

  function goToTop(e) {
    e.preventDefault();
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  return (
    <div className="finance">
      <header>
        <div className="container">
          <div className="row">
            <div className="col-4">
              <img
                className="img-fluid"
                src="../../images/logo.png"
                alt="logo"
              />
            </div>
            <div className="col-8">
              <div className="phone">
                <h4>CONTACT</h4>
                <a
                  href="tel:18004806850"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h4>+ (800) 480-6850</h4>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="top">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 left">
              <div className="price">
                AS LOW AS <span>$99</span> mo
              </div>
              <div className="images">
                <img
                  className="img-fluid"
                  src="../../images/bath.png"
                  alt="bath"
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 right">
              <div className="content">
                <div className="form-text">GET A FREE QUOTE</div>
                <form action="">
                  <input
                    className="input"
                    type="text"
                    name="firstName"
                    id="firstName"
                    placeholder="First Name *"
                  />
                  <br />
                  <input
                    className="input"
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Last Name *"
                  />
                  <br />
                  <input
                    className="input"
                    type="text"
                    id="phone"
                    name="usersPhone"
                    placeholder="Phone *"
                  />
                  <br />
                  <input
                    className="input"
                    type="text"
                    id="email"
                    name="email"
                    placeholder="E-mail *"
                  />
                  <br />
                  <input
                    className="input"
                    type="text"
                    id="zipcode"
                    name="zipcode"
                    placeholder="Your Zip *"
                  />
                  <br />
                  <button type="submit" className="quote-btn">
                    GET QUOTE
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="row under">
            <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 on-small-screen">
              <div className="price">
                AS LOW AS <span>$99</span> mo
              </div>
              <div className="images">
                <img
                  className="img-fluid"
                  src="../../images/bath.png"
                  alt="bath"
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="top-text">
              <h2>HOW MUCH DOES A WALK-IN TUB COST?</h2>
              <h3>
                Now you can own an Ella's Brand Walk-in Bathtub for as little as
                $99 per/month
              </h3>
              <h3>
                Get your <b> no-obligation quote </b> and let our specialists
                help you choose the tub that is right for you
              </h3>
            </div>
          </div>
        </div>
        <div className="middle">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 d-flex flex-column">
                <div className="img-col1">
                  <img
                    className="img-fluid"
                    src="../../images/col1.png"
                    alt="bath"
                  />
                </div>
                <div className="nameTag">
                  ELLA INWARD SWING STAINLESS STEEL DOOR WALK IN TUB
                </div>
                <div className="description">
                  <p>
                    If your bathroom less then spacious, a stainless steel and
                    tempered glass inward swing doorwalk-in bathtub can fit
                    right in. The doors opens toward inside of the bathtub,
                    which prevent you from knoking and bumping existing
                    bathroomfixtures. Our unique design with tempured glassand
                    stainless adds a sophisticated touch to any design.
                  </p>
                </div>
                <div className="view-btn mt-auto">
                  <button>VIEW DETAILS</button>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 d-flex flex-column">
                <div className="img-col1">
                  <img
                    className="img-fluid"
                    src="../../images/col2.png"
                    alt="bath"
                  />
                </div>
                <div className="nameTag">
                  ELLA OUTWARD SWING DOOR WALK IN TUB
                </div>
                <div className="description">
                  <p>
                    For bathers who require maximum accessibility, an outward
                    swing door walk-in bathtun is the perfect choise. With
                    option like wheelchair-accessible transfer bathtubs or a
                    standart demension walk-in bathtub, we offer a variety of
                    modelsto suit your space. these walk-in bathtubs can easily
                    accomodate larger individuals or bathrooms.
                  </p>
                </div>
                <div className="view-btn mt-auto">
                  <button>VIEW DETAILS</button>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 d-flex flex-column">
                <div className="img-col1">
                  <img
                    className="img-fluid"
                    src="../../images/col3.png"
                    alt="bath"
                  />
                </div>
                <div className="nameTag">ELLA TWO SEAT WALK IN TUBS</div>
                <div className="description">
                  <p>
                    Our two seat walk-ih bathtubs provide unique bathing
                    experience for couples. With two outward-swing door bathtub
                    sizes to choose from, you'll be able to share a massaging,
                    spa-like bath with your loved one from the comfortof your
                    own home.
                  </p>
                </div>
                <div className="view-btn mt-auto">
                  <button>VIEW DETAILS</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bottom">
        <input
          onClick={goToTop}
          type="image"
          src="../../images/arrow_up.png"
          alt=""
        />
      </div>
      <footer>
        <div className="container">
          <div className="logo">
            <img
              type="button"
              className="img-fluid"
              src="../../images/logo.png"
              alt="logo"
            />
          </div>
          <div className="info">
            <h6>2101 S. Carpenter St. Chicago, IL, 60608</h6>
            <h6>Phone: 1-877-769-1905</h6>
            <h6>Email: info@ellasbubbles.com</h6>
          </div>
          <div className="private">
            <p>PRIVATE POLICY</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
