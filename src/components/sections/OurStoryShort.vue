<template>
	<div class="our-story">
		<section class="gla_section gla_image_bck" data-color="#f2f2f2">
            <div class="container text-center">
                <div class="text-center">
                  <!-- <img src="/static/images/bouquet_sophie.png" data-bottom-top="/static/images/bouquet_sophie.png; opacity:1" height="250" alt=""> -->
                  <!-- <img src="/static/images/animations/flower6.gif" data-bottom-top="/static/images/animations/flower6.gif; opacity:1" class="gla_animated_flower" height="110" alt=""> -->
                  <div class="gla_round_block">
                    <div class="gla_round_im gla_image_bck" data-image="/static/images/F1020010.jpg" style="margin-top:-70px;margin-bottom:30px;"></div>
                  </div>
                </div>
                <h2 v-html="$t('our_story.title')"></h2>
                <div class="row text-center">
                  <div class="col-md-12">   
                    <p v-html="$t('our_story.p1')"></p>
                    <p v-html="$t('our_story.p2')"></p>
                    <p><span v-html="$t('our_story.p3')"></span><i> {{ $t('our_story.question') }}</i> &raquo;</p>
                    <cite class="quote"><strong>{{ $t('our_story.answer') }}</strong></cite>
                  </div>
                </div>
                <img src="/static/images/petite-fleur-sophie.png" height="90" style="margin-top: 40px;margin-bottom: -20px;">
            </div>
        </section>
	</div>
</template>

<script>

export default {
  name: 'OurStoryShort',
  components: {
  
  },
  data () {
    return {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>