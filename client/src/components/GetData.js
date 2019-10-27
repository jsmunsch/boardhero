import { getGameCollection } from "../api/GameCollection";
import { getBrowseCollection } from "../api/BrowseCollection";
import { getGameWishlist } from "../api/WishlistCollection";

export const gameCollection = Object.entries(getGameCollection());
export const browseCollection = Object.entries(getBrowseCollection());
export const wishlistCollection = Object.entries(getGameWishlist());
