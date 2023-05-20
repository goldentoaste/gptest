<script>
    
    let text = "";

    let response = "";

    async function load() {
        fetch("api/bias/", {
            method: "POST",
            body: JSON.stringify({
                data:text
            })
        })
            .then((res) => res.text())
            .then((t) => {
                response = t;
            });
    }
</script>

<div>
    <h1>BBBIAS CHECKER</h1>

    <h3>Enter some type and maybe Gpt3 will tell if its biased</h3>
    <div>
        <label for="area">
            Text with potential bias here:
        </label>
        <textarea
        id="area"
        placeholder="enter here..."
        rows="5"
        cols="60"
        bind:value={text}
    />

    </div>
    
    <button on:click={load}> GO </button>

    {#if response}
        <p>
            Gpt3 says: {response}
        </p>
    {:else}
        Nothing from gpt yet
    {/if}
</div>

<style>
    textarea,
    label {
        font-size: larger;
    }
</style>
