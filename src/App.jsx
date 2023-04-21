import React from "react";
import UsersList from "./components/UsersList";

export default function App() {
  return (
    <div className="container mx-auto mt-3">
      <h1 className="text-center text-xl">Albums</h1>
      <UsersList />
    </div>
  );
}
