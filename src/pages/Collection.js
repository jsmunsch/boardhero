import React, { useState } from "react";
import Header from "../components/Header";
import LibraryNav from "../components/LibraryNav";
import CollectionGrid from "../components/CollectionGrid";
import CollectionItem from "../components/CollectionItem";
import OptionBox from "../components/OptionBox";

export default function Collection() {
  const [navigation, setNavigation] = useState("");
  const [showOptions, setShowOptions] = useState(false);

  return (
    <>
      <Header onClick={setShowOptions} />
      <OptionBox show={showOptions} />
      <LibraryNav selected={navigation} onClick={setNavigation} />
      <CollectionGrid>
        <CollectionItem />
        <CollectionItem />
        <CollectionItem />
        <CollectionItem />
        <CollectionItem />
        <CollectionItem />
        <CollectionItem />
        <CollectionItem />
        <CollectionItem />
        <CollectionItem />
        <CollectionItem />
        <CollectionItem />
        <CollectionItem />
        <CollectionItem />
        <CollectionItem />
        <CollectionItem />
      </CollectionGrid>
    </>
  );
}
