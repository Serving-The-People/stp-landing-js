import { useEffect, useState, FC } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { providers, Contract, utils, BigNumber } from "ethers";
import SeedsABI from "../components/hooks/SeedsABI.json";

import { MintSeedForm } from "../components/MintSeedForm";
import { SEEDS_CONTRACT_ADDRESS } from "../components/hooks/useSeedsContract";

import { GetServerSideProps } from "next";

type PageProps = {
  discordMemberCount: string;
  seedsSupply: string;
};

export const getServerSideProps: GetServerSideProps<PageProps> = async (
  ctx
) => {
  const res = await fetch(new URL("/api/discord", process.env.NODE_BASE_URL));
  const json = await res.json();

  const provider = new providers.JsonRpcProvider(
    `https://eth-mainnet.alchemyapi.io/v2/${process.env.NODE_ALCHEMY_KEY}`
  );
  const seedsInterface = new utils.Interface(SeedsABI);
  const SeedsContract = new Contract(
    SEEDS_CONTRACT_ADDRESS,
    seedsInterface,
    provider
  );

  const seedsHolders: BigNumber = await SeedsContract.totalSupply();
  return {
    props: {
      discordMemberCount: json.count,
      seedsSupply: seedsHolders.toString(),
    },
  };
};

const Home: FC<PageProps> = ({ discordMemberCount, seedsSupply }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
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
        <meta name="viewport" content="width=600"></meta>
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

      <Script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></Script>
      <Script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js"></Script>
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js"></Script>

      <>
        <header className="p-3">
          <div className="container">
            <nav className="navbar navbar-expand-lg">
              <Link href="/">
                <a className="navbar-brand">
                  <Image
                    className="bi me-1 logo"
                    width={40}
                    height={40}
                    src="/IMG_5549.png"
                    alt="Serving The People - Smiling Sun"
                    layout="responsive"
                  />
                </a>
              </Link>

              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarTogglerDemo02"
                aria-controls="navbarTogglerDemo02"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div
                className="collapse navbar-collapse justify-content-between "
                id="navbarTogglerDemo02"
              >
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                  <li className="nav-item">
                    <a
                      href="https://docs.stp.world/"
                      className="nav-link px-3"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Docs
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="https://blog.stp.world/"
                      className="nav-link px-3"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Blog
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="https://radio.stp.world"
                      className="nav-link px-3"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Radio
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="https://shop.stp.world/"
                      className="nav-link px-3"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Shop
                    </a>
                  </li>
                </ul>
                <div className="text-end">
                  <a
                    className="btn me-2 contactButton"
                    href="mailto:info@stp.world"
                  >
                    Contact Team
                  </a>
                  <a
                    className="btn btn-secondary px-4"
                    href="https://discord.gg/nhqyng5wQ9"
                  >
                    Join Discord
                  </a>
                </div>
              </div>
            </nav>
          </div>
        </header>

        <main className="container">
          <div className="text-center">
            <h1 className="display-3 fw-bold mt-5">
              Welcome to<br></br>
              Serving the People!
            </h1>
            <div className="col-lg-12 mx-auto">
              <p className="lead mb-3">
                Serving the People is a group of creatives and technologists
                <br></br>
                building the future of creativity, collaboration,<br></br>
                and communication.
              </p>
            </div>
            <h3 className="display-6 fw-bold pt-4">Join our community</h3>
            <p className=" mb-4">
              {discordMemberCount && (
                <>
                  Currently <b>{`${discordMemberCount}`} creators</b>
                  <br></br>
                </>
              )}
              {isClient && (
                <>
                  <b>{`${seedsSupply}`} Seeds</b> on{" "}
                </>
              )}
              <a href="https://opensea.io/collection/seeds-luciensmith">
                OpenSea
              </a>
            </p>

            <div className="mx-auto mb-4 ">
              <div className="row row-cols-xs-auto g-3 align-items-center">
                {isClient && <MintSeedForm />}
              </div>
            </div>
            <p>
              <a className="last" href="https://docs.stp.world/mint-a-seed">
                Learn More
              </a>
            </p>
          </div>
        </main>
        <footer className="d-flex flex-wrap justify-content-center align-items-center py-3 my-4 container">
          <ul className="nav col-md-12 justify-content-center list-unstyled d-flex">
            <li className="mx-4">
              <a href="https://discord.gg/nhqyng5wQ9">Discord</a>
            </li>
            <li className="mx-4">
              <a href="https://twitter.com/STPtweeeets">Twitter</a>
            </li>{" "}
            <li className="mx-4">
              <a href="https://www.instagram.com/servingthepeople/">
                Instagram
              </a>
            </li>
            <li className="d-flex mx-4">
              <a
                href="https://opensea.io/collection/seeds-luciensmith"
                className="d-flex"
              >
                Opensea
              </a>
            </li>
          </ul>
        </footer>
      </>
    </div>
  );
};

export default Home;
