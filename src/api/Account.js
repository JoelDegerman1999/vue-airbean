import Api from "./Api";

export default {
  all() {
    return Api.get("users");
  },
  create(data) {
    return Api.post("users", data);
  },
};
