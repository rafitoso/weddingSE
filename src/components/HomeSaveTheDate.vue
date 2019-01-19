<template>
    <div class="pageSaveTheDate">
        <section class="gla_section gla_image_bck gla_fixed gla_wht_txt" data-stellar-background-ratio="0.8" data-image="/static/images/sophieetmancrop.jpg">
            <div class="gla_over" data-color="#282828" data-opacity="0.4"></div>
            <div class="container text-center">
                <p><img src="/static/images/animations/savethedate_wh.gif" data-bottom-top="@src:/static/images/animations/savethedate_wh.gif" height="150" alt=""></p>
                <h2>21,22 et 23 Juin 2019</h2>
                <h3 class="gla_subtitle">Mairie de S<sup>t</sup> Brisson sur Loire, Loiret, France.</h3>
                <div class="gla_countdown" data-year="2019" data-month="06" data-day="21" data-hour="15" data-minute="0"></div>
            </div>
        </section>

        <OurStory></OurStory>
        
        <rsvp></rsvp>
    </div>
</template>

<script>
import Rsvp from '@/components/sections/Rsvp'
import OurStory from '@/components/sections/OurStory'
export default {
  name: 'HomeSaveTheDate',
  components: {
    Rsvp, 
    OurStory
  },
  data () {
    return {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>