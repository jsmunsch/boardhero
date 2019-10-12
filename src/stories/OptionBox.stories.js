import React from "react";
import OptionBox from "../components/OptionBox";
import Header from "../components/Header";

export default {
  title: "OptionBox"
};

export const SortFilterBox = () => <OptionBox />;

export const HeaderWithOptionBox = () => (
  <>
    <Header />
    <OptionBox />
  </>
);
