import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row border-top p-3 mt-4">
        <h1 className="mt-5 text-center">People</h1>
      </div>
      <div
        className="row p-3 text-muted fs-6 "
        style={{ lineHeight: "1.8", fontSize: "1.1rem" }}
      >
        <div className="col-6 p-3 text-muted text-center">
          <img
            src="media/images/nithinKamath.jpg"
            alt="Nithin Kamath"
            className="img-fluid rounded-circle mb-3"
            style={{ width: "60%" }}
          />
          <h4 className="mt-4">Nithin Kamath</h4>
          <h6>Founder, CEO</h6>
        </div>
        <div className="col-6 p-5">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on Homepage / TradingQnA /{" "}
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              Twitter
            </a>{" "}
            /{" "}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              LinkedIn
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
