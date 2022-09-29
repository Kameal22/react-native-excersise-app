import axios from "axios";

export const fetchUsers = async (setUsers) => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );

  setUsers(response.data);
};
