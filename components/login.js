import React, { useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase";

export default function Login({ choice, user }) {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const login = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const UserData = userCredential.user;
        user(UserData);
        choice(201);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  return (
    <div className="flex-col flex mx-auto items-center align-middle">
      <input
        type="text"
        placeholder="enter email"
        className="py-3 bottom-1 m-2 text-center border-gray-800 border-solid border"
        value={email}
        onChange={(e) => {
          setemail(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="enter password"
        className="py-3 bottom-1 m-2 text-center border-gray-800 border-solid border"
        value={password}
        onChange={(e) => {
          setpassword(e.target.value);
        }}
      />
      <button
        className="bg-neutral-400 w-44 rounded py-2 px-2 text-center text-gray-50 mt-4"
        onClick={login}
      >
        Login
      </button>
    </div>
  );
}
