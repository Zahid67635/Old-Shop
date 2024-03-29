import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import Catagory from "./Catagory";

const Catagories = () => {
  const { data: cats = [] } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await fetch("https://old-shop-server.vercel.app/categories");
      const data = await res.json();
      return data;
    },
  });
  return (
    <div className="my-10" id="category">
      <h2 className="text-3xl font-bold text-center">All Categories </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-10">
        {cats.map((cat) => (
          <Catagory key={cat._id} cat={cat}></Catagory>
        ))}
      </div>
    </div>
  );
};

export default Catagories;
