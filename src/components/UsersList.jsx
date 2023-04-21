import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, addUser } from "../store";
import Button from "./Button";
// import { Skeleton } from "@mui/material";
import Skeleton from "./Skeleton";

export default function UsersList() {
  const dispatch = useDispatch();
  const { isLoading, data, error } = useSelector((state) => {
    return state.users;
  });

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  const handleAddUser = () => {
    dispatch(addUser());
  };

  if (isLoading)
    return (
      <div>
        <Skeleton times={6} className="w-100 h-5" />
      </div>
    );
  if (error) return <div>Error fetching data...</div>;

  const renderedUsers = data.map((user) => {
    return (
      <div key={user.id} className="mb-2 border rounded">
        <div className="flex p-2 justify-between cursor-pointer items-center">
          {user.name}
        </div>
      </div>
    );
  });
  return (
    <div>
      <div className="flex flex-row justify-between m-3">
        <h1 className="m-2 text-xl">Users</h1>
        <Button onClick={handleAddUser}>Add User</Button>
      </div>
      <h1>{renderedUsers}</h1>
    </div>
  );
}
