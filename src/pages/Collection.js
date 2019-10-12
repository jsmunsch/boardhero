import React, { useState } from "react";
import Header from "../components/Header";
import LibraryNav from "../components/LibraryNav";
import CollectionGrid from "../components/CollectionGrid";
import CollectionItem from "../components/CollectionItem";

export default function Collection() {
  const [navigation, setNavigation] = useState("");

  return (
    <>
      <Header />
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
