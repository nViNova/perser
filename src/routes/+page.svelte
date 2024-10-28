<script>
    let name = 'person';
    let src = 'https://media1.tenor.com/m/t0uxZ-qpK8kAAAAd/rivesid-obama.gif';
    let count = $state(0);
    let nums = $state([0]);

    function increment(){
        count++;
        nums.push(count);
    }

</script>

<style>
    page{
        background-color: #f8f8f8;
    }
    h1 {
        color: #484848;
        font-family: sans-serif;
        text-align: center;
    }
</style>    

<page>
    <h1>Hello {name}!</h1>
    <p>{nums.join(", ")}</p>
    <button onclick={increment}>
        Clicked {count} times
    </button>
    <img {src} alt="obama."/>
</page>

