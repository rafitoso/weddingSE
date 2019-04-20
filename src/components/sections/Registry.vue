
<template>
    <div class="pageRegistry">
        <section class="gla_section gla_image_bck gla_wht_txt gla_fixed" data-stellar-background-ratio="0.8" data-image="/static/images/andylana_beach.jpeg" style="background-position-y: -300px;">
            <div class="gla_over" data-color="#282828" data-opacity="0.4"></div>
            <div class="container text-center">
                <h2>{{ $t('registry.title')}}</h2>
                <p>{{ $t('registry.body')}}</p>
                <p class="center"><a  class="btn" href="https://paypal.me/pools/c/8e3OuYhRck" target="_blank">{{ $t('registry.cta')}}</a></p>   
            </div>
        </section>
    </div>
</template>

<script>

export default {
  name: 'Registry',
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

        