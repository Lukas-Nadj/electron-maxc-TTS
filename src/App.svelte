<script>
  let textarea = "";
  let lang = "English";
  let disabled = false;
  async function read() {
    disabled = true;
    console.log(textarea+" testing");
    await window.electronApi.read(textarea, lang);
    setTimeout(function() {disabled = false;}, 1500);
    
  }
</script>

<main>
  <h1>TTS application</h1>
  <textarea bind:value={textarea} type="text" name="BRuh" id="" style="width: 800px; height: 600px; padding-top: 12px"></textarea>
  <div style="display: flex; align-items: center; justify-content: center; height: auto">
    <input type="radio" id="contactChoice1" name="voices" value="Danish" bind:group={lang}/>
    <label for="contactChoice1">Danish</label>
    <input type="radio" id="contactChoice2" name="voices" value="English" bind:group={lang}/>
    <label for="contactChoice2" >English</label>
    <button disabled="{disabled}" on:click={read} style=" height: auto; width: auto; margin: 6px; margin-left: 25px; display: flex; justify-content: center; align-items: center; border-radius: 100px; {disabled ? 'Background-color: gray': ''}">Speak aloud <img style="margin-left: 5px" width="25px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Speaker_Icon.svg/2048px-Speaker_Icon.svg.png" alt=""></button>
  </div>
</main>

<style>
  *:focus-visible{
    outline: none !important;
  }
  .border-box{
    box-sizing: border-box;
  }
  main{
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-justify: center;
    width: 100%;
    height: 100%;
    padding: 0px;
  }

  .title{
    display: flex;
    justify-content: center;
    width: 100%;
    text-align: center;
    text-shadow: 0px 5px 15px black;
  }
  .box{
    background-color: rgb(49, 49, 49);
    padding: 8px;
    padding-top: 2px;
    height: 150px;
    border-radius: 12px;
  }

  p, h1, h2, h3, h4, h5, h6{
    margin-top: 0.5rem;
    margin-bottom: 0.25rem;
  }

  .caloriecounter{
    height: 25px;
    padding: 0px;
    background-color: rgb(24, 47, 47);
    border: 2px solid rgb(31, 55, 55);
    margin-bottom: 5px;
    overflow: hidden;
  }
  .progress{
    display: flex;
    box-sizing: border-box;
    justify-content: end;
    align-items: center;
    width: calc(50%);
    height: 100%;
    padding-right: 5px;
    background-color: rgb(194, 242, 242);
    color: black;
  }
</style>