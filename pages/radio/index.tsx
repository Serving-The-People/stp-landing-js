import { useEffect, useState, FC } from "react";
import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import Link from "next/link";


const Radio = () => {
    return (
    <div>
      <Head>
        <title>
          Serving The People - The Social Platform of the Future, Today
        </title>
        <meta
          name="description"
          content="The Social Platform of the Future, Today"
        />
        <meta charSet="UTF-8"></meta>
        <meta name="viewport" content="width=1080"></meta>
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Serving The People" />
        <meta
          property="og:description"
          content="The Social Platform of the Future, Today"
        />
        <meta property="og:url" content="https://stp.world/" />
        <meta property="og:site_name" content="Serving The People" />
        <meta property="og:image" content="/stp-logo.png" />
        <meta property="og:image:width" content="600" />
        <meta property="og:image:height" content="592" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@STPcommunity" />
        <meta name="msapplication-TileImage" content="/stp-logo.png" />
        <link rel="icon" href="/stp-logo.png" sizes="32x32" />
        <link rel="icon" href="/stp-logo.png" sizes="192x192" />
        <link rel="apple-touch-icon" href="/stp-logo.png" />
        <link rel="canonical" href="https://stp.world/" />
      </Head>

      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js"></Script>

      <>
        <header className="p-3">
          <div className="container">
            <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <Link href="/">
                <a className="d-flex align-items-center mb-2 mb-lg-0  text-decoration-none me-2">
                <Image
                  className="bi"
                  width={36}
                  height={30}
                  src="/stp-logo.png"
                  alt="Serving The People - Smiling Sun"
                />
              </a>
              </Link>
              <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0 fw-bold">
                <li>
                  <a href="https://docs.stp.world/" className="nav-link px-2 ">
                    Docs
                  </a>
                </li>
                <li>
                  <a href="https://stp.world/" className="nav-link px-2 ">
                    Blog
                  </a>
                </li>
                <li>
                  <Link href="/radio">
                  <a className="nav-link px-2 ">Radio</a>
                  </Link>
                </li>
                <li>
                  <a href="https://shop.stp.world/" className="nav-link px-2 ">
                    Shop
                  </a>
                </li>
              </ul>
              <div className="text-end">
                <a
                  type="button"
                  className="btn me-2"
                  href="https://stp.world/contact/"
                >
                  Contact Team
                </a>

                <a
                  type="button"
                  className="btn btn-secondary"
                  href="https://discord.gg/nhqyng5wQ9"
                >
                  Join Discord
                </a>
              </div>
            </div>
          </div>
        </header>

        <main className="container">
          <div className="text-center">
            <h1 className="display-3 fw-bold mt-5">
            RADIO
            </h1>
            <div className="col-lg-12 mx-auto">
              <p className="lead mb-3">
               RADIO
              </p>
            </div>
           
          
          </div>
        </main>
        <footer className="d-flex flex-wrap justify-content-center align-items-center py-3 my-4 container">
         
          <ul className="nav col-md-4 justify-content-center list-unstyled d-flex">
            <li className="d-flex ms-3">
              <a
                href="https://opensea.io/collection/seeds-luciensmith"
                className="d-flex"
              >Opensea
              </a>
            </li>
            <li className="ms-3">
              <a href="https://www.instagram.com/servingthepeople/">
               Instagram
              </a>
            </li>
            <li className="ms-3">
              <a href="https://twitter.com/STPcommunity">
                Twitter
              </a>
            </li>
            <li className="ms-3">
              <a href="https://discord.gg/nhqyng5wQ9">
                Discord
              </a>
            </li>
          </ul>
        </footer>
      </>
    </div> 
    
    )
}
export default Radio;
