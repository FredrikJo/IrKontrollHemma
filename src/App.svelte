<script>
  import LvpModule from './Lvp.svelte'
  import TvModule from './Tv.svelte'
  import SoundbarModule from './Soundbar.svelte'
  import TrapplampaModule from './Trapplampa.svelte'

  export const IR_BLASTER_URL = 'http://tasmota-70af63-3939.lan'

</script>

<main>
  <div>
    <LvpModule irBlasterUrl={IR_BLASTER_URL}/>
  </div>

  <br/>
  <br/>

  <div>
    <TvModule irBlasterUrl={IR_BLASTER_URL}/>
  </div>

  <br/>
  <br/>

  <div>
    <SoundbarModule irBlasterUrl={IR_BLASTER_URL}/>
  </div>

  <br/>
  <br/>

  <div>
    <TrapplampaModule/>
  </div>
</main>

