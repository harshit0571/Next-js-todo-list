import React from "react";
import { useState } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

export default function Signup() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [Name, setName] = useState("");
  const register = () => {
    createUserWithEmailAndPassword(auth, email, password, Name)
      .then((userCredential) => {
        const user = userCredential.user;
        updateProfile(user, {
          displayName: Name,
        });
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="flex-col flex mx-auto items-center align-middle">
      <input
        type="text"
        placeholder="enter name"
        className="py-3 bottom-1 m-2 text-center border-gray-800 border-solid border"
        value={Name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
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
        onClick={register}
      >
        Signup
      </button>
    </div>
  );
}
