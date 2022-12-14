<template>
    <body>
        
  
     <main>
    <div class="app">
      <form @submit.prevent="handleSubmit" class="checkout-form">
        <h1>Contact Me!</h1>
        <div class="address__field">
          <label for="firstName">First name</label>
          <input type="text" id="firstName" v-model="form.firstName" required />
        </div>
        <div class="address__field">
          <label for="lastName">Last name</label>
          <input type="text" id="lastName" v-model="form.lastName" required />
        </div>
        <div class="address__field">
          <label for="email">Email</label>
          <input type="email" id="email" v-model="form.email" required />
        </div>
        <div class="address__field">
          <label for="phone">Phone</label>
          <input type="phone" id="phone" v-model="form.phone" required />
        </div>

        <ContactFields
          label="PhoneNumbers"
          v-model:primary="form.PhoneNumbers.streetName"
          v-model:secondary="form.PhoneNumbers.streetNumber"
          v-model:city="form.billingAddress.city"
          v-model:postcode="form.billingAddress.postcode"
        />
        <!-- <ContactFields
          label="Delivery Address"
          v-model:streetName="form.deliveryAddress.streetName"
          v-model:streetNumber="form.deliveryAddress.streetNumber"
          v-model:city="form.deliveryAddress.city"
          v-model:postcode="form.deliveryAddress.postcode"
        /> -->
        <div class="address__field">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
</main>
</body>
  </template>
  

  <script>
  import ContactFields from "../components/ContactFields.vue";
  
  import { reactive } from "vue";
  
  export default {
    name: "CheckoutForm",
    components: {
        ContactFields: ContactFields,
    },
    methods: {
      handleSubmit() {
        alert("Thank you for your submission!");
      },
    },
    setup() {
      const form = reactive({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: "",
        Phone: {
          primary: "",
          secondary: "",
        },
      });
  
      return {
        form,
      };
    },
  };
  </script>
  


 