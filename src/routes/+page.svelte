<script>
    let name = 'person';
    let src = 'https://media1.tenor.com/m/t0uxZ-qpK8kAAAAd/rivesid-obama.gif';
    let articles = $state([1,2,3,4,5,6,7]);
</script>


<style>
    @import "https://cdn.jsdelivr.net/npm/bulma@1.0.2/css/bulma.min.css";
    :root {
      --bulma-primary-h: 54deg;
      --bulma-primary-s: 98%;
      --bulma-primary-l: 50%;
      --bulma-scheme-h: 0;
      --bulma-scheme-s: 0%;
      --bulma-light-l: 97%;
      --bulma-body-background-color: hsl(0,0%,97%);
      --bulma-body-color: hsl(0deg,0%,28%);
      --bulma-strong-color: hsl(0deg,0%,28%);
      --bulma-subtitle-color: hsl(0deg,0%,28%);
      --bulma-subtitle-strong-color: hsl(0deg,0%,28%);
    }

    .card {
      --bulma-card-color: hsl(0deg,0%,28%);
      --bulma-card-background-color: hsl(0,0,97%);
      --bulma-card-header-color: hsl(0deg,0%,28%);
    }

    .navbar {
      --bulma-navbar-background-color: hsl(0,0%,97%);
    }

    .tabs {
      --bulma-tabs-link-active-color: hsl(221deg,14%,21%);
      --bulma-tabs-boxed-link-hover-background-color: hsl(54,98%,50%);
      --bulma-tabs-boxed-link-active-background-color: hsl(54,98%,50%);
    }

    .title {
      --bulma-title-color: hsl(0deg,0%,28%);
    }


</style>    


<nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="/" aria-label="home">
        <img src="./favicon.svg" alt="logo">
      </a>
  
      <a role="button" href="/" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="menubar">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div id="menubar" class="navbar-menu">
        <div class="navbar-start">
            <a class="navbar-item" href="/">
              Parsearch News
            </a>
      
            <a class="navbar-item" href="/">
              Features
            </a>

            <a class="navbar-item" href="/">
                HoDCS
              </a>
      
            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link" href="/">
                More
              </a>
      
              <div class="navbar-dropdown">
                <a class="navbar-item" href="/">
                  About
                </a>
                <a class="navbar-item" href="/">
                  Contact Us
                </a>
                <a class="navbar-item" href="/">
                  Join Us
                </a>
                <hr class="navbar-divider">
                <a class="navbar-item" href="/">
                  Report an issue
                </a>
              </div>
            </div>
    </div>
</nav>

<section class="hero mb-6">
  <div class="hero-body">
    <div class="container has-text-centered">
      <!-- <figure class="image">
        <img 
            src="./titlelogo.png"
            alt="Bootcamp 11.0: DCS welcomes Batch 2024"
        />
    </figure> -->
      <p class="title">Take apart, Take a part.</p>
      <p class="subtitle">We dont just write code; we write.</p>
    </div>
    
  </div>
  <div class="hero-foot">
    <nav class="tabs mx-2 is-boxed is-fullwidth">
      <div class="container">
        <ul>
          <li class="is-active">
            <a>Home</a>
          </li>
          <li>
            <a>Parsearch News</a>
          </li>
          <li>
            <a>Feature</a>
          </li>
          <li>
            <a>HoDCS</a>
          </li>
          <li>
            <a>Announcements</a>
          </li>
          <li>
            <a>About</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</section>

<div class="columns mx-6">

    <div class="column">
      <!-- space taker -->
    </div>

    <div class="column is-two-fifths">
      <div class="card">
        <div class="card-image">
        <figure class="image is-16by9">
            <img 
                src="https://miro.medium.com/v2/resize:fit:786/format:webp/1*bS4bd25L7fwKgvT6vaanBg.jpeg"
                alt="Bootcamp 11.0: DCS welcomes Batch 2024"
            />
        </figure>
        </div>
        <div class="card-content">
          <p class="title is-2 mb-3">Bootcamp 11.0: DCS welcomes Batch 2024</p>
          <p class="mb-3 has-text-weight-light">By Eriene Galinato and Gabriel De Guzman</p>

          <p class="is-6 mb-3 has-text-justified">Last August 7–9, the incoming Department of Computer Science held Bootcamp 11.0: the annual three-day introductory event for freshies, shiftees, and transferees (FSTs).</p>
          
          <span class="tag is-black">DCS</span>
          <span class="tag is-white">Bootcamp</span>
          <span class="tag is-primary">Feature</span>
          <span class="tag is-warning">Batch 2024</span>
        </div>
      </div>
    </div>

    <!-- other news -->
       
    <div class="column">
      {#each articles as article}
      <div class="card">
        <div class="card-image">
        <figure class="image is-4by3">
            <img 
                src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*sz2iWH885h_4B4Olhsv_qQ.jpeg"
                alt="DOST broaches ‘ISIP Program,’ ‘Project Marayum’ for natural language research"
            />
        </figure>
        </div>
        <div class="card-content">
          <p class="title is-5 mb-3">DOST broaches ‘ISIP Program,’ ‘Project Marayum’ for natural language research</p>
          <p class="mb-3 has-text-weight-light">By Abram Marcelo</p>
          
          <p class="is-6 mb-3">On April 4, 2024, the Philippines launched the NCSP under the Executive Order #58 to enhance the nation’s cybersecurity landscape.</p>
          <span class="tag is-black">NLP</span>
          <span class="tag is-primary">Parsearch News</span>
          
        </div>
      </div>
      {/each}
    </div>

    <div class="column">
      <!-- space taker -->
    </div>

</div>




<!-- <div class="container mt-6 mb-6">
    <h1 class="title">Hello {name}!</h1>
    <button class="button is-primary" onclick={() => increment()}>
        Added Obama {count} times
    </button>
    <button class="button is-danger" onclick="{() => increment(-1)}">
        Removama
    </button>
</div>



{#each nums as num}
<img {src} width="20%" alt="obama."/>
{/each} -->