import React from "react";
import { Route, Routes } from "react-router-dom";
import ListProduct from "../components/Products/ListProduct";
import Admin from "../components/admin/Admin";

const MainRoutes = () => {
  const PUBLICK = [
    {
      link: "/admin",
      element: <Admin />,
      id: 1,
    },
    {
      link: "/menu",
      element: <ListProduct />,
      id: 2,
    },
    {
      link: "/menu",
      element: <ListProduct />,
      id: 2,
    },
  ];
  return (
    <Routes>
      {PUBLICK.map((item) => (
        <Route path={item.link} element={item.element} key={item.id} />
      ))}
    </Routes>
  );
};

export default MainRoutes;
