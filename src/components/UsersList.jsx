import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../store";
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

  if (isLoading)
    return (
      <div>
        <Skeleton times={6} className="w-100 h-5" />
      </div>
    );
  if (error) return <div>Error fetching data...</div>;

  const content = data.map((user) => {
    return <div key={user.id}>{user.name}</div>;
  });
  return (
    <div>
      <h1>{content}</h1>
    </div>
  );
}
