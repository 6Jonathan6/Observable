<template>
    <form @submit.prevent="saveClient">
        <fieldset>
            <legend>Register a Client</legend>
            <label for="name">Name</label>
            <input type="text" v-model="name">
        </fieldset>
        <fieldset>
            <input type="submit" value="Register">
        </fieldset>
    </form>
</template>
<script>
import {getDB} from '../IndexDb'
export default {
    data(){
        return {
            name:''
        }
    },
    methods:{
       async saveClient(){
            const db = getDB()
            const name = this.name
            await db.users.put({name:'juan'})
            this.name = null
        },
    },
    
}
</script>

