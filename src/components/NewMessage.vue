<template>
    <div class="new-message">
        <form @submit.prevent="addMessage">
          <input type="text" class="form-control" v-model="newMessage">
        </form>
        <br>
        <p class="text-danger" v-if="feedback">{{ feedback }}</p>
        <br>
    </div>
</template>

<script>
import dataBase from './../firebase/init'
export default {
    name: 'NewMessage',
    props: ['name'],
    data() {
        return {
            newMessage: null,
            feedback: null
        }
    },
    methods: {
        addMessage() {
            // if is not empty
            if(this.newMessage) {
                // add to firestore
                dataBase.collection('messages').add({
                    content: this.newMessage,
                    name: this.name,
                    timestamp: Date.now()
                }).catch(err => {
                    console.log(err)
                })
                this.newMessage = null
                this.feedback = null
            }
            // if field is empty
            else {
                this.feedback = " You must enter a message "
            }
        }
    }
}
</script>

<style>

</style>
