import Api from "./Api";

export default {
  create(orderNumber, totalSum) {
    return Api.post("orderHistories", {
      orderNumber: orderNumber,
      totalSum: totalSum,
    });
  },
};
