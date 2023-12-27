import React from "react";

const Shapes = () => {
  return (
    <div className="relative w-full max-w-xl">
      <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-lg opacity-60 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-lg opacity-60 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-lg opacity-60 animate-blob animation-delay-4000"></div>
    </div>
  );
};

export default Shapes;
