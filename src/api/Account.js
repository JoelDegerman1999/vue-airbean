import Api from "./Api";

export default {
  getAll() {
    return Api.get("users");
  },
  getUser(id) {
    return Api.get(`users/${id}?projection=customUser`);
  },
  createUser(data) {
    return Api.post("users", data);
  },
  addOrder(userId, orderHistoryLink) {
    let config = { headers: { "Content-Type": "text/uri-list" } };
    return Api.post(`users/${userId}/orderHistory`, orderHistoryLink, config);
  },
};
