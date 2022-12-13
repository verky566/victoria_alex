<script setup>
//import TheWelcome from "../components/TheWelcome.vue";
</script>

<template>
  <main>
    <body id="page-top">
    <!-- <TheWelcome /> -->

    <h1>Contact</h1>
    <p>This is the Contact page</p>

  
    <div id="root">
      <vue-form></vue-form>
    </div>

    
</body>
  </main>
</template>

<script> 

Vue.component("vue-form", {
    template: `
  <!-- Contact -->
    <section class="section" id="contact">
      <div class="column">
        <div class="section-heading">
          <h3 class="title is-2 has-text-black has-text-centered">Contact US</h3>
          <h4 class="subtitle is-5 has-text-black has-text-centered">Get in touch</h4>
        </div>
        <br>
  
        <div class="columns">
          <div class="column is-6 is-offset-3">
            <div class="box">
              <div class="field">
                <label class="label">Name</label>
                <div class="control has-icons-left">
                  <input class="input" type="text" placeholder="e.g John Doe" value="">
                  <span class="icon is-small is-left">
                    <i class="fa fa-user"></i>
                  </span>
                </div>
              </div>
  
              <div class="field">
                <label class="label">Email</label>
                <div class="control has-icons-left">
                  <input class="input" type="email" placeholder="e.g johndoe@gmail.com" value="">
                  <span class="icon is-small is-left">
                    <i class="fa fa-envelope"></i>
                  </span>
                </div>
              </div>
  
              <div class="field">
                <label class="label">Phone</label>
                <div class="control has-icons-left">
                  <input class="input" type="phone" placeholder="e.g 5551234567" value="">
                  <span class="icon is-small is-left">
                    <i class="fa fa-phone"></i>
                  </span>
                </div>
              </div>
  
              <div class="field">
                <label class="label">Message</label>
                <div class="control">
                  <textarea class="textarea" placeholder="Your Message"></textarea>
                  </span>
                </div>
              </div>
  
              <div class="field is-grouped has-text-centered">
                <div class="control">
                  <button class="button is-danger is-large"><span class="icon">
                      <i class="fa fa-envelope"></i>
                    </span>
                    <span>Submit</span></button>
                </div>
              </div>
            </div>
          </div>
        </div>
  
      </div>
    </section>
      `,
      
    mounted() {
      var contactform = document.getElementById("contactform");
      contactform.setAttribute(
        "action",
        "//formspree.io/" + "xxxxxxxxxxxxxx" + "@" + "xxxxxxxxx" + "." + "com"
      );
    }
  });
  
  new Vue({
    el: "#root"
  });

</script>