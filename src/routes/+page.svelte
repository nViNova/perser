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
        --bulma-body-background-color: hsl(0, 0%,97%);
        --bulma-body-color: hsl(0deg,0%,28%);
        }

    .content {
    --bulma-content-heading-color: hsl(0deg,0%,28%);
    }

    .title {
    --bulma-title-color: hsl(0deg,0%,28%);
    --bulma-title-strong-color: hsl(0deg,0%,28%);
    --bulma-title-strong-weight: hsl(0deg,0%,28%);
    }


    
</style>    



<div class="columns">
    <div class="column is-7 is-align-self-center">
        <div class="ml-6 mt-1">

            <h1 class="title">Hello {name}!</h1>
            <button class="button is-primary" onclick={() => increment()}>
                Added Obama {count} times
            </button>
            <button class="button is-danger" onclick="{() => increment(-1)}">
                Removama
            </button>

        </div>
    </div>
    
    <div class="column">
        {#each nums as num}
        <img {src} alt="obama."/>
        {/each}
    </div>
    
</div>

