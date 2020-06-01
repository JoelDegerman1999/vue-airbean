import Api from "./Api";

export default {
  getAll() {
    return Api.get("users");
  },
  createUser(data) {
    return Api.post("users", data);
  },
  addOrder(userId, orderHistoryLink) {
    let config = { headers: { "Content-Type": "text/uri-list" } };
    return Api.post(`users/${userId}/orderHistory`, orderHistoryLink, config);
  },
};
