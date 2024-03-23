const handleDelete = (userid: string) => {
  const updatedUsers = users.filter((user) => user.login.uuid !== userid);
  setTotalUsers(updatedUsers.length);
  setUsers(updatedUsers);
  localStorage.setItem("userList", JSON.stringify({ results: updatedUsers }));
};

const handleAdd = (userid: string) => {
  const userUpdate = users.map((user) => {
    user.login.uuid !== user;
  });
  setTotalUsers(userUpdate);
};
