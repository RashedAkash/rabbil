"use client"

import { data } from "autoprefixer";
import { useEffect, useState } from "react";

const Client = () => {
  const [user, setUser] = useState();
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => console.log(data));
  },[])
  return (
    <div>
      
    </div>
  );
};

export default Client;