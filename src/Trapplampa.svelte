<script>
  //import {makeUnsafeHttpGetRequest} from './util.js'

  function sendBlinkOn() {
    let url = 'http://tasmota-0f5bba-7098.lan/cm?cmnd=' + encodeURIComponent('power1 3');
    console.log(url);
    fetch(url, { mode: 'no-cors', referrerPolicy: "unsafe-url" });
    //makeUnsafeHttpGetRequest(url);
  }

  function sendBlinkOff() {
    let url = 'http://tasmota-0f5bba-7098.lan/cm?cmnd=' + encodeURIComponent('power1 4');
    console.log(url);
    fetch(url, { mode: 'no-cors', referrerPolicy: "unsafe-url" });
    //makeUnsafeHttpGetRequest(url);
  }

</script>

  <div>Trapplampa</div>
  <div>
    <button on:click={sendBlinkOn}>Blink ON</button>
  </div>
  <div>
    <button on:click={sendBlinkOff}>Blink OFF</button>
  </div>

