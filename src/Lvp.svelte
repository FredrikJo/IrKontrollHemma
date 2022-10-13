<script>

  let currentTemp = '';
  let temporaryTemp = 20;
  export let irBlasterUrl = 'http://unknown.url';

  function sendCmd(cmd) {
    console.log(cmd);
    let url = irBlasterUrl + '/cm?cmnd=' + encodeURIComponent(cmd);
    console.log(url);
    fetch(url, { mode: 'no-cors', referrerPolicy: "unsafe-url" });
  }

  function getLvpCmd(turnOrKeepOn, temp) {
    let power = turnOrKeepOn ? "On" : "Off";
    let tempToUse = temp ? temp : 20;
    currentTemp = turnOrKeepOn ? tempToUse : currentTemp;

    return 'IRhvac {"Vendor":"SHARP_AC","Model":3,"Mode":"Heat","Power":"' + power + '","Celsius":"On","Temp":' + tempToUse + ',"FanSpeed":"Auto","SwingV":"Off","SwingH":"Off","Quiet":"Off","Turbo":"Off","Econo":"Off","Light":"Off","Filter":"On","Clean":"Off","Beep":"Off","Sleep":-1}'
  }
</script>

  <div>Electrolux luftvarmepump</div>
  <div>Current temp: {currentTemp}</div>
  <div>
    <label>
      <input type=number bind:value={temporaryTemp} min=18 max=26>
      <input type=range bind:value={temporaryTemp} min=18 max=26>
    </label>
  </div>
  <div>
    <button on:click={() => sendCmd(getLvpCmd(true, temporaryTemp))}>Start/set temp</button>
  </div>
  <div>
    <button on:click={() => sendCmd(getLvpCmd(false, currentTemp))}>Stop</button>
  </div>

