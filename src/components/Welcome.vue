<template>
  <div class="container vertical-center">
    <div class="container">
      <div class="card shadow p-3 mb-5 bg-white rounded text-center">
        <h1> Welcome </h1>
        <form @submit.prevent="enterChat">
          <div class="form-group">
            <label for="name"> Enter your name: </label>
            <input type="text" class="form-control"  placeholder="Name" v-model="name">
            <p v-if="feedback" class="text-danger">{{ feedback }}</p>
          </div>
          <button class="btn btn-primary"> Start Chat Now </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Welcome",
  data() {
    return {
      name: null,
      feedback: null
    }
  },
  methods: {
    enterChat() {
      if(this.name) {
        // if everthing okay , redirect and send name
        this.$router.push({name: 'Chat', params: {name: this.name}})
      }
      else {
        this.feedback = " You must enter name! ";
      }
    }
  }
};
</script>
  
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .container {
    max-width: 500px;
    line-height: 40px;
  }
  .card {
    padding: 3rem 1rem !important;
  }
  .vertical-center {
    min-height: 100%;  /* Fallback for browsers do NOT support vh unit */
    min-height: 100vh; /* These two lines are counted as one :-)       */
    display: flex;
    align-items: center;
  }
</style>
