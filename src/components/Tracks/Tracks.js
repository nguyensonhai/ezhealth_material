import React from "react";
import "assets/css/components/tracksStyle.css";
import "bootstrap/dist/css/bootstrap.min.css";
export default function Tracks() {
  const themes = localStorage.getItem("themes") || "";
  const textColor = themes === "dark" ? "white" : "#121212";
  return (
    <div id="myfavoritetracks">
      <div className="span-container spotify">
        <span
          style={{ color: textColor }}
          className={themes === "dark" ? "cta-dark" : "cta spotify-cta"}
        >
          <span style={{ color: textColor }} className="spandark">
            My favorite tracks
          </span>
        </span>
      </div>
      <div className="embed-spotify-container">
        <div className="row">
          {/* Forever Yours*/}
          <div className="col-sm-4">
            <div className="embed-spotify">
              <div className="embed-spotify-body">
                <iframe
                  src="https://open.spotify.com/embed/track/3o1CUVeHIid49sabk6A6Nf"
                  className="iframe-spofity"
                  allowFullScreen
                  scrolling="no"
                  allow="encrypted-media"
                  title={"forever-yours"}
                ></iframe>
              </div>
            </div>
          </div>
          {/* Without You */}
          <div className="col-sm-4">
            <div className="embed-spotify">
              <div className="embed-spotify-body">
                <iframe
                  src="https://open.spotify.com/embed/track/6Pgkp4qUoTmJIPn7ReaGxL"
                  className="iframe-spofity"
                  allowFullScreen
                  scrolling="no"
                  allow="encrypted-media"
                  title={"without-you"}
                ></iframe>
              </div>
            </div>
          </div>
          {/* Happy Now */}
          <div className="col-sm-4">
            <div className="embed-spotify">
              <div className="embed-spotify-body">
                <iframe
                  src="https://open.spotify.com/embed/track/14sOS5L36385FJ3OL8hew4"
                  className="iframe-spofity"
                  allowFullScreen
                  scrolling="no"
                  allow="encrypted-media"
                  title={"happy-now"}
                ></iframe>
              </div>
            </div>
          </div>
          {/* Beautiful */}
          <div className="col-sm-4">
            <div className="embed-spotify">
              <div className="embed-spotify-body">
                <iframe
                  src="https://open.spotify.com/embed/track/745bEQatiiXDtBe1AdQY2P"
                  className="iframe-spofity"
                  allowFullScreen
                  scrolling="no"
                  allow="encrypted-media"
                  title={"beautiful"}
                ></iframe>
              </div>
            </div>
          </div>
          {/* The Truth */}
          <div className="col-sm-4">
            <div className="embed-spotify">
              <div className="embed-spotify-body">
                <iframe
                  src="https://open.spotify.com/embed/track/4NmOJQxl9UZItUQQtMDYBb"
                  className="iframe-spofity"
                  allowFullScreen
                  scrolling="no"
                  allow="encrypted-media"
                  title={"the-truth"}
                ></iframe>
              </div>
            </div>
          </div>
          {/* Lose Somebody */}
          <div className="col-sm-4">
            <div className="embed-spotify">
              <div className="embed-spotify-body">
                <iframe
                  src="https://open.spotify.com/embed/track/7xbWAw3LMgRMn4omR5yVn3"
                  className="iframe-spofity"
                  allowFullScreen
                  scrolling="no"
                  allow="encrypted-media"
                  title={"lose-somebody"}
                ></iframe>
              </div>
            </div>
          </div>
          {/* High On Life */}
          <div className="col-sm-4">
            <div className="embed-spotify">
              <div className="embed-spotify-body">
                <iframe
                  src="https://open.spotify.com/embed/track/4ut5G4rgB1ClpMTMfjoIuy"
                  className="iframe-spofity"
                  allowFullScreen
                  scrolling="no"
                  allow="encrypted-media"
                  title={"high-on-life"}
                ></iframe>
              </div>
            </div>
          </div>
          {/* No Sleep */}
          <div className="col-sm-4">
            <div className="embed-spotify">
              <div className="embed-spotify-body">
                <iframe
                  src="https://open.spotify.com/embed/track/1ahVFh0ViDZr8LvkEVlq3B"
                  className="iframe-spofity"
                  allowFullScreen
                  scrolling="no"
                  allow="encrypted-media"
                  title={"no-sleep"}
                ></iframe>
              </div>
            </div>
          </div>
          {/* Home */}
          <div className="col-sm-4">
            <div className="embed-spotify">
              <div className="embed-spotify-body">
                <iframe
                  src="https://open.spotify.com/embed/track/4aTtHoSBB0CuQGA6vXBNyp"
                  className="iframe-spofity"
                  allowFullScreen
                  scrolling="no"
                  allow="encrypted-media"
                  title={"home"}
                ></iframe>
              </div>
            </div>
          </div>
          {/* Hold You Tonight */}
          <div className="col-sm-4">
            <div className="embed-spotify">
              <div className="embed-spotify-body">
                <iframe
                  src="https://open.spotify.com/embed/track/58jecLK0epwMLr9cy5vFUy"
                  className="iframe-spofity"
                  allowFullScreen
                  scrolling="no"
                  allow="encrypted-media"
                  title={"hold-you-tonight"}
                ></iframe>
              </div>
            </div>
          </div>
          {/* Cry */}
          <div className="col-sm-4">
            <div className="embed-spotify">
              <div className="embed-spotify-body">
                <iframe
                  src="https://open.spotify.com/embed/track/1TF8rXy87zrnpBlS9TLykA"
                  className="iframe-spofity"
                  allowFullScreens
                  scrolling="no"
                  allow="encrypted-media"
                  title={"cry"}
                ></iframe>
              </div>
            </div>
          </div>
          {/* Nightlight */}
          <div className="col-sm-4">
            <div className="embed-spotify">
              <div className="embed-spotify-body">
                <iframe
                  src="https://open.spotify.com/embed/track/06kxa3al7bUqRRo5nAFduZ"
                  className="iframe-spofity"
                  allowFullScreens
                  scrolling="no"
                  allow="encrypted-media"
                  title={"nightlight"}
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
