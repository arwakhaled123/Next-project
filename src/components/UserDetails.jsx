import React, { useEffect, useState } from "react";

const UserDetails = ({ id }) => {
  const [user, setUser] = useState();

  async function fetchUser() {
  if (!id) return; 

  try {
    const res = await fetch(`https://dummyjson.com/users/${id}`);

    if (!res.ok) {
      throw new Error("Failed to fetch");
    }

    const data = await res.json();
    setUser(data);
    console.log(id);
  } catch (error) {
    console.error(error);
  }
}

  useEffect(() => {
  if (id) {
    fetchUser();
  }
}, [id]);



  if (!user) return <h3 className="text-center mt-5">Loading...</h3>;

  return (
    <div className="container mt-5">
      <div className="card p-4 shadow" style={{ maxWidth: "400px" }}>
        <img src={user.image} alt="" className="card-img-top mb-3" />

        <h3>{user.firstName} {user.lastName}</h3>
        <p>Email: {user.email}</p>
        <p>Phone: {user.phone}</p>
        <p>Age: {user.age}</p>
        <p>City: {user.address?.city}</p>
      </div>
    </div>
  );
};

export default UserDetails;