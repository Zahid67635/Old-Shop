import { useContext, useState } from "react";
import { AuthContext } from "../../../Contexts/ContextProvider";
import BookModal from "../../../Shared/BookModal/BookModal";

const Item = ({ details, product, setProduct }) => {
  const { name, price, image, reSellPrice, time, age, location } = details;
  const { user } = useContext(AuthContext);
  return (
    <div className="mx-auto">
      <div className="card card-compact w-80 h-80 md:w-96 md:h-96 bg-base-100 shadow-xl">
        <figure className="w-full">
          <img className="w-full" src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <div className="flex items-center">
            <h2 className="text-2xl font-semibold">{name}</h2>
            <p className="text-end font-semibold">Location: {location}</p>
          </div>
          <h3 className="text-lg font-semibold mt-4">{age} used</h3>
          <div className="card-actions justify-between">
            <div>
              <p className="text-lg">
                <del>{price}</del> {reSellPrice}
              </p>
              <p className="text-blue-700 font-semibold">Posted {time}</p>
            </div>
            {user ? (
              <>
                <label
                  htmlFor="bookModal"
                  className="btn btn-md btn-outline btn-primary"
                  onClick={() => setProduct(details)}
                >
                  Book Now
                </label>
              </>
            ) : (
              <div
                className="tooltip tooltip-top tooltip-info"
                data-tip="Please Sign In"
              >
                <label
                  htmlFor="bookModal"
                  className="btn btn-md btn-outline btn-primary"
                  disabled
                  onClick={() => setProduct(details)}
                >
                  Book Now
                </label>
              </div>
            )}
          </div>
          {product && (
            <BookModal details={product} setProduct={setProduct}></BookModal>
          )}
        </div>
      </div>
    </div>
  );
};

export default Item;
