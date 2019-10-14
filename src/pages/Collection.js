import React, { useState } from "react";
import Header from "../components/Header";
import LibraryNav from "../components/LibraryNav";
import CollectionGrid from "../components/CollectionGrid";
import CollectionItem from "../components/CollectionItem";
import OptionBox from "../components/OptionBox";
import SortModal from "../components/SortModal";

export default function Collection() {
  const [navigation, setNavigation] = useState("Collection");
  const [options, setOptions] = useState(false);
  const [showSort, setShowSort] = useState(false);
  const GamesArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
  return (
    <>
      <Header toggleOptions={() => setOptions(!options)} />
      <OptionBox show={options} onClick={() => setShowSort(!showSort)} />
      <SortModal show={showSort} />
      <LibraryNav selected={navigation} onNavigationChange={setNavigation} />
      <CollectionGrid>
        {GamesArray.map(index => (
          <CollectionItem key={index} />
        ))}
      </CollectionGrid>
    </>
  );
}
