<script>

  export let irBlasterUrl = 'http://unknown.url';

  let CMD_ON_OFF = '{"Protocol":"PIONEER","Bits":64,"Data":"0x659A857AF50A3DC2","DataLSB":"0xA659A15EAF50BC43","Repeat":0}';
  const CMD_VOL_UP = '{"Protocol":"PIONEER","Bits":64,"Data":"0x659A50AF659A50AF","DataLSB":"0xA6590AF5A6590AF5","Repeat":0}';
  const CMD_VOL_DOWN = '{"Protocol":"PIONEER","Bits":64,"Data":"0x659AD02F659AD02F","DataLSB":"0xA6590BF4A6590BF4","Repeat":0}';

  function sendCmd(cmd) {
    console.log(cmd);
    let url = irBlasterUrl + '/cm?cmnd=' + encodeURIComponent('IRsend ' + cmd);
    console.log(url);
    fetch(url, { mode: 'no-cors'});
  }

</script>

  <div>Pioneer Soundbar</div>
  <div>
    <button on:click={() => sendCmd(CMD_ON_OFF)}>ON/OFF</button>
  </div>
  <div>
    <button on:click={() => sendCmd(CMD_VOL_UP)}>Vol +</button>
  </div>
  <div>
    <button on:click={() => sendCmd(CMD_VOL_DOWN)}>Vol -</button>
  </div>

