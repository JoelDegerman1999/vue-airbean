<template>
    <div>
        <p>hej</p>
        <h1>{{activeAccount.name}}</h1>
        <p>{{activeAccount.email}}</p>
        
    </div>
</template>

<script>
export default {
    data: function(){ return {
        activeAccount: {name: "Tim", email: "Tims mail"}
    }},
    mounted() {
        if (localStorage.getItem("Accounts") != null){
            let arr = JSON.parse(localStorage.getItem("Accounts"))
            this.activeAccount = arr.filter(a => a.id == this.$route.params.id)[0]
        } else {
            this.activeAccount = this.$store.state.Accounts.filter(a => a.id == this.$route.params.id)[0]
        }
    },
    methods: {

    }
}
</script>

<style scoped>

</style>