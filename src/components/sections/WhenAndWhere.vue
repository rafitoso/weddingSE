<template>
	<div class="when-and-where">
		<section class="gla_section"> 
      <div class="container">
        <div class="text-center">
          <p>
            <img src="/static/images/bouquet_sophie.png" data-bottom-top="/static/images/bouquet_sophie.png; opacity:1" height="250" style="margin-top: -20px;">
          </p>
          <h2 v-html="$t('when_and_where.h2')"></h2>
          <h3 class="gla_subtitle" v-html="$t('when_and_where.h3')"></h3>
          <p>
            {{ $t('when_and_where.description')}}
          </p>
        </div>
      
          <timeline align="left">
            <timeline-title><h3 style="margin:0px;">{{ $t('when_and_where.timeline.title_1')}}</h3></timeline-title>
            <timeline-item bg-color="#9dd8e0" style="border-bottom: none;">
              <b>{{ $t('when_and_where.timeline.cityhall.time')}}</b> - {{ $t('when_and_where.timeline.cityhall.title')}}<br>
              <small>{{ $t('when_and_where.timeline.cityhall.description')}}</small>
            </timeline-item>
             <timeline-item :hollow="true" class="item-timeline-mimou">
              <span v-html="$t('when_and_where.timeline.interlude')"></span> 
              <img src="/static/images/mimou-sereine.png">
             </timeline-item>
            <timeline-item bg-color="#9dd8e0">
              <b>{{ $t('when_and_where.timeline.ceremony.time')}}</b> - {{ $t('when_and_where.timeline.ceremony.title')}} <br>
              <small>{{ $t('when_and_where.timeline.ceremony.description')}}</small>
            </timeline-item>
            <timeline-item bg-color="#9dd8e0">
              <b>{{ $t('when_and_where.timeline.cocktail.time')}}</b> - {{ $t('when_and_where.timeline.cocktail.title')}}<br>
              <small style="position: relative;">{{ $t('when_and_where.timeline.cocktail.description')}}<img src="/static/images/mimou-tete.png" style="height: 60px;position: absolute; right: -100px; bottom: -37px;"></small>
            </timeline-item>
            <timeline-item bg-color="#9dd8e0" style="border-bottom: none;">
              <b>{{ $t('when_and_where.timeline.party.time')}}</b> - {{ $t('when_and_where.timeline.party.title')}}<br>
              <small>{{ $t('when_and_where.timeline.party.description')}}</small>
            </timeline-item>
            <timeline-title><h3 style="margin:0px;">{{ $t('when_and_where.timeline.title_2')}}</h3></timeline-title>
            <timeline-item bg-color="#9dd8e0">
              <b>{{ $t('when_and_where.timeline.brunch.time')}}</b> - <span v-html="$t('when_and_where.timeline.brunch.title')"></span><br>
              <small v-html="$t('when_and_where.timeline.brunch.description')"></small>
            </timeline-item>
            <!-- <timeline-item :hollow="true">item2</timeline-item> -->
          </timeline>

        <div class="text-center">
          <img src="/static/images/mimou-haut.png" height="90px;">
        </div>
          
      </div>
      <!-- container end -->
    </section>
    <!-- section end -->
	</div>
</template>

<script>
import { Timeline, TimelineItem, TimelineTitle } from 'vue-cute-timeline'
 
export default {
  name: 'WhenAndWhere',
  components: {
    Timeline,
    TimelineItem,
    TimelineTitle
  },
  data () {
    return {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.item-timeline-mimou img{
    height:70px; 
    display: block;
}

@media (min-width:1100px){
  .item-timeline-mimou {
    position: relative;
  }

  .item-timeline-mimou img{
    height:70px; 
    position:absolute; 
    right:0px;
    bottom: 10px;
  }
}

@media (min-width:1400px){
  
  .item-timeline-mimou img{
    right:100px;
  }
}
  
</style>