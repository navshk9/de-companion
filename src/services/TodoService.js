import { callApi } from "../callApi";
class TodoService {
  get() {
    return callApi({ method: "get", url: "/api/todo" });
  }
  post(newData) {
    return callApi({ method: "post", url: "/api/todo", data: newData });
  }
  put(newData) {
    newData = JSON.parse(newData);
    return callApi({
      method: "put",
      url: `/api/todo/${newData.id}`,
      data: newData,
    });
  }
  delete(id) {
    return callApi({ method: "delete", url: `/api/todo/${id}` });
  }
}
export default new TodoService();
