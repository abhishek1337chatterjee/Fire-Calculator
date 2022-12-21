import { Routes, Route } from "react-router-dom";

import React from "react";
import { FireCal } from "./FireCal";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<FireCal />} />
    </Routes>
  );
};
