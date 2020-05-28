<template>
    <div class = "container">
        <img src="../assets/graphics/profile.svg" alt="profil bild">
        <h2 class = "name">{{activeAccount.name}}</h2>
        <p class = "email">{{activeAccount.email}}</p>

        <div class="orderContainer">
            <div class="orderListLabelContainer">
                <h2 class = "orderListLabel">Order historik</h2>
            </div>
            <section class = "orderList"
            v-for="(order,index) in activeAccount.orderHistory"
            v-bind:key = index>
                <section class = "order">
                    <p class = "orderId">{{order.orderId}}</p>
                    <p class = "orderDate">{{order.date}}</p>
                    <p class = "orderSumText">total ordersumma</p>
                    <p class = "orderTotalSum">{{order.totalSum}} kr</p>
                    <hr>
                </section>
            </section>

            <hr>
            <section class = "totalSpentContainer">
                <p class = "spentText">Totalt spenderat</p>
                <p class = "totalSpent">{{getTotalOrderSpenditure()}} kr</p>
            </section>
        </div>

    </div>
</template>

<script>
export default {
    data: function(){ return {
        activeAccount: {orderHistory: [
        {orderId: "#AAAAAAABBBBBCCCC", totalSum: 231, date: "20/05/28"},
        {orderId: "#AAAAAAABBBBBCCCC", totalSum: 2331, date: "20/05/21"},
        {orderId: "#AAAAAAABBBBBCCCC", totalSum: 1231, date: "20/05/23"}]}
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
        getTotalOrderSpenditure() {
            let sum = 0
            this.activeAccount.orderHistory.forEach(o => {
                sum += o.totalSum
            });
            return sum
        }
    }
}
</script>

<style lang="scss" scoped>
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color:#2F2926;
        min-height: 100vh;
        background-image: url("../assets/graphics/graphics-header.svg");
        background-repeat: no-repeat;
        padding-top: 7rem;
    }


    img{
        width: 6rem;
    }

    .name {
        color: white;
    }

    .email {
        color: rgba(255, 255, 255, 0.8);
    }

    .orderContainer {
        padding-top: 4rem;
        min-width: 90%;
    }
    .orderListLabelContainer {
        display: flex;
        justify-content: flex-start;
    }
    .orderListLabel{
        color:white;
        padding-top: 3rem;
        padding-bottom: 1.5rem;
    }
    .order {
        background-color: #2F2926;
        display: grid;
        grid-template-areas: "oi od" 
        "ost ots";

        max-height: 6rem;
    }
        .order .orderId {
            color:rgba(255, 255, 255, 0.7);
            grid-area: oi;
            display: flex;
            font-weight: bold;
        }
        .order .orderDate {
            color: rgba(255, 255, 255, 0.7);
            grid-area: od;
            display: flex;
            justify-content: flex-end;
        }
        .order .orderSumText {
            color: rgba(255, 255, 255, 0.7);
            grid-area: ost;
            display: flex;
        }
        .order .orderTotalSum {
            color: rgba(255, 255, 255, 0.7);
            grid-area: ots;
            display: flex;
            justify-content: flex-end;
        }
        .order hr {
            border: 1px solid rgba(255, 255, 255, 0.08);
        }

    .totalSpentContainer {
        display: grid;
        grid-template-areas: "p p";
    }
        .spentText {
            color:rgba(255, 255, 255, 0.7);
            display: flex;
        }
        .totalSpent {
            color:rgba(255, 255, 255, 0.7);
            display: flex;
            justify-content: flex-end;
        }
</style>