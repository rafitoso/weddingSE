<template>
	<div class="gla_slider gla_image_bck  gla_wht_txt gla_fixed"  data-image="/static/images/man_et_sophie_1.png" data-stellar-background-ratio="0.8">
        <div class="gla_over" data-color="#9abab6" data-opacity="0.2"></div>
        <div class="container">
            <div class="gla_slide_txt gla_slide_center_bottom text-center">
                <p><img src="/static/images/animations/ourwedding_wh.gif" data-top-bottom="@src:/static/images/animations/ourwedding_wh.gif" alt="" height="150"></p>
            </div>
        </div>
        <a class="gla_scroll_down gla_go" href="#gla_content">
            <b></b>
            Scroll
        </a>
    </div>
</template>

<script>
export default {
  name: 'Slider',
  data () {
    return {}
  },
  mounted: function(){
    /* Section Background */
    $('.gla_image_bck').each(function(){
      console.log('BCK_true');
      var image = $(this).attr('data-image');
      var gradient = $(this).attr('data-gradient');
      var color = $(this).attr('data-color');
      var blend = $(this).attr('data-blend');
      var opacity = $(this).attr('data-opacity');
      var position = $(this).attr('data-position');
      var height = $(this).attr('data-height');
      if (image){
        console.log(image);
        $(this).css('background-image', 'url('+image+')');  
      }
      if (gradient){
        $(this).css('background-image', gradient);  
      }
      if (color){
        $(this).css('background-color', color); 
      }
      if (blend){
        $(this).css('background-blend-mode', blend);  
      }
      if (position){
        $(this).css('background-position', position); 
      }
      if (opacity){
        $(this).css('opacity', opacity);  
      }
      if (height){
        $(this).css('height', height);  
      }

    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
