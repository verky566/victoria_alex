<template>
  <!DOCTYPE html>
<html lang="en">
   <head>
      <title>Biography</title>
  
   </head>
    <body>
        
     <main>
    <div class="app">
      <form @submit.prevent="handleSubmit" class="contact-form">
        <div class="contact_me">
        <h1>Contact Me!</h1>
        </div>
        <div class="contact_me">
          <label for="firstName">First Name</label>
          <input type="text" id="firstName" v-model="form.firstName"
          required />
        </div>
        <div class="contact_me">
          <label for="lastName">Last Name</label>
          <input type="text" id="lastName" v-model="form.lastName"
          required />
        </div>
        <div class="contact_me">
          <label for="email">Email</label>
          <input type="email" id="email" v-model="form.email"
          required />
        </div>
        <div class="contact_me">
          <label for="phone">Phone</label>
          <input type="phone" id="phone" v-model="form.phone"
          required />
        </div>
        <div class="contact_me">
          <label for="subjectField">Subject</label>
          <input type="text" id="subjectField" v-model="form.subjectField"
          placeholder="What is the subject"
          required/>
        </div>
        <div class="contact_me">
          <label for="msgField">Message</label>
          <textarea id="msgField" v-model="form.msgField"
          placeholder="What would like to talk about?"
          required></textarea>
         
        </div>
        <div class="contact_me">
       
        </div>
            <div class="contact_me">
          <button type="submit" @click="onclick()">Submit</button>
          
        </div>
      </form>
    </div>
</main>
</body>
</html>
  </template>
  
  <script>
  //Composition API
  
  //Declaring Reactive State#
  import { reactive } from "vue";
  
  //Original Method of Setup Function for Comp API
  //export feature declared elsewhere as default
  //export declarations need to be distinct and do not use more than one default
  //In non-<script setup>, you will need to use the components option:
  
  export default {
    //1. Data - key:value
    name: "ContactForm", 
    components: {
      
    },
    //2. Methods Object
    methods: {
      handleSubmit() {
        alert("Thank you for your submission!");
      },
      // lifecycle hooks
      onclick() {
  
      },
    },
  //form fields will be empty. 
    setup() {
      const form = reactive({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        subjectField: "",
        msgField: "",
  
      });
  
      return {
        form,
      };
    },
  };
  </script>
  
 
  
<!--Not using scoped attribute here -->

  <style scoped lang="scss">

  .contact-form {
   
    margin: 5px auto;
    padding: 10px;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .contact_me {
    padding-bottom: 20px;
    width: 250px;
    text-align: left;
  }
  label {
    display: block;
    font-weight: bold;
  }
  
  input, textarea  {
    padding: 10px;
    width: 230px;
    border: 1px solid #fff;
    border-radius: 7px;
    outline: 0;
    background: #f8edcf;
  }
  
  button {
    margin-top: 30px;
    padding: 10px;
    width: 250px;
    color: #f8edcf;
    border: 1px solid #fff;
    border-radius: 5px;
    outline: 0;
    background: #434141;
  }
  </style>
  
  
 