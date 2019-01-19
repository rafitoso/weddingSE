<template>
	<div class="when-and-where">
		<section class="gla_section"> 
      <div class="container">
        <div class="text-center">
          <p><img src="/static/images/animations/flowers2.gif" data-bottom-top="/static/images/animations/flowers2.gif" height="150" alt=""></p>
          <h2>Wedding Details</h2>
          <h3 class="gla_subtitle">When & Where</h3>
          <p>Our ceremony and reception will be held at the Liberty House. Located on the Hudson River, it has a beautiful, unobstructed view of the World Trade One building and a convenient ferry that runs between it and Manhattan.</p>
        </div>
      
          <timeline>
            <timeline-title>title</timeline-title>
            <timeline-item bg-color="#9dd8e0">item1</timeline-item>
            <timeline-item :hollow="true">item2</timeline-item>
          </timeline>


          <!-- boxes -->

          <div class="gla_icon_boxes row text-left">

              <!-- item -->
              <div class="col-md-3 col-sm-6">
                  <a href="#" class="gla_news_block">
                      <span class="gla_news_img">
                          <span class="gla_over" data-image="http://placehold.it/600x600"></span>    
                      </span>
                     

                      <span class="gla_news_title">La mairie</span>
                      <p><strong>St. Thomas's Church,</strong><br>Bristol, U.K.</p>


                  </a>
              </div> 

              <!-- item -->
              <div class="col-md-3 col-sm-6">
                  <a href="#" class="gla_news_block">
                      <span class="gla_news_img">
                          <span class="gla_over" data-image="http://placehold.it/600x600"></span>  
                      </span>
                     

                      <span class="gla_news_title">La cérémonie d'engagement</span>
                      <p><strong>Keep it classy</strong>. <br>No jeans or cowboy hats please.</p>


                  </a>
              </div>

              <div class="col-md-3 col-sm-6">
                  <a href="#" class="gla_news_block">
                      <span class="gla_news_img">
                          <span class="gla_over" data-image="http://placehold.it/600x600"></span>  
                      </span>
                     

                      <span class="gla_news_title">La réception</span>
                      <p><strong>Keep it classy</strong>. <br>No jeans or cowboy hats please.</p>


                  </a>
              </div> 


              <!-- item -->
              <div class="col-md-3 col-sm-6">
                  <a href="#" class="gla_news_block">
                      <span class="gla_news_img">
                          <span class="gla_over" data-image="http://placehold.it/600x600"></span>  
                      </span>
                     

                      <span class="gla_news_title">Le brunch du lendemain</span>
                      <p>There is a parking lot on premises as well as down the street <strong>near the candy store</strong>.</p>


                  </a>
              </div> 
          </div>
          <!-- boxes end -->          
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

</style>