import React from "react";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";

export default {
  title: "Header"
};

export const HeaderBar = () => <Header />;

export const HeaderBarWithSearch = () => (
  <Header>
    <SearchBar />
  </Header>
);
