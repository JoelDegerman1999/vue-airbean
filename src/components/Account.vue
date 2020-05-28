<template>
    <div>
        <img src="../assets/graphics/eva-cortado.jpg" alt="">
        <h2>{{activeAccount.name}}</h2>
        <p>{{activeAccount.email}}</p>

        <h2 class = "orderListLabel">Order historik</h2>
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

<style scoped>
    img {
        color: black;
        background-color: black;
    }

    .orderListLabel{
        padding-top: 3rem;
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
            display: flex;
        }
        .totalSpent {
            display: flex;
            justify-content: flex-end;
        }
</style>