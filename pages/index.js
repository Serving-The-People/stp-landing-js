import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
	      <title>Serving The People - The Social Platform of the Future, Today</title>	<meta name="description" content="The Social Platform of the Future, Today" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Serving The People" />
        <meta property="og:description" content="The Social Platform of the Future, Today" />
        <meta property="og:url" content="https://stp.world/" />
        <meta property="og:site_name" content="Serving The People" />
        <meta property="og:image" content="/stp-home-logo.png" />
        <meta property="og:image:width" content="600" />
        <meta property="og:image:height" content="592" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@STPcommunity" />
        <meta name="msapplication-TileImage" content="/stp-home-logo.png" />
      
        <link rel="icon" href="/stp-home-logo.png" sizes="32x32" />
        <link rel="icon" href="/stp-home-logo.png" sizes="192x192" />
        <link rel="apple-touch-icon" href="/stp-home-logo.png" />
        <link rel="canonical" href="https://stp.world/" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" ></link>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css"></link>

      </Head>

      
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" ></script>

  
      <>
      <header class="p-3">
          <div class="container">
            <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
              <a href="" class="d-flex align-items-center mb-2 mb-lg-0  text-decoration-none">
                <img class="bi me-2" width="36" height="30" role="img" src="http://home.stp.world/stp-home-logo.png"/>
              </a>
              <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0 fw-bold">
                <li><a href="https://docs.stp.world/" class="nav-link px-2 ">Docs</a></li>
                <li><a href="https://stp.world/" class="nav-link px-2 ">Blog</a></li>
                <li><a href="https://stp.world/radio" class="nav-link px-2 ">Radio</a></li>
                <li><a href="https://shop.stp.world/" class="nav-link px-2 ">Shop</a></li>
              </ul>
              <div class="text-end">
                <button type="button" class="btn me-2" href="https://stp.world/contact/">Contact Team</button>
                
                <button type="button" class="btn btn-secondary" href="https://discord.gg/nhqyng5wQ9">Join Discord</button>
              </div>
            </div>
          </div>
      </header>  

      <main class="container">
        <div class="text-center">
          <h1 class="display-3 fw-bold mt-5">Welcome to<br></br>
          Serving the People!</h1>
          <div class="col-lg-12 mx-auto">
            <p class=" mb-5">Serving the People is a group of creatives and technologists<br></br>
              building the future of creativity, collaboration,<br></br>
              and communication.</p>
          </div>
          <h3 class="display-6 fw-bold pt-4">Join our community</h3>
          <p class=" mb-4">Currently <b>1,686 creators</b><br></br>
          <b>2,055 Seeds</b> on <a href="https://opensea.io/collection/seeds-luciensmith">OpenSea</a></p>

          <div class="mx-auto mb-4" style="max-width:420px;">
            <form class="row row-cols-xs-auto g-3 align-items-center">
              <div class="col-6">
                <label class="visually-hidden" for="inlineFormInputGroupUsername">Quantity</label>
                <div class="input-group">
                  <input type="number" class="form-control" id="inlineFormInputGroupUsername" placeholder="1 or More"
                  />
                </div>
              </div>
              <div class="col-6">
                <button type="submit" class="btn btn-primary btn-block w-100">Mint a Seed</button>
              </div>
            </form>
          </div>
          <p>
            <a href="https://docs.stp.world/mint-a-seed">Learn More</a>
          </p>
        </div>
      </main>
      <footer class="d-flex flex-wrap justify-content-between align-items-end py-3 my-4 container">
        <div class="col-md-4 d-flex align-items-center">
          <span class=" mb-md-0">© 2022 Serving The People, Inc.</span>
        </div>
        <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li class="ms-3"><a href="https://opensea.io/collection/seeds-luciensmith">
          <i class="bi bi-opensea"><img style="vertical-align:-.18em;"width="18" height="18" src="opensea.svg"/></i></a></li>
          <li class="ms-3"><a href="https://www.instagram.com/servingthepeople/"><i class="bi bi-instagram"></i></a></li>
          <li class="ms-3"><a href="https://twitter.com/STPcommunity"><i class="bi bi-twitter"></i></a></li>
          <li class="ms-3"><a href="https://discord.gg/nhqyng5wQ9"><i class="bi bi-discord"></i></a></li>
        </ul>
      </footer>
      </>
    </div>
  )
}
