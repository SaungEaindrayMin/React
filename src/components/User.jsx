import { useEffect, useState } from "react";

export default function User() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://dummyjson.com/users");

      const result = await response.json();

      setData(result.users);
    };

    fetchData();
  }, []);

  return (
    <>
      <h1>Hello user</h1>
      <a href="user/1">User One</a>
      <a href="user/2">User Two</a>
      <a href="user/3">User Three</a>

      {data
        ? data.map((item) => <a href={`user/${item.id}`}>{item.firstName}</a>)
        : null}
    </>
  );
}
