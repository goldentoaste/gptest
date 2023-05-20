
<script>


    let type = "Generic"

    let count = 3;


    let loading = false;

    let response = ""



    async function load (){
        fetch ("api/", {
            method:"GET",
            headers: {
                charType: type,
                count: count+""
            }
        }).then((res)=>res.text()).then((text)=>{response = text})
    }
</script>

<h1>

    GPT GPT GPT GPTEST
</h1>

<h3>
    Enter type and count to get a list of character names.
</h3>


<div>
    <label for="char">
        Character:
    </label>
    <input type="text" bind:value={type} id="char "> 
</div>
<div>
    <label for="count">
        Count:
    </label>
    <input type="number" bind:value={count} id="count"> 
</div>

<button on:click={load}>
    GO
</button>


{#if response}
    Gpt3 says: {response}

    {:else}
    Nothing from gpt yet
{/if}




<style>
    input {
        font-size: larger;
    }
</style>

