<script>
    let name = 'person';
    let src = 'https://media1.tenor.com/m/t0uxZ-qpK8kAAAAd/rivesid-obama.gif';
    let count = $state(0);
    let nums = $state([]);


    function increment(delta = 1){
        if(count > 0 || delta > 0){
            count += delta;
            if(delta > 0){
                nums.push(count)
            }
            else{
                nums.pop();
            }
        }
        
    }
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
    }

    .card {
    --bulma-card-header-color: hsl(0deg,0%,28%);
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
</nav>




<div class="container mt-6 mb-6">
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
{/each}