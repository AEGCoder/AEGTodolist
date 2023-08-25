import Axios from "../axios";

export const getAll = () => {
  const url = "/todo/all";
  return Axios.get(url)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const addTodo = (title, description) => {
  const url = "/todo/add";
  const data = {
    title: title,
    description: description,
  };
  return Axios.post(url, data);
};

export const deleteTodo = (TodoId) => {
  const url = "/todo/delete";
  const config = {
    data: {
      TodoId: TodoId,
    },
  };
  return Axios.delete(url, config)
    .then((res) => {
      return res.data; // Değişiklik burada
    })
    .catch((err) => {
      console.log(err);
    });
};

export const updateTodo = (TodoId, updatedData) => {
  const url = `/todo/update/${TodoId}`;
  return Axios.put(url, updatedData)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};
