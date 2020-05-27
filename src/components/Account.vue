<template>
    <div>
        <img src="../assets/graphics/eva-cortado.jpg" alt="">
        <h2>{{activeAccount.name}}</h2>
        <p>{{activeAccount.email}}</p>
        
    </div>
</template>

<script>
export default {
    data: function(){ return {
        activeAccount: {name: "", email: ""}
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
    div {
        
    }

    img {
        color: black;
        background-color: black;
    }
</style>