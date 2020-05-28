<template>
    <div class = "body">
        <div class = "container">
            <img src="@/assets/graphics/logo.svg" alt="">
            <h1>Välkommen till AirBean-familjen!</h1>
            <p>Genom att skapa ett konto nedan kan du spara och se din orderhistorik</p>
            <input v-model = "name" placeholder = "Name">
            <input v-model = "email" placeholder = "Email Address">
            <div class="routerContainer">
                <router-link to="/menu">
                    <button v-on:click = "login">Brew me a cup!</button>
                </router-link>
            </div>
        </div>
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
        login() {
            if (this.accounts.findIndex(e => e.email == this.email) == -1) {
                this.$store.dispatch("addAccount", {name: this.name, email: this.email, id: this.getAcceptableAccountId(), orderHistory: []})
            } else {
                this.$store.state.currentUser = this.accounts.find(e => e.email == this.email).id
                localStorage.setItem("currentUser", this.$store.state.currentUser)
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
   img {
       margin-bottom: 1rem;
       margin-top: 2rem;
   }

    .body {
        background-color: #2F2926;
        min-height: 100vh;
        display: flex;
        justify-content: center;
        background-image: url("../assets/graphics/graphics-header.svg");
        background-repeat: no-repeat;
    }

    .container {
        background-color: #F3E4E1;
        max-height: 80vh;
        max-width: 92vw;
        display: flex;
        flex-direction: column;
        align-items: center;
        border-radius: 1%;
        margin: 1rem;
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

    h1 {
        padding-bottom: 1rem;
        color: #2F2926;
    }

    p {
        padding-bottom: 2rem;
    }
</style>