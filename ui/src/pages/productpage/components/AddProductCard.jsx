import React from 'react';
import { IoIosAddCircleOutline } from "react-icons/io";

export const AddProductCard = () => {
  return (
    <div
      className="card p-3 g4 display-card product-card d-flex align-items-center justify-content-center" data-bs-toggle="offcanvas" data-bs-target="#add-product-form"
    >
      <IoIosAddCircleOutline size={100} color='rgba(var(--non-photo-blue))' opacity={0.8} />
    </div>
  );
};

