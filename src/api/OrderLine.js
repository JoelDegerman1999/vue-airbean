import Api from "./Api";

export default {
  create(quantity) {
    return Api.post("orderLines", quantity);
  },
  addProduct(orderLineId, productLink) {
    let config = { headers: { "Content-Type": "text/uri-list" } };
    return Api.put(`orderLines/${orderLineId}/product`, productLink, config);
  },
};
