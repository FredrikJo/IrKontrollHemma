<script>

  export let irBlasterUrl = 'http://unknown.url';

  let CMD_ON_OFF = '{"Protocol":"SAMSUNG","Bits":32,"Data":"0xE0E040BF","DataLSB":"0x70702FD","Repeat":0}';
  const CMD_VOL_UP = '{"Protocol":"SAMSUNG","Bits":32,"Data":"0xE0E0E01F","DataLSB":"0x70707F8","Repeat":0}';
  const CMD_VOL_DOWN = '{"Protocol":"SAMSUNG","Bits":32,"Data":"0xE0E0D02F","DataLSB":"0x7070BF4","Repeat":0}';
  const CMD_CH_UP = '{"Protocol":"SAMSUNG","Bits":32,"Data":"0xE0E048B7","DataLSB":"0x70712ED","Repeat":0}';
  const CMD_CH_DOWN = '{"Protocol":"SAMSUNG","Bits":32,"Data":"0xE0E008F7","DataLSB":"0x70710EF","Repeat":0}';

  function sendCmd(cmd) {
    console.log(cmd);
    let url = irBlasterUrl + '/cm?cmnd=' + encodeURIComponent('IRsend ' + cmd);
    console.log(url);
    fetch(url, { mode: 'no-cors', referrerPolicy: "unsafe-url" });
  }

</script>

  <div>Samsung TV</div>
  <div>
    <button on:click={() => sendCmd(CMD_ON_OFF)}>ON/OFF</button>
  </div>
  <div>
    <button on:click={() => sendCmd(CMD_VOL_UP)}>Vol +</button>
  </div>
  <div>
    <button on:click={() => sendCmd(CMD_VOL_DOWN)}>Vol -</button>
  </div>
  <div>
    <button on:click={() => sendCmd(CMD_CH_UP)}>Ch +</button>
  </div>
  <div>
    <button on:click={() => sendCmd(CMD_CH_DOWN)}>Ch -</button>
  </div>

