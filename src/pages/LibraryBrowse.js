// import React from "react";

// export default function LibraryBrowse() {

//   const searchBrowseGames = browseGame.filter(info =>
//     info.name.toLowerCase().includes(inputValue.toLowerCase())
//   );

//   return (

//     {!inputValue && (
//       <BrowseEmpty>
//         Please use the searchbar to browse through our available games.
//       </BrowseEmpty>
//     )}
//     {inputValue && (
//       <CollectionGrid>
//         {searchBrowseGames.map(game => (
//           <CollectionItem
//             key={game.id}
//             onClick={() => {
//               setSelectGame(game);
//               setShowModal(!showModal);
//             }}
//             src={game.image_url}
//           />
//         ))}
//       </CollectionGrid>

//   )
// }
