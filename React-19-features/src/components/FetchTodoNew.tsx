import { Suspense, use } from "react";

async function fetchUser() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  return res.json();
}

function UserProfile() {
  const user = use(fetchUser());
  return <div>Hello, {user.name}!</div>;
}

export default function Page() {
  return (
    <Suspense fallback={<div>Loading user data...</div>}>
      <UserProfile />
    </Suspense>
  );
}
