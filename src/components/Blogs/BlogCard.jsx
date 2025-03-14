import React from "react";
import { useNavigate } from "react-router-dom";

const BlogCard = ({ service }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/services/${service.id}`);
  };

  return (
    <div
      id="card"
      className="mx-2 mb-7 rounded-lg p-4 shadow-lg transition-all duration-500 hover:scale-[1.01] hover:shadow-xl cursor-pointer"
      onClick={handleClick}
    >
      <div className="overflow-hidden rounded-lg">
        <img
          src={service.image}
          alt={service.name}
          className="mx-auto h-[250px] w-full object-cover transition duration-700 hover:scale-110"
        />
      </div>
      <div className="space-y-3 py-3">
        <h1 className="text-xl font-bold">{service.name}</h1>
        <p className="text-gray-600">{service.description}</p>
      </div>
    </div>
  );
};

export default BlogCard;
