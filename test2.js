const handleDelete = (userid: string) => {
  const updatedUsers = users.filter((user) => user.login.uuid !== userid);
  setTotalUsers(updatedUsers.length);
  setUsers(updatedUsers);
  localStorage.setItem("userList", JSON.stringify({ results: updatedUsers }));
};
const handleDelete = (userid: string) => {
  const updatedUsers = users.filter((user) => user.login.uuid !== userid);
  setTotalUsers(updatedUsers.length);
  setUsers(updatedUsers);
  localStorage.setItem("userList", JSON.stringify({ results: updatedUsers }));
