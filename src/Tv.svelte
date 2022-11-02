<script>

  export let irBlasterUrl = 'http://unknown.url';

  let CMD_ON_OFF = '{"Protocol":"SAMSUNG","Bits":32,"Data":"0xE0E040BF","DataLSB":"0x70702FD","Repeat":0}';
  const CMD_VOL_UP = '{"Protocol":"SAMSUNG","Bits":32,"Data":"0xE0E0E01F","DataLSB":"0x70707F8","Repeat":0}';
  const CMD_VOL_DOWN = '{"Protocol":"SAMSUNG","Bits":32,"Data":"0xE0E0D02F","DataLSB":"0x7070BF4","Repeat":0}';
  const CMD_CH_UP = '{"Protocol":"SAMSUNG","Bits":32,"Data":"0xE0E048B7","DataLSB":"0x70712ED","Repeat":0}';
  const CMD_CH_DOWN = '{"Protocol":"SAMSUNG","Bits":32,"Data":"0xE0E008F7","DataLSB":"0x70710EF","Repeat":0}';
  const CMD_SOURCE = '{"Protocol":"SAMSUNG","Bits":32,"Data":"0xE0E0807F","DataLSB":"0x70701FE","Repeat":0}';
  const CMD_HDMI = '{"Protocol":"SAMSUNG","Bits":32,"Data":"0xE0E0D12E","DataLSB":"0x7078B74","Repeat":0}';
  const CMD_UP = '{"Protocol":"SAMSUNG","Bits":32,"Data":"0xE0E006F9","DataLSB":"0x707609F","Repeat":0}';
  const CMD_DOWN = '{"Protocol":"SAMSUNG","Bits":32,"Data":"0xE0E08679","DataLSB":"0x707619E","Repeat":0}';
  const CMD_LEFT = '{"Protocol":"SAMSUNG","Bits":32,"Data":"0xE0E0A659","DataLSB":"0x707659A","Repeat":0}';
  const CMD_RIGHT = '{"Protocol":"SAMSUNG","Bits":32,"Data":"0xE0E046B9","DataLSB":"0x707629D","Repeat":0}';
  const CMD_OK = '{"Protocol":"SAMSUNG","Bits":32,"Data":"0xE0E016E9","DataLSB":"0x7076897","Repeat":0}';
  const CMD_RETURN = '{"Protocol":"SAMSUNG","Bits":32,"Data":"0xE0E01AE5","DataLSB":"0x70758A7","Repeat":0}';
  const CMD_EXIT = '{"Protocol":"SAMSUNG","Bits":32,"Data":"0xE0E0B44B","DataLSB":"0x7072DD2","Repeat":0}';
  const CMD_MENU = '{"Protocol":"SAMSUNG","Bits":32,"Data":"0xE0E058A7","DataLSB":"0x7071AE5","Repeat":0}';



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
    <button on:click={() => sendCmd(CMD_OK)}>OK</button>
  </div>
  <div>
    <button on:click={() => sendCmd(CMD_VOL_UP)}>Vol +</button>
    <button on:click={() => sendCmd(CMD_CH_UP)}>Ch +</button>
  </div>
  <div>
    <button on:click={() => sendCmd(CMD_VOL_DOWN)}>Vol -</button>
    <button on:click={() => sendCmd(CMD_CH_DOWN)}>Ch -</button>
  </div>
  <div>
    <button on:click={() => sendCmd(CMD_LEFT)}>&lt;</button>
    <button on:click={() => sendCmd(CMD_UP)}>^</button>
    <button on:click={() => sendCmd(CMD_RIGHT)}>&gt;</button>
  </div>
  <div>
    <button on:click={() => sendCmd(CMD_RETURN)}>Return</button>
    <button on:click={() => sendCmd(CMD_DOWN)}>v</button>
    <button on:click={() => sendCmd(CMD_EXIT)}>Exit</button>
  </div>
  <div>
    <button on:click={() => sendCmd(CMD_HDMI)}>HDMI</button>
    <button on:click={() => sendCmd(CMD_SOURCE)}>Source</button>
    <button on:click={() => sendCmd(CMD_MENU)}>Menu</button>
  </div>

