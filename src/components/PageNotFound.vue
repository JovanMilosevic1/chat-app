<template>
    <div class="container">
        <h1 class="text-center"> Page not found! </h1>
    </div>
</template>

<script>
export default {
    data() {
        return{

        }
    },
    created() {
        setTimeout( () => {
            this.$router.push({ name: 'Welcome' })
        }, 1000)
    }
}
</script>

<style scoped>
    h1 {
        margin-top: 50px;
    }
</style>

