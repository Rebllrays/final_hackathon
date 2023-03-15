import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routing from "./Routing";
import Navbar from "./components/Content/Navbar/Navbar";
import AuthContextProvider from "./contexts/AuthContextProvider";

function App() {
  return (
    <>
      <AuthContextProvider>
        <BrowserRouter>
          <Navbar />
          <Routing />
        </BrowserRouter>
      </AuthContextProvider>
    </>
  );
}

export default App;
