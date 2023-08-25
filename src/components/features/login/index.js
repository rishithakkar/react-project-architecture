import React from "react";
import { useStore } from "../../../store/StoreContext";

function Login() {
  const {
    state: { user, demo },
  } = useStore();

  return (
    <div>
      Login Component
      <p>user state: {user}</p>
      <p>demo state: {demo}</p>
    </div>
  );
}

export default Login;
