import React from "react";

import { ChakraProvider } from "@chakra-ui/react";

import Landing from "./pages/Landing";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";

import "./App.css";

const App = () => {
  const PageWrapper = () => (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );

  return (
    <ChakraProvider>
      <Router>
        <Routes>
          <Route element={<PageWrapper />}>
            <Route path="/" element={<Landing />} />
          </Route>
        </Routes>
      </Router>
    </ChakraProvider>
  );
};

export default App;
