<script >
    let prompt =
        "Check if there are any misinformation in the following text. In less than 100 words.";
    let temp = 0.4;

    let response = "";

    async function load() {
        response = "";
        fetch("api/general/", {
            method: "POST",
            body: JSON.stringify({
                prompt: prompt,
                temp: temp,
            }),
        })
            .then((res) => res.text())
            .then((t) => {
                response = t;
            });
    }
</script>

<div>
    <h1>Your prompt, *your* gpt response</h1>

    <h3>Enter custom prompt here.</h3>
    <div>
        <label for="area"> Prompt here </label>
        <textarea
            id="area"
            placeholder="enter here..."
            rows="5"
            cols="60"
            bind:value={prompt} 
        />

        <label for="temp"> Temp:</label>
        <input id="tmep" type="number" min="0" max="2" bind:value={temp} />
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
