<template>
    <header>       
        <nav class="gla_light_nav gla_transp_nav">
            <div class="container">
                <div class="gla_logo_container clearfix">
                    <img src="/static/images/illustrations/vespa_logo.png" alt="" class="gla_logo_rev">
                    <div class="gla_logo_txt">
                        <a href="/" class="gla_logo">Sophie & Man</a>
                        
                        <div class="gla_logo_und">22 Juin 2019</div>
                    </div>
                </div>

                
                <div class="gla_main_menu_content gla_image_bck" data-color="rgba(0,0,0,0.9)" data-image="http://placehold.it/1400x800">
                    <div class="gla_over" data-color="#000" data-opacity="0.7"></div>
                    <div class="container">
                        <ul>
                            <li class="gla_parent"><a href="#">RSVP</a></li>
                        </ul>
                    </div>
                </div>

                <!-- <div class="gla_main_menu_content_menu gla_wht_txt text-right">
                    <div class="container">
                        <ul>
                            <li class="gla_parent"><a href="#">Demos</a>
                                <ul>
                                    <li><a href="01_01_home_simple_flowers.html">Home 1 - Animated Flowers</a></li>
                                    <li><a href="01_02_home_pink_flowers.html">Home 2- Pink Animated Flowers</a></li>
                                    <li><a href="01_03_home_golden.html">Home 3 - Golden Badges</a></li>
                                    <li><a href="01_04_home_flbg.html">Home 4 - Great Flowers</a></li>
                                    <li><a href="01_05_home_flbg.html">Home 5 - Great Flowers</a></li>
                                    <li><a href="01_06_home_flbg.html">Home 6 - Great Flowers</a></li>
                                    <li><a href="01_10_home_parallax.html">Home 7 - Parallax</a></li>
                                    <li><a href="01_09_home_land.html">Home 8 - Landing</a></li>
                                </ul>
                            </li>

                            <li class="gla_parent"><a href="#">Invitations</a>
                                <ul>
                                    <li><a href="02_01_invitation.html">Invitation 1</a></li>
                                    <li><a href="02_02_invitation.html">Invitation 2</a></li>
                                    <li><a href="02_03_invitation.html">Invitation 3</a></li>
                                    <li><a href="02_04_invitation.html">Invitation 4</a></li>
                                </ul>
                            </li>

                        </ul>
                        <div class="gla_main_menu_content_menu_copy">
                            <div class="gla_footer_social">
                                <a href="#"><i class="ti ti-facebook gla_icon_box"></i></a>
                                <a href="#"><i class="ti ti-instagram gla_icon_box"></i></a>
                                <a href="#"><i class="ti ti-pinterest gla_icon_box"></i></a>
                            </div>

                        </div>
                    </div>
                </div>

                <div class="gla_default_menu">
                    <ul>
                        <li class="gla_parent"><a href="#">Demos</a>
                            <ul>
                                <li><a href="01_01_home_simple_flowers.html">Home 1 - Animated Flowers</a></li>
                                <li><a href="01_02_home_pink_flowers.html">Home 2- Pink Animated Flowers</a></li>
                                <li><a href="01_03_home_golden.html">Home 3 - Golden Badges</a></li>
                                <li><a href="01_04_home_flbg.html">Home 4 - Great Flowers</a></li>
                                <li><a href="01_05_home_flbg.html">Home 5 - Great Flowers</a></li>
                                <li><a href="01_06_home_flbg.html">Home 6 - Great Flowers</a></li>
                                <li><a href="01_10_home_parallax.html">Home 7 - Parallax</a></li>
                                <li><a href="01_09_home_land.html">Home 8 - Landing</a></li>
                            </ul>
                        </li>
                        <li class="gla_parent"><a href="#">Invitations</a>
                            <ul>
                                <li><a href="02_01_invitation.html">Invitation 1</a></li>
                                <li><a href="02_02_invitation.html">Invitation 2</a></li>
                                <li><a href="02_03_invitation.html">Invitation 3</a></li>
                                <li><a href="02_04_invitation.html">Invitation 4</a></li>
                            </ul>
                        </li> 
                    </ul>
                </div> -->
            </div>

        </nav>

    </header>
</template>

<script>
export default {
  name: 'MainHeader',
  props: {
    visiting: {
      default: 'Home',
      type: String
    }
  },
  data () {
    return {
    
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
