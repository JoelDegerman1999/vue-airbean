import Api from "./Api";

export default {
  getAll() {
    return Api.get("users");
  },
  createUser(data) {
    return Api.post("users", data);
  },
};
