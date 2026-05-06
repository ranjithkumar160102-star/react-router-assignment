import { useParams, useNavigate } from "react-router"

const users = [
{ id: 11, name: "Laura Jackson", email: "laura.j@example.com" },
{ id: 12, name: "Kevin White", email: "kwhite@example.com" },
{ id: 13, name: "Olivia Harris", email: "olivia.h@example.com" },
{ id: 14, name: "Brian Martin", email: "bmartin@example.com" },
{ id: 15, name: "Sophia Thompson", email: "sophia.t@example.com" },
{ id: 16, name: "Jason Garcia", email: "jason.g@example.com" },
{ id: 17, name: "Isabella Martinez", email: "isabella.m@example.com" },
{ id: 18, name: "Ryan Robinson", email: "ryan.r@example.com" },
{ id: 19, name: "Mia Clark", email: "mia.c@example.com" },
{ id: 20, name: "Eric Lewis", email: "elewis@example.com" }
];

function UserDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const user = users.find((u) => u.id === parseInt(id));

  return (
    <div>
      <h1>User Detail</h1>

      {user ? (
        <>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </>
      ) : (
        <p>User not found</p>
      )}

      <button onClick={() => navigate("/users")}>Go Back</button>
    </div>
  );
}

export default UserDetail;