<template>
    <div>
        <h1>Välkommen till AirBean-familjen!</h1>
        <p>Genom att skapa ett konto nedan kan du spara och se din orderhistorik</p>
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
            if (this.accounts.findIndex(e => e.email == this.email) == -1) {
                this.$store.dispatch("addAccount", {name: this.name, email: this.email, id: this.getAcceptableAccountId()})
            }
            this.setAccounts()
        },
        getAcceptableAccountId() {
            let highestId = this.accounts[0].id
            this.accounts.forEach(a => {
                if (a.id > highestId) {
                    highestId = a.id
                }
            });

            return highestId + 1
        },
        setAccounts() {
            if (localStorage.getItem("Accounts") != null){
                this.accounts = JSON.parse(localStorage.getItem("Accounts"))
            } else {
                this.accounts = this.$store.state.Accounts
            }
        }
    },
    mounted(){
        this.setAccounts()
    }
}
</script>

<style scoped>
   

    div {
        background-color: #F3E4E1;
        min-height: 80vh;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    input {
        background-color: #F3E4E1;
        min-width: 80vw;
        padding: 0.75rem;
        border-radius: 10px;
        margin: 1rem;
        border: solid;
    }

    button {
        background-color: #2F2926;
        color: #F3E4E1;
        border: none;

        min-width: 70vw;
        min-height: 3rem;
        margin: 3rem;

        border-radius: 20px;

        font-size: 150%;
    }
</style>