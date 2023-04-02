import { User } from "./User";

function UserList({ users }) {
  return (
    <div className="userList">
      <h1>Users</h1>
      {users?.map((user) => (
        <User key={user.id} name={user.name} />
      ))}
    </div>
  );
}

export { UserList };
