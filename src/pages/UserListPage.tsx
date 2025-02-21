import { useEffect, useState } from "react";
import { getUsers } from "../api/userAPI";

const UserList = () => {
  const [users, setUsers] = useState<{ username: string; email: string }[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const data = await getUsers();
      setUsers(data);
    };
    fetchUsers();
  }, []);

  return (
    <div className="container mt-5">
      <h2>User List</h2>
      {users.length === 0 ? (
        <p>No users found.</p>
      ) : (
        <ul className="list-group">
          {users.map((user, index) => (
            <li key={index} className="list-group-item">
              <strong>{user.username}</strong> - {user.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UserList;
