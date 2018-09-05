<template>
	<section class="gla_section">
        <div class="container text-center">
            <p><img src="/static/images/animations/rsvp.gif" data-bottom-top="@src:/static/images/animations/rsvp.gif" height="180" alt=""></p>
            
            <div class="row">
                <div class="col-md-8 col-md-push-2">
                    <form action="https://formspree.io/your@mail.com" method="POST">
                        <div class="row">
                            <div class="col-md-6">
                                <label>Your name*</label>
                                <input type="text" name="name" class="form-control form-opacity">
                            </div>
                            <div class="col-md-6">
                                <label>Your e-mail*</label>
                                <input type="text" name="email" class="form-control form-opacity">
                            </div>
              
                            <div class="col-md-6">
                                <label>Will you attend?</label>

                                <input type="radio" name="attend" value="Yes, I will be there">
                                <span>Yes, I will be there</span><br>
                                <input type="radio" name="attend" value="Sorry, I can't come">
                                <span>Sorry, I can't come</span>
                                
                            </div>
                            <div class="col-md-6">
                                <label>Meal preference</label>
                                <select name="meal" class="form-control form-opacity">
                                    <option value="I eat anything">I eat anything</option>
                                    <option value="Beef">Beef</option>
                                    <option value="Chicken">Chicken</option>
                                    <option value="Vegetarian">Vegetarian</option>
                                </select>
                            </div>
                            <div class="col-md-12">
                                <label>Notes</label>
                                <textarea name="message" class="form-control form-opacity"></textarea>
                            </div>
                            <div class="col-md-12">
                                <input type="submit" class="btn submit" value="Send">
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

export default {
  name: 'Rsvp',
  methods: {
	
  },
  events: {
  	
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