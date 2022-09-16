import React from "react";

import { Apidata } from "./Apidata";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Addemployee } from "./Addemployee";
import { LogIn } from "./Login";
import { EditEmployee } from "./EditEmployee";
// shakib change the lnding component to login
export const Routingpractice = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/Home" element={<Apidata />} />
          <Route exact path="/addemployee" element={<Addemployee />} />
          <Route exact path="/" element={<Apidata />} />
          <Route exact path="/edit-employee" element={<EditEmployee />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
