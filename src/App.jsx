import React from "react";
import { ServicesGrid } from "./components/ServicesGrid";
import { Navbar } from "./components/Navbar";
import { Principal } from "./components/Principal";

export function App() {
  return (
    <>
      <>
        <Navbar />
      </>
      <>
        <Principal />
      </>
      <h1>All our services</h1>
      <>
        <ServicesGrid />
      </>
    </>
  );
}
