import React from "react";

import { Button } from "@chakra-ui/react";
import { ChakraProvider, Box, Text, Divider } from "@chakra-ui/react";
import Landing from "./pages/Landing";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import AddMenuItem from "./components/AddMenuItem/AddMenuItem";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  Navigate,
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
          <Route path="/add" element={<AddMenuItem />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
};

export default App;
