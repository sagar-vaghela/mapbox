import React from "react";

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-[calc(100vh-144px)] max-w-6xl mx-auto px-16 py-6 flex flex-col gap-6">
      {children}
    </div>
  );
};

export default MainLayout;
