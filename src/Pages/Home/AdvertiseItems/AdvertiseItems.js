import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import Item from "./Item";

const AdvertiseItems = () => {
  const [product, setProduct] = useState({});

  const { data: items = [], isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await fetch("https://old-shop-server.vercel.app/products");
      const data = await res.json();
      return data;
    },
  });
  if (isLoading) {
    return (
      <div className="flex items-center justify-center">
        <span className="font-semibold">Loading..</span>
        <span className="loading loading-ring loading-lg"></span>
      </div>
    );
  }
  return (
    <div className="my-32 px-2 md:mx-20">
      <h2 className="text-3xl text-center ml-5 my-10 font-bold">
        Available Products
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {items.slice(0, 3).map((i) => (
          <Item
            key={i._id}
            details={i}
            setProduct={setProduct}
            product={product}
          ></Item>
        ))}
      </div>
      <button className="btn btn-info flex mx-auto my-10">See More</button>
    </div>
  );
};

export default AdvertiseItems;
