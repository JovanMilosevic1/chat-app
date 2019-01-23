<template>
    <div class="container ">
        <div class="card">
            <h4 class="card-header">Chat</h4>
            <div class="card-body messages" v-chat-scroll>
                    <ul v-for="message in messages" :key="message.id" class="text-left ">
                        <li >
                            <span class="msgName">{{message.name}}: </span> 
                            <span>{{message.content}}</span><br>
                            <span class="time">{{message.timestamp}}</span>
                        </li>
                    </ul>
                <!-- new message -->
                <hr>
                <p class="text-left "><span class="text-success ">Add message</span>  (press <b>enter</b>)</p>
                <new-message :name = "name"></new-message>
            </div>
        </div>
    </div>
</template>
<script>
import  NewMessage from './NewMessage'
import dataBase from './../firebase/init'
import moment from 'moment'
export default {
    name: 'Chat',
    props: ['name'],
    components: {
        NewMessage
    },
    data() {
        return {
            messages: []
        }
    },
    created() {
        let ref = dataBase.collection('messages').orderBy('timestamp')
        ref.onSnapshot(snapshot => {
            snapshot.docChanges().forEach(change => {
                if(change.type === 'added'){
                    let doc = change.doc
                    this.messages.push({
                        id: doc.id,
                        name: doc.data().name,
                        content: doc.data().content,
                        timestamp: moment(doc.data().timestamp).format('lll')
                    })
                }
            })
        })
    }
}
</script>

<style>
    .card {
        margin-top: 100px;
    }
    ul {
        list-style-type: none;
        padding: 0;
    }
    .msgName {
        font-weight: 600;
        color: #008080;
    }
    .time {
        font-size: 12px;
    }
    .messages {
        max-height: 400px;
        overflow: auto;
    }
</style>
