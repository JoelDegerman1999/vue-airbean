<template>
    <div>
        <input v-model = "name" placeholder = "Name">
        <input v-model = "email" placeholder = "Email Address">
        <button v-on:click = "addAccount">Brew me a cup!</button>
    </div>
</template>

<script>
export default {
    data: function(){ return {
        name: "",
        email: "",
        accounts: []
    }},
    methods: {
        addAccount() {
            this.$store.dispatch("addAccount", {name: this.name, email: this.email, id: this.getAcceptableAccountId()})
        },
        getAcceptableAccountId() {
            let highestId = this.accounts[0].id
            this.accounts.forEach(a => {
                if (a.id > highestId) {
                    highestId = a.id
                }
            });

            return highestId + 1
        }
    },
    mounted(){
        if (localStorage.getItem("Accounts") != null){
            this.accounts = JSON.parse(localStorage.getItem("Accounts"))
        } else {
            this.accounts = this.$store.state.Accounts
        }
    }
}
</script>

<style scoped>

</style>