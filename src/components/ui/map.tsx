// pages/map.js

import Head from "next/head";
import Script from "next/script";

export default function Map() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="content-type" content="text/html; charset=UTF-8" />
        <title>Orange Map</title>
        <link
          rel="stylesheet"
          href="https://orangecodingacademy.com/layout/css/bootstrap.min.css"
        />
        <link
          rel="stylesheet"
          href="https://orangecodingacademy.com/layout/css/fontawesome.css"
        />
        <link
          rel="stylesheet"
          href="https://orangecodingacademy.com/layout/css/main.css"
        />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
          crossOrigin="anonymous"
        />
      </Head>
      <style jsx>{`
        .container {
          margin: auto;
        }
        form {
          color: #ff7900 !important;
          border-color: #000 !important;
          margin: 1%;
        }

        .modal-dialog {
          width: 1000%;
        }
        .navbar-text {
          display: flex;
          flex-direction: column;
          text-align: center !important;
          color: #ff7900 !important;
        }

        @media (max-width: 768px) {
          .navbar-text {
            order: 1;
            font-size: 90%;
            text-align: center;
            margin: auto;
          }
        }
      `}</style>
      <style jsx global>{`
        body {
          background-color: #000 !important;
        }
      `}</style>

      <div className="container "></div>

      <div id="map" className="map-orange animat">
        <div className="navbar-text">
          <h2 className="text-center text-2xl md:text-6xl">Our Locations</h2>
        </div>
      </div>

      <div id="content-wrapper" style={{ display: "none" }}></div>
      <div className="cover_photo_map" style={{ display: "none" }}></div>

      <footer style={{ textAlign: "center" }}>
        <span className="Created">
          <a
            href="https://www.orange.jo/en/pages/default.aspx"
            className="copyright"
          >
            © Orange 2024
          </a>{" "}
          Created by Orange Coding Academy{" "}
          <strong>
            <a href="/qr">QR Link</a>
          </strong>
        </span>
      </footer>

      <Script src="https://orangecodingacademy.com/layout/js/jquery-3.5.1.min.js"></Script>
      <Script src="https://orangecodingacademy.com/layout/js/bootstrap.min.js"></Script>
      <Script src="https://orangecodingacademy.com/layout/js/mapdata.js"></Script>
      <Script src="https://orangecodingacademy.com/layout/js/countrymap.js"></Script>
    </>
  );
}
