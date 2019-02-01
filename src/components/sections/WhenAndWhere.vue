<template>
	<div class="when-and-where">
		<section class="gla_section"> 
      <div class="container">
        <div class="text-center">
          <p>
            <img src="/static/images/bouquet_sophie.png" data-bottom-top="/static/images/bouquet_sophie.png; opacity:1" height="250" style="margin-top: -20px;">
            <!-- <img src="/static/images/animations/flowers2.gif" data-bottom-top="/static/images/animations/flowers2.gif" height="150" alt=""> -->
          </p>
          <h2>Détails de notre mariage</h2>
          <h3 class="gla_subtitle">Où & quand</h3>
          <p>
            Tout le week-end se déroulera autour de Saint-Brisson-sur-Loire. C'est le village où a grandi le petit Emmanuel et où résident toujours ses parents.
          </p>
        </div>
      
          <timeline align="left">
            <timeline-title><h3 style="margin:0px;">Le samedi</h3></timeline-title>
            <timeline-item bg-color="#9dd8e0" style="border-bottom: none;">
              <b>14h30</b> - Rendez-vous à la mairie de Saint-Brisson-sur-Loire <br>
              <small>22 route d'Autry, 45500, Saint-Brisson-sur-Loire</small>
            </timeline-item>
             <timeline-item :hollow="true" class="item-timeline-mimou">
              Pour la suite de cette merveilleuse journée, direction le <b>domaine du petit Valot, 45500, Saint-Martin-sur-Ocre</b> 
              <img src="/static/images/mimou-sereine.png">
             </timeline-item>
            <timeline-item bg-color="#9dd8e0">
              <b>16h30</b> - Cérémonie d'engagement <br>
              <small>Avec les discours des parents et des témoins...</small>
            </timeline-item>
            <timeline-item bg-color="#9dd8e0">
              <b>18h00</b> - Cocktail et dîner<br>
              <small style="position: relative;">On espère que vous allez vous régalez !<img src="/static/images/mimou-tete.png" style="height: 60px;position: absolute; right: -100px; bottom: -37px;"></small>
            </timeline-item>
            <timeline-item bg-color="#9dd8e0" style="border-bottom: none;">
              <b>Minuit</b> - Soirée<br>
              <small>Jusqu'au bout de la nuit pour célébrer notre mariage avec vous ! <!-- Il y aura peut-être une soupe à l'oignon :) --></small>
            </timeline-item>
            <timeline-title><h3 style="margin:0px;">Le dimanche</h3></timeline-title>
            <timeline-item bg-color="#9dd8e0">
              <b>11h00</b> - Brunch chez les Rafis au <b>41 rue campagne, 45500, Saint-Brisson-sur-Loire</b><br>
              <small>Venez quand vous voulez et pourquoi pas avec votre maillot de bain !</small>
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