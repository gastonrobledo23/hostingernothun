import React from "react";

const Layout = ({ title, description, pubDate, heroImage, children }) => {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="text-gray-500">{description}</p>
      <p className="text-sm text-gray-400">Publicado el: {pubDate}</p>
      <img src={heroImage} alt="Hero" className="w-full rounded-lg my-4" />
      <div>{children}</div>
    </div>
  );
};

export default Layout;
