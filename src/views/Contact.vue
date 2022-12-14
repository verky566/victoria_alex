

<template>
    <div id="app">
      <form id="contact-form" @submit="onSubmitHandler($event)">
        <div class="form-group">
          <label for="email">Email address</label>
          <input
            type="email"
            class="form-control"
            id="email"
            placeholder="Enter email"
            v-model="email"
          />
        </div>
        <div class="form-group">
          <label for="subject">Subject</label>
          <input
            type="text"
            class="form-control"
            id="subject"
            placeholder="Subject"
            v-model="subject"
          />
        </div>
        <div class="form-group">
          <label for="comments">Comments</label>
          <textarea
            class="form-control"
            id="comments"
            rows="3"
            v-model="comments"
          ></textarea>
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  </template>


<script>



import { ref } from 'vue'
const value = ref('')




  export default {
    name: 'App',
    data() {
      return {
        email: '',
        subject: '',
        comments: '',
      };
    },
    methods: {
      onEmailChange(event) {
        this.email = event.target.value;
      },
      onSubjectChange(event) {
        this.subject = event.target.value;
      },
      onCommentsChange(event) {
        this.comments = event.target.value;
      },
      resetForm() {
        this.email = '';
        this.subject = '';
        this.comments = '';
      },
      onSubmitHandler(event) {
        event.preventDefault();
        let data = {
          email: this.email,
          subject: this.subject,
          comments: this.comments,
        };
        fetch('http://localhost:3002/send', {
          method: 'POST',
          body: JSON.stringify(data),
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        })
          .then((response) => response.json())
          .then((response) => {
            if (response.status === 'success') {
              alert('Message Sent.');
              // this.resetForm();
            } else if (response.status === 'fail') {
              alert('Message failed to send.');
            }
          });
      },
    },
  };
</script>


<style lang="scss">

.form-inline .form-group {
      display: -ms-flexbox;
      display: flex;
      -ms-flex: 0 0 auto;
      flex: 0 0 auto;
      -ms-flex-flow: row wrap;
      flex-flow: row wrap;
      -ms-flex-align: center;
      align-items: center;
      margin-bottom: 0;
    }
</style>