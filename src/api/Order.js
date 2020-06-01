import Api from "./Api";

export default {
  create(totalPrice) {
    return Api.post("realOrders", totalPrice);
  },

  addOrderLine(orderId, orderLineLink) {
    let config = { headers: { "Content-Type": "text/uri-list" } };
    return Api.post(`realOrders/${orderId}/orderLines`, orderLineLink, config);
  },
};
