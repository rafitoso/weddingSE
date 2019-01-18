<template>
  <div class="home">
    <slider></slider>

    <OurStoryShort></OurStoryShort>

    <SaveTheDate></SaveTheDate>

    <WhenAndWhere></WhenAndWhere>

    <rsvp></rsvp>

  </div>
</template>

<script>
import Slider from '@/components/sections/Slider'
import Rsvp from '@/components/sections/Rsvp'
import OurStory from '@/components/sections/OurStory'
import OurStoryShort from '@/components/sections/OurStoryShort'
import SaveTheDate from '@/components/sections/SaveTheDate'
import WhenAndWhere from '@/components/sections/WhenAndWhere'

export default {
  name: 'Home',
  components: {
    Slider,
    Rsvp, 
    OurStory,
    OurStoryShort,
    SaveTheDate,
    WhenAndWhere
  },
  props: {
    msg: {
      default: 'Bienvenue',
      type: String
    }
  },
  data () {
    return {
      // msg: this.msg
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div.home {
  text-align: left;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
